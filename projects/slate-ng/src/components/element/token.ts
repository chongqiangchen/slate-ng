import { InjectionToken } from '@angular/core';
import { Range } from 'slate';

export const CHILD_PORTALS_TOKEN = new InjectionToken('child_portals_token');
export const PARENT_NODE_TOKEN = new InjectionToken('parent_node_token');
export const CURRENT_NODE_TOKEN = new InjectionToken('current_node_token');
export const NODE_INDEX_TOKEN = new InjectionToken('node_index_token');
export const IS_LAST_TOKEN = new InjectionToken('is_last_token');
export const KEY_TOKEN = new InjectionToken('key_token');
export const DECORATIONS_TOKEN = new InjectionToken<Range[]>('decorations_token');
export const SELECTION_TOKEN = new InjectionToken<Range>('selection_token');
export const LEAF_TOKEN = new InjectionToken('leaf_token');
export const LEAF_CHILD_PORTAL_TOKEN = new InjectionToken('leaf_child_portal_token');
export const PLACEHOLDER_CHILDREN_TOKEN = new InjectionToken('placeholder_children_token');
