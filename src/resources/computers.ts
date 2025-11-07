// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Computers extends APIResource {
  /**
   * Create a new browser or desktop automation session with configurable timeout.
   * Returns endpoints for executing actions, streaming events, and viewing
   * screencast.
   */
  create(
    body: ComputerCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ComputerResponse> {
    return this._client.post('/computers', { body, ...options });
  }

  /**
   * Get the current status and metadata of a computer instance
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ComputerResponse> {
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
   * Optionally specify tab_id to screenshot a specific tab (browser sessions only)
   */
  captureScreenshot(
    id: string,
    body: ComputerCaptureScreenshotParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/screenshot`, { body, ...options });
  }

  /**
   * Perform a left mouse click at the specified x,y coordinates. Optionally specify
   * tab_id to click on a specific tab (browser sessions only)
   */
  click(id: string, body: ComputerClickParams, options?: RequestOptions): APIPromise<ActionResult> {
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
   * Optionally specify tab_id (browser sessions only)
   */
  debug(id: string, body: ComputerDebugParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/debug`, { body, ...options });
  }

  /**
   * Perform a double mouse click at the specified x,y coordinates. Optionally
   * specify tab_id to double-click on a specific tab (browser sessions only)
   */
  doubleClick(
    id: string,
    body: ComputerDoubleClickParams,
    options?: RequestOptions,
  ): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/double-click`, { body, ...options });
  }

  /**
   * Perform a click-and-drag action from (x1,y1) to (x2,y2). Optionally specify
   * tab_id to drag on a specific tab (browser sessions only)
   */
  drag(id: string, body: ComputerDragParams, options?: RequestOptions): APIPromise<ActionResult> {
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
  ): APIPromise<ActionResult> {
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
   * Get the HTML content of the current browser page. Optionally specify tab_id to
   * get HTML from a specific tab (browser sessions only)
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
   */
  keepAlive(id: string, options?: RequestOptions): APIPromise<ComputerKeepAliveResponse> {
    return this._client.post(path`/computers/${id}/keepalive`, options);
  }

  /**
   * Navigate the browser to a specified URL. Optionally specify tab_id to navigate a
   * specific tab (browser sessions only)
   */
  navigate(id: string, body: ComputerNavigateParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/navigate`, { body, ...options });
  }

  /**
   * Press a combination of keys (e.g., ["Control", "c"] for copy). Optionally
   * specify tab_id to send hotkey to a specific tab (browser sessions only)
   */
  pressHotkey(
    id: string,
    body: ComputerPressHotkeyParams,
    options?: RequestOptions,
  ): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/hotkey`, { body, ...options });
  }

  /**
   * Perform a right mouse click at the specified x,y coordinates. Optionally specify
   * tab_id to right-click on a specific tab (browser sessions only)
   */
  rightClick(id: string, body: ComputerRightClickParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/right-click`, { body, ...options });
  }

  /**
   * Scroll the browser viewport by the specified delta. Optionally specify tab_id to
   * scroll a specific tab (browser sessions only)
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
   * tab_id to set viewport for a specific tab (browser sessions only)
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
   * tab_id to type on a specific tab (browser sessions only)
   */
  typeText(id: string, body: ComputerTypeTextParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/type`, { body, ...options });
  }
}

export interface ActionResult {
  error_message?: string;

  request_id?: string;

  result?: { [key: string]: unknown };

  status?: string;

  timestamp?: string;
}

export interface ComputerResponse {
  id?: string;

  created_at?: string;

  endpoints?: { [key: string]: string };

  status?: string;

  type?: string;
}

export type ComputerListResponse = Array<ComputerResponse>;

export type ComputerExecuteBatchResponse = { [key: string]: unknown };

export type ComputerKeepAliveResponse = { [key: string]: unknown };

export interface ComputerCreateParams {
  /**
   * If true (default), kill session after inactivity. If false, only kill on
   * explicit stop or max_lifetime
   */
  auto_kill?: boolean;

  context_id?: string;

  /**
   * TODO: implement
   */
  display?: ComputerCreateParams.Display;

  /**
   * "browser"|"desktop"|"code" etc
   */
  kind?: string;

  /**
   * TODO: implement
   */
  stealth?: unknown;

  timeout_seconds?: number;
}

export namespace ComputerCreateParams {
  /**
   * TODO: implement
   */
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

    keys?: Array<string>;

    ms?: number;

    scale_factor?: number;

    /**
     * For tab management (browser sessions only)
     */
    tab_id?: string;

    text?: string;

    /**
     * click|double_click|right_click|drag|type|keypress|scroll|wait|screenshot|go_to_url|debug|get_html_content|set_viewport|list_tabs|new_tab|switch_tab|close_tab
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

      max_output_length?: number;

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

    keys?: Array<string>;

    ms?: number;

    scale_factor?: number;

    /**
     * For tab management (browser sessions only)
     */
    tab_id?: string;

    text?: string;

    /**
     * click|double_click|right_click|drag|type|keypress|scroll|wait|screenshot|go_to_url|debug|get_html_content|set_viewport|list_tabs|new_tab|switch_tab|close_tab
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

      max_output_length?: number;

      timeout_seconds?: number;
    }
  }
}

export interface ComputerGetHTMLParams {
  auto_detect_encoding?: boolean;

  tab_id?: string;
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

export declare namespace Computers {
  export {
    type ActionResult as ActionResult,
    type ComputerResponse as ComputerResponse,
    type ComputerListResponse as ComputerListResponse,
    type ComputerExecuteBatchResponse as ComputerExecuteBatchResponse,
    type ComputerKeepAliveResponse as ComputerKeepAliveResponse,
    type ComputerCreateParams as ComputerCreateParams,
    type ComputerCaptureScreenshotParams as ComputerCaptureScreenshotParams,
    type ComputerClickParams as ComputerClickParams,
    type ComputerDebugParams as ComputerDebugParams,
    type ComputerDoubleClickParams as ComputerDoubleClickParams,
    type ComputerDragParams as ComputerDragParams,
    type ComputerExecuteActionParams as ComputerExecuteActionParams,
    type ComputerExecuteBatchParams as ComputerExecuteBatchParams,
    type ComputerGetHTMLParams as ComputerGetHTMLParams,
    type ComputerNavigateParams as ComputerNavigateParams,
    type ComputerPressHotkeyParams as ComputerPressHotkeyParams,
    type ComputerRightClickParams as ComputerRightClickParams,
    type ComputerScrollViewportParams as ComputerScrollViewportParams,
    type ComputerSetViewportParams as ComputerSetViewportParams,
    type ComputerTypeTextParams as ComputerTypeTextParams,
  };
}
