const { execSync } = require('child_process');
const semver = require('semver');
const inquirer = require('inquirer');

const currentVersion = require('../projects/slate-ng/package.json').version;

const release = async () => {
  console.log(`Current easy cli version is ${currentVersion}`);
  const releaseActions = ['patch', 'minor', 'major'];
  const versions = {};
  // 生成预发布版本标示
  releaseActions.map(r => (versions[r] = semver.inc(currentVersion, r)));
  const releaseChoices = releaseActions.map(r => ({
    name: `${r} (${versions[r]})`,
    value: r,
  }));
  // 选择发布方式
  const { release } = await inquirer.prompt([
    {
      name: 'release',
      message: 'Select a release type',
      type: 'list',
      choices: [...releaseChoices],
    },
  ]);
  console.log(release);
  // 优先自定义版本
  const version = versions[release];
  // 二次确认发布
  const { yes } = await inquirer.prompt([
    {
      name: 'yes',
      message: `Confirm releasing ${version}`,
      type: 'confirm',
    },
  ]);
  if (yes) {
    execSync(`standard-version -r ${release}`, {
      stdio: 'inherit',
    });
  }
};

release().catch(err => {
  console.error(err);
  process.exit(1);
});
