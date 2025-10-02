// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Computers extends APIResource {
  /**
   * Create a new browser or desktop automation session
   */
  create(
    body: ComputerCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ComputerResponse> {
    return this._client.post('/computers', { body, ...options });
  }

  /**
   * Get the current status of a computer instance
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ComputerResponse> {
    return this._client.get(path`/computers/${id}`, options);
  }

  /**
   * Perform a mouse click at specified coordinates
   */
  click(id: string, params: ComputerClickParams, options?: RequestOptions): APIPromise<ActionResult> {
    const { body } = params;
    return this._client.post(path`/computers/${id}/click`, { body: body, ...options });
  }

  /**
   * Execute a single action (screenshot, click, type, navigate, etc.)
   */
  executeAction(
    id: string,
    params: ComputerExecuteActionParams,
    options?: RequestOptions,
  ): APIPromise<ActionResult> {
    const { body } = params;
    return this._client.post(path`/computers/${id}/execute`, { body: body, ...options });
  }

  /**
   * Execute a batch of actions in sequence, stopping on first error
   */
  executeBatch(
    id: string,
    params: ComputerExecuteBatchParams,
    options?: RequestOptions,
  ): APIPromise<ComputerExecuteBatchResponse> {
    const { body } = params;
    return this._client.post(path`/computers/${id}/batch`, { body: body, ...options });
  }

  /**
   * Extend the timeout for a computer session
   */
  keepAlive(id: string, options?: RequestOptions): APIPromise<ComputerKeepAliveResponse> {
    return this._client.post(path`/computers/${id}/keepalive`, options);
  }

  /**
   * Navigate the browser to a specified URL
   */
  navigate(id: string, params: ComputerNavigateParams, options?: RequestOptions): APIPromise<ActionResult> {
    const { body } = params;
    return this._client.post(path`/computers/${id}/navigate`, { body: body, ...options });
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
   * Capture a screenshot of the current screen
   */
  takeScreenshot(id: string, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/computers/${id}/screenshot`, options);
  }

  /**
   * Terminate and clean up a computer instance
   */
  terminate(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/computers/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Send keyboard input to the active element
   */
  typeText(id: string, params: ComputerTypeTextParams, options?: RequestOptions): APIPromise<ActionResult> {
    const { body } = params;
    return this._client.post(path`/computers/${id}/type`, { body: body, ...options });
  }
}

export interface ActionResult {
  error_message?: string;

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

export type ComputerExecuteBatchResponse = { [key: string]: unknown };

export type ComputerKeepAliveResponse = { [key: string]: unknown };

export interface ComputerCreateParams {
  context_id?: string;

  /**
   * TODO: implement
   */
  display?: ComputerCreateParams.Display;

  /**
   * "browser"|"desktop"|"code" (we wire browser + OS now)
   */
  kind?: string;

  /**
   * TODO: implement
   */
  stealth?: unknown;
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

export interface ComputerClickParams {
  body: unknown;
}

export interface ComputerExecuteActionParams {
  body: unknown;
}

export interface ComputerExecuteBatchParams {
  body: unknown;
}

export interface ComputerNavigateParams {
  body: unknown;
}

export interface ComputerTypeTextParams {
  body: unknown;
}

export declare namespace Computers {
  export {
    type ActionResult as ActionResult,
    type ComputerResponse as ComputerResponse,
    type ComputerExecuteBatchResponse as ComputerExecuteBatchResponse,
    type ComputerKeepAliveResponse as ComputerKeepAliveResponse,
    type ComputerCreateParams as ComputerCreateParams,
    type ComputerClickParams as ComputerClickParams,
    type ComputerExecuteActionParams as ComputerExecuteActionParams,
    type ComputerExecuteBatchParams as ComputerExecuteBatchParams,
    type ComputerNavigateParams as ComputerNavigateParams,
    type ComputerTypeTextParams as ComputerTypeTextParams,
  };
}
