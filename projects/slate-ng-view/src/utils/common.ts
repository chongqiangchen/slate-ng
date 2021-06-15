import { AngularEditor } from "../plugins/angular-editor";
import { DOMNode, isDOMNode } from "./dom";
import { Editor } from "slate";

/**
 * Check if the target is in the editor.
 */
export const hasTarget = (
  editor: AngularEditor,
  target: EventTarget | null
): target is DOMNode => {
  return isDOMNode(target) && AngularEditor.hasDOMNode(editor, target);
};


/**
 * Check if an event is overrided by a handler.
 */

export const isEventHandled = (
  event: Event,
  handler?: (event: Event) => void
) => {
  if (!handler) {
    return false;
  }
  handler(event);
  return event.defaultPrevented;
};

/**
 * Check if the target is inside void and in the editor.
 */

export const isTargetInsideVoid = (
  editor: AngularEditor,
  target: EventTarget | null
): boolean => {
  const slateNode =
    hasTarget(editor, target) && AngularEditor.toSlateNode(editor, target)
  return Editor.isVoid(editor, slateNode)
}


/**
 * Check if a DOM event is overrided by a handler.
 */

export const isDOMEventHandled = <E extends Event>(
  event: E,
  handler?: (event: E) => void
) => {
  if (!handler) {
    return false;
  }

  handler(event);
  return event.defaultPrevented;
};

/**
 * Check if the target is editable and in the editor.
 */

export const hasEditableTarget = (
  editor: AngularEditor,
  target: EventTarget | null
) => {
  return (
    isDOMNode(target) &&
    AngularEditor.hasDOMNode(editor, target, { editable: true })
  );
};
