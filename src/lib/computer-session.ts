import type { Computer as BaseComputer } from '../client';
import type * as Computers from '../resources/computers';
import { sleep } from '../internal/utils/sleep';

/**
 * Result type for screenshot actions
 */
export interface ScreenshotResult extends Computers.ActionResult {
  result?: {
    screenshot_url?: string;
  };
}

/**
 * Result type for HTML content actions
 */
export interface HTMLResult extends Computers.ActionResult {
  result?: {
    html_content?: string;
  };
}

/**
 * Result type for debug commands
 */
export interface DebugResult extends Computers.ActionResult {
  result?: {
    debug_response?: string;
  };
}

/**
 * A high-level wrapper around a computer session that provides an ergonomic API.
 *
 * Instead of passing IDs to every method:
 * ```ts
 * const session = await client.computers.create({ kind: 'browser' });
 * await client.computers.navigate(session.id, { url: 'https://example.com' });
 * ```
 *
 * You can use this wrapper for a more intuitive API:
 * ```ts
 * const computer = await client.create({ kind: 'browser' });
 * await computer.navigate('https://example.com');
 * await computer.terminate();
 * ```
 *
 * Supports automatic cleanup with `await using` (TypeScript 5.2+):
 * ```ts
 * await using computer = await client.create({ kind: 'browser' });
 * await computer.navigate('https://example.com');
 * // Automatically terminates when scope exits
 * ```
 */
export class ComputerSession {
  constructor(
    private readonly client: BaseComputer,
    public readonly id: string,
    public readonly metadata: Computers.ComputerResponse,
  ) {
    if (!id) {
      throw new Error('Computer session ID is required');
    }
  }

  /**
   * Navigate the browser to a URL
   */
  async navigate(url: string, options?: { timeout_seconds?: number }): Promise<Computers.ActionResult> {
    return this.client.computers.navigate(this.id, { url, ...options });
  }

  /**
   * Take a screenshot of the current viewport
   */
  async screenshot(base64: boolean = false): Promise<ScreenshotResult> {
    return this.client.computers.captureScreenshot(this.id, { base64 }) as Promise<ScreenshotResult>;
  }

  /**
   * Get the HTML content of the current page
   */
  async getHTML(auto_detect_encoding?: boolean): Promise<HTMLResult> {
    const params: Computers.ComputerGetHTMLParams =
      auto_detect_encoding !== undefined ? { auto_detect_encoding } : {};
    return this.client.computers.getHTML(this.id, params) as Promise<HTMLResult>;
  }

  /**
   * Click at the specified coordinates
   */
  async click(x: number, y: number): Promise<Computers.ActionResult> {
    return this.client.computers.click(this.id, { x, y });
  }

  /**
   * Double-click at the specified coordinates
   */
  async doubleClick(x: number, y: number): Promise<Computers.ActionResult> {
    return this.client.computers.doubleClick(this.id, { x, y });
  }

  /**
   * Right-click at the specified coordinates
   */
  async rightClick(x: number, y: number): Promise<Computers.ActionResult> {
    return this.client.computers.rightClick(this.id, { x, y });
  }

  /**
   * Type text into the currently focused element
   */
  async type(text: string): Promise<Computers.ActionResult> {
    return this.client.computers.typeText(this.id, { text });
  }

  /**
   * Press a keyboard shortcut (e.g., ['Control', 'c'] for copy)
   */
  async hotkey(keys: string[]): Promise<Computers.ActionResult> {
    return this.client.computers.pressHotkey(this.id, { keys });
  }

  /**
   * Drag from one point to another
   */
  async drag(x1: number, y1: number, x2: number, y2: number): Promise<Computers.ActionResult> {
    return this.client.computers.drag(this.id, { x1, y1, x2, y2 });
  }

  /**
   * Scroll the viewport
   */
  async scroll(dx: number = 0, dy: number = 0, x?: number, y?: number): Promise<Computers.ActionResult> {
    const params: Computers.ComputerScrollViewportParams = { dx, dy };
    if (x !== undefined) params.x = x;
    if (y !== undefined) params.y = y;
    return this.client.computers.scrollViewport(this.id, params);
  }

  /**
   * Wait for a specified number of seconds
   *
   * @param seconds - Number of seconds to wait (can be fractional, e.g., 0.5 for half a second)
   *
   * @example
   * ```ts
   * await computer.wait(1);      // Wait 1 second
   * await computer.wait(0.5);    // Wait 500 milliseconds
   * await computer.wait(2.5);    // Wait 2.5 seconds
   * ```
   */
  async wait(seconds: number): Promise<void> {
    await sleep(seconds * 1000);
  }

  /**
   * Set the viewport dimensions and scale
   */
  async setViewport(
    width: number,
    height: number,
    scale_factor?: number,
  ): Promise<Computers.ActionResult> {
    const params: Computers.ComputerSetViewportParams = { width, height };
    if (scale_factor !== undefined) params.scale_factor = scale_factor;
    return this.client.computers.setViewport(this.id, params);
  }

  /**
   * Execute a debug command
   */
  async debug(command: string, options?: {
    max_output_length?: number;
    timeout_seconds?: number;
  }): Promise<DebugResult> {
    return this.client.computers.debug(this.id, { command, ...options }) as Promise<DebugResult>;
  }

  /**
   * Execute a batch of actions
   */
  async batch(actions: Computers.ComputerExecuteBatchParams['actions']): Promise<Computers.ComputerExecuteBatchResponse> {
    const params: Computers.ComputerExecuteBatchParams = actions !== undefined ? { actions } : {};
    return this.client.computers.executeBatch(this.id, params);
  }

  /**
   * Execute a single action using the generic execute endpoint
   */
  async execute(action: Computers.ComputerExecuteActionParams['action']): Promise<Computers.ActionResult> {
    const params: Computers.ComputerExecuteActionParams = action !== undefined ? { action } : {};
    return this.client.computers.executeAction(this.id, params);
  }

  /**
   * Keep the session alive (extends timeout)
   */
  async keepAlive(): Promise<Computers.ComputerKeepAliveResponse> {
    return this.client.computers.keepAlive(this.id);
  }

  /**
   * Stream events from the session (SSE)
   */
  async streamEvents(): Promise<void> {
    return this.client.computers.streamEvents(this.id);
  }

  /**
   * Stream screencast frames (SSE)
   */
  async streamScreencast(): Promise<void> {
    return this.client.computers.streamScreencast(this.id);
  }

  /**
   * Connect to the session via WebSocket
   */
  async connectWebsocket(): Promise<void> {
    return this.client.computers.connectWebsocket(this.id);
  }

  /**
   * Terminate the session and clean up resources
   */
  async terminate(): Promise<void> {
    return this.client.computers.terminate(this.id);
  }

  /**
   * Get the current session status and metadata
   */
  async retrieve(): Promise<Computers.ComputerResponse> {
    return this.client.computers.retrieve(this.id);
  }

  /**
   * Support for explicit resource management (TypeScript 5.2+)
   *
   * Usage:
   * ```ts
   * await using computer = await client.create({ kind: 'browser' });
   * await computer.navigate('https://example.com');
   * // Automatically calls terminate() when scope exits
   * ```
   */
  async [Symbol.asyncDispose](): Promise<void> {
    await this.terminate();
  }
}
