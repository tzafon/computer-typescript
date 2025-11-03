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
   * Extend the timeout for a computer session and verify it is still running
   */
  keepAlive(id: string, options?: RequestOptions): APIPromise<ComputerKeepAliveResponse> {
    return this._client.post(path`/computers/${id}/keepalive`, options);
  }

  /**
   * Navigate the browser to a specified URL
   */
  navigate(id: string, body: ComputerNavigateParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/navigate`, { body, ...options });
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
   * Terminate and clean up a computer instance, stopping the session and recording
   * metrics
   */
  terminate(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/computers/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
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

    text?: string;

    /**
     * click|double_click|right_click|drag|type|keypress|scroll|wait|screenshot|go_to_url|debug|get_html_content|set_viewport
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

    text?: string;

    /**
     * click|double_click|right_click|drag|type|keypress|scroll|wait|screenshot|go_to_url|debug|get_html_content|set_viewport
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

export interface ComputerNavigateParams {
  url?: string;
}

export declare namespace Computers {
  export {
    type ActionResult as ActionResult,
    type ComputerResponse as ComputerResponse,
    type ComputerListResponse as ComputerListResponse,
    type ComputerExecuteBatchResponse as ComputerExecuteBatchResponse,
    type ComputerKeepAliveResponse as ComputerKeepAliveResponse,
    type ComputerCreateParams as ComputerCreateParams,
    type ComputerExecuteActionParams as ComputerExecuteActionParams,
    type ComputerExecuteBatchParams as ComputerExecuteBatchParams,
    type ComputerNavigateParams as ComputerNavigateParams,
  };
}
