// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Auth extends APIResource {
  /**
   * Handle OAuth callback from WorkOS AuthKit and exchange code for user profile
   */
  handleCallback(
    query: AuthHandleCallbackParams,
    options?: RequestOptions,
  ): APIPromise<AuthHandleCallbackResponse> {
    return this._client.get('/auth/callback', { query, ...options });
  }

  /**
   * Redirect to WorkOS AuthKit for authentication
   */
  initiateLogin(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/auth/login', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Revoke user session and clear cookies
   */
  logout(options?: RequestOptions): APIPromise<AuthLogoutResponse> {
    return this._client.post('/auth/logout', options);
  }

  /**
   * Get authenticated user information from session
   */
  retrieveCurrentUser(options?: RequestOptions): APIPromise<AuthRetrieveCurrentUserResponse> {
    return this._client.get('/auth/me', options);
  }
}

export type AuthHandleCallbackResponse = { [key: string]: unknown };

export type AuthLogoutResponse = { [key: string]: unknown };

export type AuthRetrieveCurrentUserResponse = { [key: string]: unknown };

export interface AuthHandleCallbackParams {
  /**
   * Authorization code (valid for 10 minutes)
   */
  code: string;

  /**
   * State parameter for CSRF protection
   */
  state: string;
}

export declare namespace Auth {
  export {
    type AuthHandleCallbackResponse as AuthHandleCallbackResponse,
    type AuthLogoutResponse as AuthLogoutResponse,
    type AuthRetrieveCurrentUserResponse as AuthRetrieveCurrentUserResponse,
    type AuthHandleCallbackParams as AuthHandleCallbackParams,
  };
}
