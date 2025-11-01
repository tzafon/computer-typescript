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
    return this.client.computers.executeAction(this.id, {
      body: { action: { type: 'go_to_url', url } },
    });
  }

  async type(text: string): Promise<ActionResult> {
    return this.client.computers.executeAction(this.id, {
      body: { action: { type: 'type', text } },
    });
  }

  async click(x: number, y: number): Promise<ActionResult> {
    return this.client.computers.executeAction(this.id, {
      body: { action: { type: 'click', x, y } },
    });
  }

  async screenshot(): Promise<ActionResult> {
    return this.client.computers.executeAction(this.id, {
      body: { action: { type: 'screenshot' } },
    });
  }

  async doubleClick(x: number, y: number): Promise<ActionResult> {
    return this.client.computers.executeAction(this.id, {
      body: { action: { type: 'double_click', x, y } },
    });
  }

  async rightClick(x: number, y: number): Promise<ActionResult> {
    return this.client.computers.executeAction(this.id, {
      body: { action: { type: 'right_click', x, y } },
    });
  }

  async drag(x1: number, y1: number, x2: number, y2: number): Promise<ActionResult> {
    return this.client.computers.executeAction(this.id, {
      body: { action: { type: 'drag', x1, y1, x2, y2 } },
    });
  }

  async hotkey(...keys: string[]): Promise<ActionResult> {
    return this.client.computers.executeAction(this.id, {
      body: { action: { type: 'keypress', keys } },
    });
  }

  async scroll(direction: 'up' | 'down', amount?: number): Promise<ActionResult> {
    const dy = direction === 'down' ? amount || 500 : -(amount || 500);
    return this.client.computers.executeAction(this.id, {
      body: { action: { type: 'scroll', x: 0, y: 0, dx: 0, dy } },
    });
  }

  async getHTML(auto_detect_encoding?: boolean): Promise<ActionResult> {
    return this.client.computers.executeAction(this.id, {
      body: { action: { type: 'get_html_content', auto_detect_encoding } },
    });
  }

  async wait(seconds: number): Promise<ActionResult> {
    return this.client.computers.executeAction(this.id, {
      body: { action: { type: 'wait', ms: seconds * 1000 } },
    });
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
  private actions: Array<Record<string, any>> = [];

  constructor(client: Computer, id: string) {
    this.client = client;
    this.id = id;
  }

  navigate(url: string): this {
    this.actions.push({ type: 'go_to_url', url });
    return this;
  }

  type(text: string): this {
    this.actions.push({ type: 'type', text });
    return this;
  }

  click(x: number, y: number): this {
    this.actions.push({ type: 'click', x, y });
    return this;
  }

  screenshot(): this {
    this.actions.push({ type: 'screenshot' });
    return this;
  }

  doubleClick(x: number, y: number): this {
    this.actions.push({ type: 'double_click', x, y });
    return this;
  }

  rightClick(x: number, y: number): this {
    this.actions.push({ type: 'right_click', x, y });
    return this;
  }

  drag(x1: number, y1: number, x2: number, y2: number): this {
    this.actions.push({ type: 'drag', x1, y1, x2, y2 });
    return this;
  }

  hotkey(...keys: string[]): this {
    this.actions.push({ type: 'keypress', keys });
    return this;
  }

  scroll(direction: 'up' | 'down', amount?: number): this {
    const dy = direction === 'down' ? amount || 500 : -(amount || 500);
    this.actions.push({ type: 'scroll', x: 0, y: 0, dx: 0, dy });
    return this;
  }

  wait(seconds: number): this {
    this.actions.push({ type: 'wait', ms: seconds * 1000 });
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
