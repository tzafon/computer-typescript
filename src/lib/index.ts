import { Computer as BaseComputer, type ClientOptions } from '../client';
import {
  ComputerSession,
  type ScreenshotResult,
  type HTMLResult,
  type DebugResult,
} from './computer-session';
import type { ComputerCreateParams } from '../resources/computers';
import type { RequestOptions } from '../internal/request-options';

/**
 * Extended Computer client with high-level session management.
 *
 * This client extends the base Computer client with convenient session methods:
 *
 * ```ts
 * import { Computer } from 'tzafon';
 *
 * const client = new Computer();
 * const computer = await client.create({ kind: 'browser' });
 * await computer.navigate('https://example.com');
 * await computer.screenshot();
 * await computer.terminate();
 * ```
 *
 * The low-level API is still available via `client.computers.*`:
 * ```ts
 * const session = await client.computers.create({ kind: 'browser' });
 * await client.computers.navigate(session.id, { url: 'https://example.com' });
 * ```
 */
export class Computer extends BaseComputer {
  constructor(options?: ClientOptions) {
    super(options);
  }

  /**
   * Create a new browser or desktop automation session.
   *
   * Returns a `ComputerSession` object with convenient methods for controlling the session.
   *
   * @example
   * ```ts
   * const computer = await client.create({ kind: 'browser' });
   * await computer.navigate('https://example.com');
   * const screenshot = await computer.screenshot();
   * await computer.terminate();
   * ```
   *
   * @example With custom display settings
   * ```ts
   * const computer = await client.create({
   *   kind: 'browser',
   *   display: { width: 1920, height: 1080 },
   *   timeout_seconds: 300
   * });
   * ```
   *
   * @example With automatic cleanup (TypeScript 5.2+, requires ES2022+ target)
   * ```ts
   * await using computer = await client.create({ kind: 'browser' });
   * await computer.navigate('https://example.com');
   * // Automatically terminates when scope exits
   * ```
   */
  async create(params: ComputerCreateParams = {}, options?: RequestOptions): Promise<ComputerSession> {
    const response = await this.computers.create(params, options);

    if (!response.id) {
      throw new Error('Failed to create computer session: no ID returned');
    }

    return new ComputerSession(this as any, response.id, response);
  }

  /**
   * List all active sessions or retrieve a specific session by ID.
   *
   * @example List all sessions
   * ```ts
   * const sessions = await client.list();
   * console.log(`Found ${sessions.length} active sessions`);
   * ```
   *
   * @example Retrieve a specific session
   * ```ts
   * const computer = await client.retrieve('session-id');
   * await computer.navigate('https://example.com');
   * ```
   */
  async list(): Promise<ComputerSession[]>;
  async list(id: string, options?: RequestOptions): Promise<ComputerSession>;
  async list(
    idOrOptions?: string | RequestOptions,
    options?: RequestOptions,
  ): Promise<ComputerSession[] | ComputerSession> {
    if (typeof idOrOptions === 'string') {
      const response = await this.computers.retrieve(idOrOptions, options);
      if (!response.id) {
        throw new Error(`Failed to retrieve computer session: no ID returned`);
      }
      return new ComputerSession(this as any, response.id, response);
    }

    const sessions = await this.computers.list(idOrOptions as RequestOptions | undefined);
    return sessions
      .filter((session) => session.id !== undefined)
      .map((session) => new ComputerSession(this as any, session.id!, session));
  }

  /**
   * Retrieve a specific session by ID.
   *
   * @example
   * ```ts
   * const computer = await client.retrieve('session-id');
   * const status = await computer.retrieve();
   * console.log(status);
   * ```
   */
  async retrieve(id: string, options?: RequestOptions): Promise<ComputerSession> {
    return this.list(id, options);
  }
}

export { ComputerSession, type ScreenshotResult, type HTMLResult, type DebugResult };
