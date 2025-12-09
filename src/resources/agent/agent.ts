// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TasksAPI from './tasks';
import {
  TaskGetStatusResponse,
  TaskListResponse,
  TaskSendMessageParams,
  TaskSendMessageResponse,
  TaskStartByIDParams,
  TaskStartByIDResponse,
  TaskStartParams,
  TaskStartResponse,
  TaskStreamUpdatesResponse,
  Tasks,
} from './tasks';

export class Agent extends APIResource {
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);
}

Agent.Tasks = Tasks;

export declare namespace Agent {
  export {
    Tasks as Tasks,
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
