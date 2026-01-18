// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export {
  Computer,
  Computer as default,
  ComputerSession,
  type ScreenshotResult,
  type HTMLResult,
  type DebugResult,
} from './lib';

export { type Uploadable, toFile } from './core/uploads';
export { APIPromise } from './core/api-promise';
export { type ClientOptions } from './client';
export {
  ComputerError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './core/error';

// Re-export all types from resources for convenience
export type {
  ActionResult,
  ComputerResponse,
  ComputerListResponse,
  ComputerExecuteBatchResponse,
  ComputerKeepAliveResponse,
  ComputerCreateParams,
  ComputerCaptureScreenshotParams,
  ComputerClickParams,
  ComputerDebugParams,
  ComputerDoubleClickParams,
  ComputerDragParams,
  ComputerExecuteActionParams,
  ComputerExecuteBatchParams,
  ComputerGetHTMLParams,
  ComputerNavigateParams,
  ComputerPressHotkeyParams,
  ComputerRightClickParams,
  ComputerScrollViewportParams,
  ComputerSetViewportParams,
  ComputerTypeTextParams,
} from './resources/computers';
