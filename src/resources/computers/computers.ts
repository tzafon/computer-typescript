// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TabsAPI from './tabs';
import {
  TabCreateParams,
  TabCreateResponse,
  TabDeleteParams,
  TabDeleteResponse,
  TabListResponse,
  TabSwitchParams,
  TabSwitchResponse,
  Tabs,
} from './tabs';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Computers extends APIResource {
  tabs: TabsAPI.Tabs = new TabsAPI.Tabs(this._client);

  /**
   * Create a new automation session. Set kind to "browser" for web automation or
   * "desktop" for OS-level automation. Defaults to "browser" if not specified.
   * timeout_seconds controls max lifetime, inactivity_timeout_seconds controls idle
   * timeout, and auto_kill disables only the idle timeout (max lifetime still
   * applies).
   */
  create(
    body: ComputerCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ComputerCreateResponse> {
    return this._client.post('/computers', { body, ...options });
  }

  /**
   * Get the current status and metadata of a computer instance
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ComputerRetrieveResponse> {
    return this._client.get(path`/computers/${id}`, options);
  }

  /**
   * List all active computers for the user's organization
   */
  list(options?: RequestOptions): APIPromise<ComputerListResponse> {
    return this._client.get('/computers', options);
  }

  /**
   * Take a screenshot of the current browser viewport, optionally as base64.
   * Optionally specify tab_id (browser sessions only)
   */
  captureScreenshot(
    id: string,
    body: ComputerCaptureScreenshotParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ComputerCaptureScreenshotResponse> {
    return this._client.post(path`/computers/${id}/screenshot`, { body, ...options });
  }

  /**
   * Perform a left mouse click at the specified x,y coordinates. Coordinates are
   * screenshot pixel positions - send exactly what you see in the
   * screenshot/screencast image. If target is at pixel (500, 300) in the image, send
   * x=500, y=300. Optionally specify tab_id (browser sessions only)
   */
  click(id: string, body: ComputerClickParams, options?: RequestOptions): APIPromise<ComputerClickResponse> {
    return this._client.post(path`/computers/${id}/click`, { body, ...options });
  }

  /**
   * Establish WebSocket for real-time bidirectional communication
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
   */
  debug(id: string, body: ComputerDebugParams, options?: RequestOptions): APIPromise<ComputerDebugResponse> {
    return this._client.post(path`/computers/${id}/debug`, { body, ...options });
  }

  /**
   * Perform a double mouse click at the specified x,y coordinates. Coordinates are
   * screenshot pixel positions. Optionally specify tab_id (browser sessions only)
   */
  doubleClick(
    id: string,
    body: ComputerDoubleClickParams,
    options?: RequestOptions,
  ): APIPromise<ComputerDoubleClickResponse> {
    return this._client.post(path`/computers/${id}/double-click`, { body, ...options });
  }

  /**
   * Perform a click-and-drag action from (x1,y1) to (x2,y2). Coordinates are
   * screenshot pixel positions. Optionally specify tab_id (browser sessions only)
   */
  drag(id: string, body: ComputerDragParams, options?: RequestOptions): APIPromise<ComputerDragResponse> {
    return this._client.post(path`/computers/${id}/drag`, { body, ...options });
  }

  /**
   * Execute a single action such as screenshot, click, type, navigate, scroll,
   * debug, set_viewport, get_html_content or other computer use actions
   */
  executeAction(
    id: string,
    body: ComputerExecuteActionParams,
    options?: RequestOptions,
  ): APIPromise<ComputerExecuteActionResponse> {
    return this._client.post(path`/computers/${id}/execute`, { body, ...options });
  }

  /**
   * Execute a batch of actions in sequence, stopping on first error
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
   */
  getHTML(
    id: string,
    body: ComputerGetHTMLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ComputerGetHTMLResponse> {
    return this._client.post(path`/computers/${id}/html`, { body, ...options });
  }

  /**
   * Extend the timeout for a computer session and verify it is still running
   */
  keepAlive(id: string, options?: RequestOptions): APIPromise<ComputerKeepAliveResponse> {
    return this._client.post(path`/computers/${id}/keepalive`, options);
  }

  /**
   * Press and hold a keyboard key. Use with key_up for complex interactions.
   * Optionally specify tab_id (browser sessions only)
   */
  keyDown(
    id: string,
    body: ComputerKeyDownParams,
    options?: RequestOptions,
  ): APIPromise<ComputerKeyDownResponse> {
    return this._client.post(path`/computers/${id}/key-down`, { body, ...options });
  }

  /**
   * Release a keyboard key that was previously pressed with key_down. Optionally
   * specify tab_id (browser sessions only)
   */
  keyUp(id: string, body: ComputerKeyUpParams, options?: RequestOptions): APIPromise<ComputerKeyUpResponse> {
    return this._client.post(path`/computers/${id}/key-up`, { body, ...options });
  }

  /**
   * Press and hold the left mouse button at the specified x,y coordinates.
   * Coordinates are screenshot pixel positions. Optionally specify tab_id (browser
   * sessions only)
   */
  mouseDown(
    id: string,
    body: ComputerMouseDownParams,
    options?: RequestOptions,
  ): APIPromise<ComputerMouseDownResponse> {
    return this._client.post(path`/computers/${id}/mouse-down`, { body, ...options });
  }

  /**
   * Release the left mouse button at the specified x,y coordinates. Coordinates are
   * screenshot pixel positions. Optionally specify tab_id (browser sessions only)
   */
  mouseUp(
    id: string,
    body: ComputerMouseUpParams,
    options?: RequestOptions,
  ): APIPromise<ComputerMouseUpResponse> {
    return this._client.post(path`/computers/${id}/mouse-up`, { body, ...options });
  }

  /**
   * Navigate the browser to a specified URL. Optionally specify tab_id to navigate a
   * specific tab (browser sessions only)
   */
  navigate(
    id: string,
    body: ComputerNavigateParams,
    options?: RequestOptions,
  ): APIPromise<ComputerNavigateResponse> {
    return this._client.post(path`/computers/${id}/navigate`, { body, ...options });
  }

  /**
   * Press a combination of keys (e.g., ["Control", "c"] for copy). Optionally
   * specify tab_id (browser sessions only)
   */
  pressHotkey(
    id: string,
    body: ComputerPressHotkeyParams,
    options?: RequestOptions,
  ): APIPromise<ComputerPressHotkeyResponse> {
    return this._client.post(path`/computers/${id}/hotkey`, { body, ...options });
  }

  /**
   * Perform a right mouse click at the specified x,y coordinates. Coordinates are
   * screenshot pixel positions. Optionally specify tab_id (browser sessions only)
   */
  rightClick(
    id: string,
    body: ComputerRightClickParams,
    options?: RequestOptions,
  ): APIPromise<ComputerRightClickResponse> {
    return this._client.post(path`/computers/${id}/right-click`, { body, ...options });
  }

  /**
   * Scroll at the specified x,y position by delta dx,dy. Coordinates are screenshot
   * pixel positions. Optionally specify tab_id (browser sessions only)
   */
  scrollViewport(
    id: string,
    body: ComputerScrollViewportParams,
    options?: RequestOptions,
  ): APIPromise<ComputerScrollViewportResponse> {
    return this._client.post(path`/computers/${id}/scroll`, { body, ...options });
  }

  /**
   * Change the browser viewport dimensions and scale factor. Optionally specify
   * tab_id (browser sessions only)
   */
  setViewport(
    id: string,
    body: ComputerSetViewportParams,
    options?: RequestOptions,
  ): APIPromise<ComputerSetViewportResponse> {
    return this._client.post(path`/computers/${id}/viewport`, { body, ...options });
  }

  /**
   * Stream real-time events using Server-Sent Events (SSE)
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
   */
  typeText(
    id: string,
    body: ComputerTypeTextParams,
    options?: RequestOptions,
  ): APIPromise<ComputerTypeTextResponse> {
    return this._client.post(path`/computers/${id}/type`, { body, ...options });
  }
}

export interface ComputerCreateResponse {
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

export interface ComputerRetrieveResponse {
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

export type ComputerListResponse = Array<ComputerListResponse.ComputerListResponseItem>;

export namespace ComputerListResponse {
  export interface ComputerListResponseItem {
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
}

export interface ComputerCaptureScreenshotResponse {
  error_message?: string;

  executed_tab_id?: string;

  page_context?: ComputerCaptureScreenshotResponse.PageContext;

  request_id?: string;

  result?: { [key: string]: unknown };

  status?: string;

  timestamp?: string;
}

export namespace ComputerCaptureScreenshotResponse {
  export interface PageContext {
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
}

export interface ComputerClickResponse {
  error_message?: string;

  executed_tab_id?: string;

  page_context?: ComputerClickResponse.PageContext;

  request_id?: string;

  result?: { [key: string]: unknown };

  status?: string;

  timestamp?: string;
}

export namespace ComputerClickResponse {
  export interface PageContext {
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
}

export interface ComputerDebugResponse {
  error_message?: string;

  executed_tab_id?: string;

  page_context?: ComputerDebugResponse.PageContext;

  request_id?: string;

  result?: { [key: string]: unknown };

  status?: string;

  timestamp?: string;
}

export namespace ComputerDebugResponse {
  export interface PageContext {
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
}

export interface ComputerDoubleClickResponse {
  error_message?: string;

  executed_tab_id?: string;

  page_context?: ComputerDoubleClickResponse.PageContext;

  request_id?: string;

  result?: { [key: string]: unknown };

  status?: string;

  timestamp?: string;
}

export namespace ComputerDoubleClickResponse {
  export interface PageContext {
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
}

export interface ComputerDragResponse {
  error_message?: string;

  executed_tab_id?: string;

  page_context?: ComputerDragResponse.PageContext;

  request_id?: string;

  result?: { [key: string]: unknown };

  status?: string;

  timestamp?: string;
}

export namespace ComputerDragResponse {
  export interface PageContext {
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
}

export interface ComputerExecuteActionResponse {
  error_message?: string;

  executed_tab_id?: string;

  page_context?: ComputerExecuteActionResponse.PageContext;

  request_id?: string;

  result?: { [key: string]: unknown };

  status?: string;

  timestamp?: string;
}

export namespace ComputerExecuteActionResponse {
  export interface PageContext {
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
}

export type ComputerExecuteBatchResponse = { [key: string]: unknown };

export interface ComputerGetHTMLResponse {
  error_message?: string;

  executed_tab_id?: string;

  page_context?: ComputerGetHTMLResponse.PageContext;

  request_id?: string;

  result?: { [key: string]: unknown };

  status?: string;

  timestamp?: string;
}

export namespace ComputerGetHTMLResponse {
  export interface PageContext {
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
}

export type ComputerKeepAliveResponse = { [key: string]: unknown };

export interface ComputerKeyDownResponse {
  error_message?: string;

  executed_tab_id?: string;

  page_context?: ComputerKeyDownResponse.PageContext;

  request_id?: string;

  result?: { [key: string]: unknown };

  status?: string;

  timestamp?: string;
}

export namespace ComputerKeyDownResponse {
  export interface PageContext {
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
}

export interface ComputerKeyUpResponse {
  error_message?: string;

  executed_tab_id?: string;

  page_context?: ComputerKeyUpResponse.PageContext;

  request_id?: string;

  result?: { [key: string]: unknown };

  status?: string;

  timestamp?: string;
}

export namespace ComputerKeyUpResponse {
  export interface PageContext {
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
}

export interface ComputerMouseDownResponse {
  error_message?: string;

  executed_tab_id?: string;

  page_context?: ComputerMouseDownResponse.PageContext;

  request_id?: string;

  result?: { [key: string]: unknown };

  status?: string;

  timestamp?: string;
}

export namespace ComputerMouseDownResponse {
  export interface PageContext {
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
}

export interface ComputerMouseUpResponse {
  error_message?: string;

  executed_tab_id?: string;

  page_context?: ComputerMouseUpResponse.PageContext;

  request_id?: string;

  result?: { [key: string]: unknown };

  status?: string;

  timestamp?: string;
}

export namespace ComputerMouseUpResponse {
  export interface PageContext {
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
}

export interface ComputerNavigateResponse {
  error_message?: string;

  executed_tab_id?: string;

  page_context?: ComputerNavigateResponse.PageContext;

  request_id?: string;

  result?: { [key: string]: unknown };

  status?: string;

  timestamp?: string;
}

export namespace ComputerNavigateResponse {
  export interface PageContext {
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
}

export interface ComputerPressHotkeyResponse {
  error_message?: string;

  executed_tab_id?: string;

  page_context?: ComputerPressHotkeyResponse.PageContext;

  request_id?: string;

  result?: { [key: string]: unknown };

  status?: string;

  timestamp?: string;
}

export namespace ComputerPressHotkeyResponse {
  export interface PageContext {
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
}

export interface ComputerRightClickResponse {
  error_message?: string;

  executed_tab_id?: string;

  page_context?: ComputerRightClickResponse.PageContext;

  request_id?: string;

  result?: { [key: string]: unknown };

  status?: string;

  timestamp?: string;
}

export namespace ComputerRightClickResponse {
  export interface PageContext {
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
}

export interface ComputerScrollViewportResponse {
  error_message?: string;

  executed_tab_id?: string;

  page_context?: ComputerScrollViewportResponse.PageContext;

  request_id?: string;

  result?: { [key: string]: unknown };

  status?: string;

  timestamp?: string;
}

export namespace ComputerScrollViewportResponse {
  export interface PageContext {
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
}

export interface ComputerSetViewportResponse {
  error_message?: string;

  executed_tab_id?: string;

  page_context?: ComputerSetViewportResponse.PageContext;

  request_id?: string;

  result?: { [key: string]: unknown };

  status?: string;

  timestamp?: string;
}

export namespace ComputerSetViewportResponse {
  export interface PageContext {
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
}

export interface ComputerTypeTextResponse {
  error_message?: string;

  executed_tab_id?: string;

  page_context?: ComputerTypeTextResponse.PageContext;

  request_id?: string;

  result?: { [key: string]: unknown };

  status?: string;

  timestamp?: string;
}

export namespace ComputerTypeTextResponse {
  export interface PageContext {
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
}

export interface ComputerCreateParams {
  /**
   * If true (default), kill session after inactivity
   */
  auto_kill?: boolean;

  context_id?: string;

  display?: ComputerCreateParams.Display;

  /**
   * Idle timeout before auto-kill
   */
  inactivity_timeout_seconds?: number;

  /**
   * "browser" (default) or "desktop"
   */
  kind?: string;

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
  key?: string;

  tab_id?: string;
}

export interface ComputerKeyUpParams {
  key?: string;

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

export declare namespace Computers {
  export {
    type ComputerCreateResponse as ComputerCreateResponse,
    type ComputerRetrieveResponse as ComputerRetrieveResponse,
    type ComputerListResponse as ComputerListResponse,
    type ComputerCaptureScreenshotResponse as ComputerCaptureScreenshotResponse,
    type ComputerClickResponse as ComputerClickResponse,
    type ComputerDebugResponse as ComputerDebugResponse,
    type ComputerDoubleClickResponse as ComputerDoubleClickResponse,
    type ComputerDragResponse as ComputerDragResponse,
    type ComputerExecuteActionResponse as ComputerExecuteActionResponse,
    type ComputerExecuteBatchResponse as ComputerExecuteBatchResponse,
    type ComputerGetHTMLResponse as ComputerGetHTMLResponse,
    type ComputerKeepAliveResponse as ComputerKeepAliveResponse,
    type ComputerKeyDownResponse as ComputerKeyDownResponse,
    type ComputerKeyUpResponse as ComputerKeyUpResponse,
    type ComputerMouseDownResponse as ComputerMouseDownResponse,
    type ComputerMouseUpResponse as ComputerMouseUpResponse,
    type ComputerNavigateResponse as ComputerNavigateResponse,
    type ComputerPressHotkeyResponse as ComputerPressHotkeyResponse,
    type ComputerRightClickResponse as ComputerRightClickResponse,
    type ComputerScrollViewportResponse as ComputerScrollViewportResponse,
    type ComputerSetViewportResponse as ComputerSetViewportResponse,
    type ComputerTypeTextResponse as ComputerTypeTextResponse,
    type ComputerCreateParams as ComputerCreateParams,
    type ComputerCaptureScreenshotParams as ComputerCaptureScreenshotParams,
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
    type TabCreateResponse as TabCreateResponse,
    type TabListResponse as TabListResponse,
    type TabDeleteResponse as TabDeleteResponse,
    type TabSwitchResponse as TabSwitchResponse,
    type TabCreateParams as TabCreateParams,
    type TabDeleteParams as TabDeleteParams,
    type TabSwitchParams as TabSwitchParams,
  };
}
