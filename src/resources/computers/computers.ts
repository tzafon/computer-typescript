// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExecAPI from './exec';
import {
  Exec,
  ExecExecuteParams,
  ExecExecuteResponse,
  ExecExecuteSyncParams,
  ExecExecuteSyncResponse,
} from './exec';
import * as TabsAPI from './tabs';
import { TabCreateParams, TabDeleteParams, TabSwitchParams, Tabs } from './tabs';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Computers extends APIResource {
  tabs: TabsAPI.Tabs = new TabsAPI.Tabs(this._client);
  exec: ExecAPI.Exec = new ExecAPI.Exec(this._client);

  /**
   * Create a new automation session. Set kind to "browser" for web automation or
   * "desktop" for OS-level automation. Defaults to "browser" if not specified.
   * timeout_seconds controls max lifetime, inactivity_timeout_seconds controls idle
   * timeout, and auto_kill disables only the idle timeout (max lifetime still
   * applies).
   *
   * @example
   * ```ts
   * const computerResponse = await client.computers.create();
   * ```
   */
  create(
    body: ComputerCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ComputerResponse> {
    return this._client.post('/computers', { body, ...options });
  }

  /**
   * Get the current status and metadata of a computer instance
   *
   * @example
   * ```ts
   * const computerResponse = await client.computers.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ComputerResponse> {
    return this._client.get(path`/computers/${id}`, options);
  }

  /**
   * List all active computers for the user's organization
   *
   * @example
   * ```ts
   * const computerResponses = await client.computers.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ComputerListResponse> {
    return this._client.get('/computers', options);
  }

  /**
   * Take a screenshot of the current browser viewport, optionally as base64.
   * Optionally specify tab_id (browser sessions only)
   *
   * @example
   * ```ts
   * const actionResult =
   *   await client.computers.captureScreenshot('id');
   * ```
   */
  captureScreenshot(
    id: string,
    body: ComputerCaptureScreenshotParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/screenshot`, { body, ...options });
  }

  /**
   * Change the proxy settings for the browser session
   *
   * @example
   * ```ts
   * const actionResult = await client.computers.changeProxy(
   *   'id',
   * );
   * ```
   */
  changeProxy(
    id: string,
    body: ComputerChangeProxyParams,
    options?: RequestOptions,
  ): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/change-proxy`, { body, ...options });
  }

  /**
   * Perform a left mouse click at the specified x,y coordinates. Coordinates are
   * screenshot pixel positions - send exactly what you see in the
   * screenshot/screencast image. If target is at pixel (500, 300) in the image, send
   * x=500, y=300. Optionally specify tab_id (browser sessions only)
   *
   * @example
   * ```ts
   * const actionResult = await client.computers.click('id');
   * ```
   */
  click(id: string, body: ComputerClickParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/click`, { body, ...options });
  }

  /**
   * Establish WebSocket for real-time bidirectional communication
   *
   * @example
   * ```ts
   * await client.computers.connectWebsocket('id');
   * ```
   */
  connectWebsocket(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/computers/${id}/ws`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Execute a shell command with optional timeout and output length limits.
   * Optionally specify tab_id (browser sessions only). Deprecated: use /exec or
   * /exec/sync instead.
   *
   * @example
   * ```ts
   * const actionResult = await client.computers.debug('id');
   * ```
   */
  debug(id: string, body: ComputerDebugParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/debug`, { body, ...options });
  }

  /**
   * Perform a double mouse click at the specified x,y coordinates. Coordinates are
   * screenshot pixel positions. Optionally specify tab_id (browser sessions only)
   *
   * @example
   * ```ts
   * const actionResult = await client.computers.doubleClick(
   *   'id',
   * );
   * ```
   */
  doubleClick(
    id: string,
    body: ComputerDoubleClickParams,
    options?: RequestOptions,
  ): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/double-click`, { body, ...options });
  }

  /**
   * Perform a click-and-drag action from (x1,y1) to (x2,y2). Coordinates are
   * screenshot pixel positions. Optionally specify tab_id (browser sessions only)
   *
   * @example
   * ```ts
   * const actionResult = await client.computers.drag('id');
   * ```
   */
  drag(id: string, body: ComputerDragParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/drag`, { body, ...options });
  }

  /**
   * Execute a single action such as screenshot, click, type, navigate, scroll,
   * debug, set_viewport, get_html_content or other computer use actions
   *
   * @example
   * ```ts
   * const actionResult = await client.computers.executeAction(
   *   'id',
   * );
   * ```
   */
  executeAction(
    id: string,
    body: ComputerExecuteActionParams,
    options?: RequestOptions,
  ): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/execute`, { body, ...options });
  }

  /**
   * Execute a batch of actions in sequence, stopping on first error
   *
   * @example
   * ```ts
   * const response = await client.computers.executeBatch('id');
   * ```
   */
  executeBatch(
    id: string,
    body: ComputerExecuteBatchParams,
    options?: RequestOptions,
  ): APIPromise<ComputerExecuteBatchResponse> {
    return this._client.post(path`/computers/${id}/batch`, { body, ...options });
  }

  /**
   * Get the HTML content of the current browser page. Optionally specify tab_id
   * (browser sessions only)
   *
   * @example
   * ```ts
   * const actionResult = await client.computers.getHTML('id');
   * ```
   */
  getHTML(
    id: string,
    body: ComputerGetHTMLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/html`, { body, ...options });
  }

  /**
   * Extend the timeout for a computer session and verify it is still running
   *
   * @example
   * ```ts
   * const response = await client.computers.keepAlive('id');
   * ```
   */
  keepAlive(id: string, options?: RequestOptions): APIPromise<ComputerKeepAliveResponse> {
    return this._client.post(path`/computers/${id}/keepalive`, options);
  }

  /**
   * Press and hold a keyboard key. Use with key_up to release. Supports modifier
   * keys (shift, ctrl, alt, meta) for complex interactions like Shift+Click.
   *
   * **Supported keys:** Modifier keys (shift, ctrl, alt, meta), special keys (enter,
   * escape, tab, backspace, delete, space), arrow keys (arrowup, arrowdown,
   * arrowleft, arrowright), navigation (home, end, pageup, pagedown), function keys
   * (f1-f24), and any single character (a-z, 0-9).
   *
   * **Key names are case-insensitive:** "shift", "Shift", and "SHIFT" all work.
   *
   * **Example Shift+Click:** 1) key_down "shift", 2) click at coordinates, 3) key_up
   * "shift"
   *
   * @example
   * ```ts
   * const actionResult = await client.computers.keyDown('id');
   * ```
   */
  keyDown(id: string, body: ComputerKeyDownParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/key-down`, { body, ...options });
  }

  /**
   * Release a keyboard key that was previously pressed with key_down. The key name
   * should match the corresponding key_down call.
   *
   * **Key names are case-insensitive:** "shift", "Shift", and "SHIFT" all work.
   *
   * **Important:** Always release modifier keys after use to prevent them from
   * affecting subsequent actions.
   *
   * @example
   * ```ts
   * const actionResult = await client.computers.keyUp('id');
   * ```
   */
  keyUp(id: string, body: ComputerKeyUpParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/key-up`, { body, ...options });
  }

  /**
   * Press and hold the left mouse button at the specified x,y coordinates.
   * Coordinates are screenshot pixel positions. Optionally specify tab_id (browser
   * sessions only)
   *
   * @example
   * ```ts
   * const actionResult = await client.computers.mouseDown('id');
   * ```
   */
  mouseDown(id: string, body: ComputerMouseDownParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/mouse-down`, { body, ...options });
  }

  /**
   * Release the left mouse button at the specified x,y coordinates. Coordinates are
   * screenshot pixel positions. Optionally specify tab_id (browser sessions only)
   *
   * @example
   * ```ts
   * const actionResult = await client.computers.mouseUp('id');
   * ```
   */
  mouseUp(id: string, body: ComputerMouseUpParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/mouse-up`, { body, ...options });
  }

  /**
   * Navigate the browser to a specified URL. Optionally specify tab_id to navigate a
   * specific tab (browser sessions only)
   *
   * @example
   * ```ts
   * const actionResult = await client.computers.navigate('id');
   * ```
   */
  navigate(id: string, body: ComputerNavigateParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/navigate`, { body, ...options });
  }

  /**
   * Press a combination of keys (e.g., ["Control", "c"] for copy). Optionally
   * specify tab_id (browser sessions only)
   *
   * @example
   * ```ts
   * const actionResult = await client.computers.pressHotkey(
   *   'id',
   * );
   * ```
   */
  pressHotkey(
    id: string,
    body: ComputerPressHotkeyParams,
    options?: RequestOptions,
  ): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/hotkey`, { body, ...options });
  }

  /**
   * Get current TTLs and last activity metadata for a computer session
   *
   * @example
   * ```ts
   * const response = await client.computers.retrieveStatus(
   *   'id',
   * );
   * ```
   */
  retrieveStatus(id: string, options?: RequestOptions): APIPromise<ComputerRetrieveStatusResponse> {
    return this._client.get(path`/computers/${id}/status`, options);
  }

  /**
   * Perform a right mouse click at the specified x,y coordinates. Coordinates are
   * screenshot pixel positions. Optionally specify tab_id (browser sessions only)
   *
   * @example
   * ```ts
   * const actionResult = await client.computers.rightClick(
   *   'id',
   * );
   * ```
   */
  rightClick(id: string, body: ComputerRightClickParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/right-click`, { body, ...options });
  }

  /**
   * Scroll at the specified x,y position by delta dx,dy. Coordinates are screenshot
   * pixel positions. Optionally specify tab_id (browser sessions only)
   *
   * @example
   * ```ts
   * const actionResult = await client.computers.scrollViewport(
   *   'id',
   * );
   * ```
   */
  scrollViewport(
    id: string,
    body: ComputerScrollViewportParams,
    options?: RequestOptions,
  ): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/scroll`, { body, ...options });
  }

  /**
   * Change the browser viewport dimensions and scale factor. Optionally specify
   * tab_id (browser sessions only)
   *
   * @example
   * ```ts
   * const actionResult = await client.computers.setViewport(
   *   'id',
   * );
   * ```
   */
  setViewport(
    id: string,
    body: ComputerSetViewportParams,
    options?: RequestOptions,
  ): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/viewport`, { body, ...options });
  }

  /**
   * Stream real-time events using Server-Sent Events (SSE)
   *
   * @example
   * ```ts
   * await client.computers.streamEvents('id');
   * ```
   */
  streamEvents(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/computers/${id}/events`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Stream only screencast frames (base64 JPEG images) using Server-Sent Events
   * (SSE) for live browser viewing
   *
   * @example
   * ```ts
   * await client.computers.streamScreencast('id');
   * ```
   */
  streamScreencast(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/computers/${id}/screencast`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Terminate and clean up a computer instance, stopping the session and recording
   * metrics
   *
   * @example
   * ```ts
   * await client.computers.terminate('id');
   * ```
   */
  terminate(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/computers/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Type text into the currently focused element in the browser. Optionally specify
   * tab_id (browser sessions only)
   *
   * @example
   * ```ts
   * const actionResult = await client.computers.typeText('id');
   * ```
   */
  typeText(id: string, body: ComputerTypeTextParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/type`, { body, ...options });
  }
}

export interface ActionResult {
  error_message?: string;

  executed_tab_id?: string;

  page_context?: V2GoBackendInternalTypesPageContext;

  request_id?: string;

  result?: { [key: string]: unknown };

  status?: string;

  timestamp?: string;
}

export interface ComputerResponse {
  id?: string;

  auto_kill?: boolean;

  created_at?: string;

  endpoints?: { [key: string]: string };

  expires_at?: string;

  idle_expires_at?: string;

  inactivity_timeout_seconds?: number;

  kind?: string;

  last_activity_at?: string;

  max_lifetime_seconds?: number;

  status?: string;
}

export interface V2GoBackendInternalTypesPageContext {
  device_scale_factor?: number;

  is_main_tab?: boolean;

  page_height?: number;

  page_width?: number;

  scroll_x?: number;

  scroll_y?: number;

  tab_id?: string;

  title?: string;

  url?: string;

  viewport_height?: number;

  viewport_width?: number;
}

export type ComputerListResponse = Array<ComputerResponse>;

export type ComputerExecuteBatchResponse = { [key: string]: unknown };

export type ComputerKeepAliveResponse = { [key: string]: unknown };

export interface ComputerRetrieveStatusResponse {
  id?: string;

  auto_kill?: boolean;

  created_at?: string;

  expires_at?: string;

  idle_expires_at?: string;

  inactivity_timeout_seconds?: number;

  last_activity_at?: string;

  max_lifetime_seconds?: number;

  status?: string;
}

export interface ComputerCreateParams {
  /**
   * If true (default), kill session after inactivity
   */
  auto_kill?: boolean;

  context_id?: string;

  display?: ComputerCreateParams.Display;

  environment_id?: string;

  /**
   * Idle timeout before auto-kill
   */
  inactivity_timeout_seconds?: number;

  /**
   * "browser" (default) or "desktop"
   */
  kind?: string;

  /**
   * Persist cookies/storage state to DB on session teardown only if true
   */
  persistent?: boolean;

  stealth?: unknown;

  timeout_seconds?: number;
}

export namespace ComputerCreateParams {
  export interface Display {
    height?: number;

    scale?: number;

    width?: number;
  }
}

export interface ComputerCaptureScreenshotParams {
  base64?: boolean;

  tab_id?: string;
}

export interface ComputerChangeProxyParams {
  proxy_url?: string;
}

export interface ComputerClickParams {
  tab_id?: string;

  x?: number;

  y?: number;
}

export interface ComputerDebugParams {
  command?: string;

  max_output_length?: number;

  tab_id?: string;

  timeout_seconds?: number;
}

export interface ComputerDoubleClickParams {
  tab_id?: string;

  x?: number;

  y?: number;
}

export interface ComputerDragParams {
  tab_id?: string;

  x1?: number;

  x2?: number;

  y1?: number;

  y2?: number;
}

export interface ComputerExecuteActionParams {
  action?: ComputerExecuteActionParams.Action;
}

export namespace ComputerExecuteActionParams {
  export interface Action {
    /**
     * For get_html_content
     */
    auto_detect_encoding?: boolean;

    /**
     * For screenshot
     */
    base64?: boolean;

    button?: string;

    debug?: Action.Debug;

    /**
     * For scrolling
     */
    dx?: number;

    dy?: number;

    height?: number;

    /**
     * Include page context in response
     */
    include_context?: boolean;

    /**
     * For key_down/key_up
     */
    key?: string;

    keys?: Array<string>;

    ms?: number;

    proxy_url?: string;

    /**
     * RequestId is used for correlating streaming output to the originating request.
     * Set on ActionRequest, not individual action types.
     */
    request_id?: string;

    scale_factor?: number;

    /**
     * For tab management (browser sessions only)
     */
    tab_id?: string;

    text?: string;

    /**
     * click|double_click|right_click|drag|type|keypress|scroll|wait|screenshot|go_to_url|debug|get_html_content|set_viewport|list_tabs|new_tab|switch_tab|close_tab|key_down|key_up|mouse_down|mouse_up
     */
    type?: string;

    url?: string;

    /**
     * For set_viewport
     */
    width?: number;

    x?: number;

    /**
     * For dragging/scrolling
     */
    x1?: number;

    /**
     * For dragging
     */
    x2?: number;

    y?: number;

    y1?: number;

    y2?: number;
  }

  export namespace Action {
    export interface Debug {
      command?: string;

      cwd?: string;

      env?: { [key: string]: string };

      max_output_length?: number;

      request_id?: string;

      stream?: boolean;

      timeout_seconds?: number;
    }
  }
}

export interface ComputerExecuteBatchParams {
  actions?: Array<ComputerExecuteBatchParams.Action>;
}

export namespace ComputerExecuteBatchParams {
  export interface Action {
    /**
     * For get_html_content
     */
    auto_detect_encoding?: boolean;

    /**
     * For screenshot
     */
    base64?: boolean;

    button?: string;

    debug?: Action.Debug;

    /**
     * For scrolling
     */
    dx?: number;

    dy?: number;

    height?: number;

    /**
     * Include page context in response
     */
    include_context?: boolean;

    /**
     * For key_down/key_up
     */
    key?: string;

    keys?: Array<string>;

    ms?: number;

    proxy_url?: string;

    /**
     * RequestId is used for correlating streaming output to the originating request.
     * Set on ActionRequest, not individual action types.
     */
    request_id?: string;

    scale_factor?: number;

    /**
     * For tab management (browser sessions only)
     */
    tab_id?: string;

    text?: string;

    /**
     * click|double_click|right_click|drag|type|keypress|scroll|wait|screenshot|go_to_url|debug|get_html_content|set_viewport|list_tabs|new_tab|switch_tab|close_tab|key_down|key_up|mouse_down|mouse_up
     */
    type?: string;

    url?: string;

    /**
     * For set_viewport
     */
    width?: number;

    x?: number;

    /**
     * For dragging/scrolling
     */
    x1?: number;

    /**
     * For dragging
     */
    x2?: number;

    y?: number;

    y1?: number;

    y2?: number;
  }

  export namespace Action {
    export interface Debug {
      command?: string;

      cwd?: string;

      env?: { [key: string]: string };

      max_output_length?: number;

      request_id?: string;

      stream?: boolean;

      timeout_seconds?: number;
    }
  }
}

export interface ComputerGetHTMLParams {
  auto_detect_encoding?: boolean;

  tab_id?: string;
}

export interface ComputerKeyDownParams {
  /**
   * Key name to press. Case-insensitive. Examples: "shift", "ctrl", "a", "Enter"
   */
  key?: string;

  /**
   * Optional tab ID for browser sessions (ignored for desktop sessions)
   */
  tab_id?: string;
}

export interface ComputerKeyUpParams {
  /**
   * Key name to release. Case-insensitive. Examples: "shift", "ctrl", "a", "Enter"
   */
  key?: string;

  /**
   * Optional tab ID for browser sessions (ignored for desktop sessions)
   */
  tab_id?: string;
}

export interface ComputerMouseDownParams {
  tab_id?: string;

  x?: number;

  y?: number;
}

export interface ComputerMouseUpParams {
  tab_id?: string;

  x?: number;

  y?: number;
}

export interface ComputerNavigateParams {
  tab_id?: string;

  url?: string;
}

export interface ComputerPressHotkeyParams {
  keys?: Array<string>;

  tab_id?: string;
}

export interface ComputerRightClickParams {
  tab_id?: string;

  x?: number;

  y?: number;
}

export interface ComputerScrollViewportParams {
  dx?: number;

  dy?: number;

  tab_id?: string;

  x?: number;

  y?: number;
}

export interface ComputerSetViewportParams {
  height?: number;

  scale_factor?: number;

  tab_id?: string;

  width?: number;
}

export interface ComputerTypeTextParams {
  tab_id?: string;

  text?: string;
}

Computers.Tabs = Tabs;
Computers.Exec = Exec;

export declare namespace Computers {
  export {
    type ActionResult as ActionResult,
    type ComputerResponse as ComputerResponse,
    type V2GoBackendInternalTypesPageContext as V2GoBackendInternalTypesPageContext,
    type ComputerListResponse as ComputerListResponse,
    type ComputerExecuteBatchResponse as ComputerExecuteBatchResponse,
    type ComputerKeepAliveResponse as ComputerKeepAliveResponse,
    type ComputerRetrieveStatusResponse as ComputerRetrieveStatusResponse,
    type ComputerCreateParams as ComputerCreateParams,
    type ComputerCaptureScreenshotParams as ComputerCaptureScreenshotParams,
    type ComputerChangeProxyParams as ComputerChangeProxyParams,
    type ComputerClickParams as ComputerClickParams,
    type ComputerDebugParams as ComputerDebugParams,
    type ComputerDoubleClickParams as ComputerDoubleClickParams,
    type ComputerDragParams as ComputerDragParams,
    type ComputerExecuteActionParams as ComputerExecuteActionParams,
    type ComputerExecuteBatchParams as ComputerExecuteBatchParams,
    type ComputerGetHTMLParams as ComputerGetHTMLParams,
    type ComputerKeyDownParams as ComputerKeyDownParams,
    type ComputerKeyUpParams as ComputerKeyUpParams,
    type ComputerMouseDownParams as ComputerMouseDownParams,
    type ComputerMouseUpParams as ComputerMouseUpParams,
    type ComputerNavigateParams as ComputerNavigateParams,
    type ComputerPressHotkeyParams as ComputerPressHotkeyParams,
    type ComputerRightClickParams as ComputerRightClickParams,
    type ComputerScrollViewportParams as ComputerScrollViewportParams,
    type ComputerSetViewportParams as ComputerSetViewportParams,
    type ComputerTypeTextParams as ComputerTypeTextParams,
  };

  export {
    Tabs as Tabs,
    type TabCreateParams as TabCreateParams,
    type TabDeleteParams as TabDeleteParams,
    type TabSwitchParams as TabSwitchParams,
  };

  export {
    Exec as Exec,
    type ExecExecuteResponse as ExecExecuteResponse,
    type ExecExecuteSyncResponse as ExecExecuteSyncResponse,
    type ExecExecuteParams as ExecExecuteParams,
    type ExecExecuteSyncParams as ExecExecuteSyncParams,
  };
}
