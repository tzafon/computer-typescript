// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ComputersAPI from './computers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tabs extends APIResource {
  /**
   * Create a new tab, optionally navigating to a URL (browser sessions only)
   */
  create(
    id: string,
    body: TabCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ComputersAPI.ActionResult> {
    return this._client.post(path`/computers/${id}/tabs`, { body, ...options });
  }

  /**
   * Get a list of all open tabs with their IDs, URLs, titles, and main tab status
   * (browser sessions only)
   */
  list(id: string, options?: RequestOptions): APIPromise<ComputersAPI.ActionResult> {
    return this._client.get(path`/computers/${id}/tabs`, options);
  }

  /**
   * Close a specific tab by ID. Cannot close the last remaining tab (browser
   * sessions only)
   */
  delete(
    tabID: string,
    params: TabDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ComputersAPI.ActionResult> {
    const { id } = params;
    return this._client.delete(path`/computers/${id}/tabs/${tabID}`, options);
  }

  /**
   * Switch the main/active tab to a different tab by ID (browser sessions only)
   */
  switch(
    tabID: string,
    params: TabSwitchParams,
    options?: RequestOptions,
  ): APIPromise<ComputersAPI.ActionResult> {
    const { id } = params;
    return this._client.post(path`/computers/${id}/tabs/${tabID}/switch`, options);
  }
}

export interface TabCreateParams {
  url?: string;
}

export interface TabDeleteParams {
  /**
   * Computer ID
   */
  id: string;
}

export interface TabSwitchParams {
  /**
   * Computer ID
   */
  id: string;
}

export declare namespace Tabs {
  export {
    type TabCreateParams as TabCreateParams,
    type TabDeleteParams as TabDeleteParams,
    type TabSwitchParams as TabSwitchParams,
  };
}
