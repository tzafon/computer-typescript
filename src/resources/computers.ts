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
   * List all active computers for the user's organization
   */
  list(options?: RequestOptions): APIPromise<ComputerListResponse> {
    return this._client.get('/computers', options);
  }

  /**
   * Execute a single action (screenshot, click, type, navigate, )
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
   * Terminate and clean up a computer instance
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
  body: unknown;
}

export interface ComputerExecuteBatchParams {
  body: unknown;
}

export interface ComputerNavigateParams {
  body: unknown;
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
