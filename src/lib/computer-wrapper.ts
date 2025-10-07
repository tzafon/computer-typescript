import type { Computer } from '../client';
import type {
  ActionResult,
  ComputerCreateParams,
  ComputerExecuteBatchResponse,
} from '../resources/computers';

/**
 * Manual usage - Direct execution of commands
 */
export class ComputerInstance {
  private client: Computer;
  private id: string;

  constructor(client: Computer, id: string) {
    this.client = client;
    this.id = id;
  }

  async navigate(url: string): Promise<ActionResult> {
    return this.client.computers.navigate(this.id, { body: { url } });
  }

  async type(text: string): Promise<ActionResult> {
    return this.client.computers.typeText(this.id, { body: { text } });
  }

  async click(x: number, y: number): Promise<ActionResult> {
    return this.client.computers.click(this.id, { body: { x, y } });
  }

  async screenshot(): Promise<ActionResult> {
    return this.client.computers.takeScreenshot(this.id);
  }

  async terminate(): Promise<void> {
    return this.client.computers.terminate(this.id);
  }

  async keepAlive(): Promise<void> {
    await this.client.computers.keepAlive(this.id);
  }

  // Support for async disposal (using in TypeScript)
  async [Symbol.asyncDispose](): Promise<void> {
    await this.terminate();
  }
}

/**
 * Async (queued) - Queue actions and execute them in batch
 */
export class QueuedComputerInstance {
  private client: Computer;
  private id: string;
  private actions: Array<{ type: string; params: any }> = [];

  constructor(client: Computer, id: string) {
    this.client = client;
    this.id = id;
  }

  navigate(url: string): this {
    this.actions.push({ type: 'navigate', params: { url } });
    return this;
  }

  type(text: string): this {
    this.actions.push({ type: 'type', params: { text } });
    return this;
  }

  click(x: number, y: number): this {
    this.actions.push({ type: 'click', params: { x, y } });
    return this;
  }

  screenshot(): this {
    this.actions.push({ type: 'screenshot', params: {} });
    return this;
  }

  async execute(): Promise<ComputerExecuteBatchResponse> {
    const result = await this.client.computers.executeBatch(this.id, { body: { actions: this.actions } });
    this.actions = [];
    return result;
  }

  async terminate(): Promise<void> {
    return this.client.computers.terminate(this.id);
  }

  async [Symbol.asyncDispose](): Promise<void> {
    await this.terminate();
  }
}

/**
 * Wrapper around the Computer client for convenient usage patterns
 */
export class ComputerWrapper {
  private client: Computer;

  constructor(client: Computer) {
    this.client = client;
  }

  async create(params?: ComputerCreateParams): Promise<ComputerInstance> {
    const response = await this.client.computers.create(params);
    return new ComputerInstance(this.client, response.id!);
  }
}

/**
 * Async wrapper for queued execution
 */
export class AsyncComputerWrapper {
  private client: Computer;

  constructor(client: Computer) {
    this.client = client;
  }

  async create(params?: ComputerCreateParams): Promise<QueuedComputerInstance> {
    const response = await this.client.computers.create(params);
    return new QueuedComputerInstance(this.client, response.id!);
  }
}
