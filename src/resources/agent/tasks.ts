// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { Stream } from '../../core/streaming';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tasks extends APIResource {
  /**
   * Get a list of all agent tasks for the authenticated user.
   */
  list(options?: RequestOptions): APIPromise<TaskListResponse> {
    return this._client.get('/agent/tasks', options);
  }

  /**
   * Get the current status and metadata of an agent task.
   */
  getStatus(taskID: string, options?: RequestOptions): APIPromise<TaskGetStatusResponse> {
    return this._client.get(path`/agent/tasks/${taskID}/status`, options);
  }

  /**
   * Inject a user message into a running agent task with debouncing and rate
   * limiting. The message will interrupt the agent's current workflow and be
   * processed after a 2-second debounce window.
   */
  sendMessage(
    taskID: string,
    params: TaskSendMessageParams,
    options?: RequestOptions,
  ): APIPromise<TaskSendMessageResponse> {
    const { body } = params;
    return this._client.post(path`/agent/tasks/${taskID}/messages`, { body: body, ...options });
  }

  /**
   * Start a freeform agent task with custom instruction or structured messages. The
   * task will execute browser automation actions based on the provided instruction
   * or conversation history.
   */
  start(params: TaskStartParams, options?: RequestOptions): APIPromise<TaskStartResponse> {
    const { body, stream } = params;
    return this._client.post('/agent/tasks', { query: { stream }, body: body, ...options });
  }

  /**
   * Start a task by predefined task ID. Currently unused - intended for OSWorld
   * benchmark tasks with predefined IDs.
   */
  startByID(
    taskID: string,
    params: TaskStartByIDParams,
    options?: RequestOptions,
  ): APIPromise<TaskStartByIDResponse> {
    const { body, stream } = params;
    return this._client.post(path`/agent/tasks/${taskID}`, { query: { stream }, body: body, ...options });
  }

  /**
   * Stream real-time updates for an agent task using Server-Sent Events (SSE).
   *
   * **Standardized Event Types:**
   *
   * - `thinking`: Agent's internal thought process (content: thought text)
   * - `tool_call`: Agent action being executed (content: e.g. "click(x=100, y=200)",
   *   "finished()")
   * - `message`: Final response to user (content: response text)
   * - `error`: Error occurred (content: error message)
   * - `image`: Generated image (content: image URL)
   *
   * **Agent-Specific Events (informational):**
   *
   * - `screenshot`: Browser screenshot available
   * - `setup_start`, `setup_progress`, `setup_complete`: Task initialization
   * - `computer_session_created`: Browser session ready
   * - `stream_stopped`: Stream ended (reason: task_completed, no_action, etc.)
   * - `stream_closed`: Stream closed by server (reason: inactivity_timeout, etc.)
   * - `keep_alive`: Connection keep-alive ping
   */
  streamUpdates(taskID: string, options?: RequestOptions): APIPromise<Stream<TaskStreamUpdatesResponse>> {
    return this._client.get(path`/agent/tasks/${taskID}/stream`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<TaskStreamUpdatesResponse>>;
  }
}

export type TaskListResponse = Array<{ [key: string]: unknown }>;

export type TaskGetStatusResponse = { [key: string]: unknown };

export type TaskSendMessageResponse = { [key: string]: unknown };

export type TaskStartResponse = { [key: string]: unknown };

export type TaskStartByIDResponse = { [key: string]: unknown };

export type TaskStreamUpdatesResponse = string;

export interface TaskSendMessageParams {
  body: unknown;
}

export interface TaskStartParams {
  /**
   * Body param:
   */
  body: unknown;

  /**
   * Query param: Enable streaming via Server-Sent Events (SSE)
   */
  stream?: boolean;
}

export interface TaskStartByIDParams {
  /**
   * Body param:
   */
  body: unknown;

  /**
   * Query param: Enable streaming via Server-Sent Events (SSE)
   */
  stream?: boolean;
}

export declare namespace Tasks {
  export {
    type TaskListResponse as TaskListResponse,
    type TaskGetStatusResponse as TaskGetStatusResponse,
    type TaskSendMessageResponse as TaskSendMessageResponse,
    type TaskStartResponse as TaskStartResponse,
    type TaskStartByIDResponse as TaskStartByIDResponse,
    type TaskStreamUpdatesResponse as TaskStreamUpdatesResponse,
    type TaskSendMessageParams as TaskSendMessageParams,
    type TaskStartParams as TaskStartParams,
    type TaskStartByIDParams as TaskStartByIDParams,
  };
}
