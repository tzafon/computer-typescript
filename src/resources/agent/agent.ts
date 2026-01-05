// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TasksAPI from './tasks';
import { Tasks } from './tasks';

export class Agent extends APIResource {
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);
}

Agent.Tasks = Tasks;

export declare namespace Agent {
  export { Tasks as Tasks };
}
