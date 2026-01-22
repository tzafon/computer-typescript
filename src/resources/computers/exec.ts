// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { JSONLDecoder } from '../../internal/decoders/jsonl';
import { path } from '../../internal/utils/path';

export class Exec extends APIResource {
  /**
   * Execute a shell command with real-time streaming output as NDJSON. Each line is
   * a JSON object with type (stdout/stderr/exit/error).
   *
   * @example
   * ```ts
   * const response = await client.computers.exec.execute('id');
   * ```
   */
  execute(
    id: string,
    body: ExecExecuteParams,
    options?: RequestOptions,
  ): APIPromise<JSONLDecoder<ExecExecuteResponse>> {
    return this._client
      .post(path`/computers/${id}/exec`, {
        body,
        ...options,
        headers: buildHeaders([{ Accept: 'application/x-ndjson' }, options?.headers]),
        stream: true,
        __binaryResponse: true,
      })
      ._thenUnwrap((_, props) => JSONLDecoder.fromResponse(props.response, props.controller)) as APIPromise<
      JSONLDecoder<ExecExecuteResponse>
    >;
  }

  /**
   * Execute a shell command and wait for completion, returning buffered
   * stdout/stderr.
   *
   * @example
   * ```ts
   * const response = await client.computers.exec.executeSync(
   *   'id',
   * );
   * ```
   */
  executeSync(
    id: string,
    body: ExecExecuteSyncParams,
    options?: RequestOptions,
  ): APIPromise<ExecExecuteSyncResponse> {
    return this._client.post(path`/computers/${id}/exec/sync`, { body, ...options });
  }
}

export interface ExecExecuteResponse {
  /**
   * for exit
   */
  code?: number;

  /**
   * for stdout/stderr
   */
  data?: string;

  /**
   * for error
   */
  message?: string;

  /**
   * "stdout", "stderr", "exit", "error"
   */
  type?: string;
}

export interface ExecExecuteSyncResponse {
  exit_code?: number;

  stderr?: string;

  stdout?: string;
}

export interface ExecExecuteParams {
  command?: string;

  cwd?: string;

  env?: { [key: string]: string };

  timeout_seconds?: number;
}

export interface ExecExecuteSyncParams {
  command?: string;

  cwd?: string;

  env?: { [key: string]: string };

  timeout_seconds?: number;
}

export declare namespace Exec {
  export {
    type ExecExecuteResponse as ExecExecuteResponse,
    type ExecExecuteSyncResponse as ExecExecuteSyncResponse,
    type ExecExecuteParams as ExecExecuteParams,
    type ExecExecuteSyncParams as ExecExecuteSyncParams,
  };
}
