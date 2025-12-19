# Tzafon TypeScript SDK

[![NPM version](https://img.shields.io/npm/v/tzafon.svg)](https://npmjs.org/package/tzafon) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/tzafon)

Remote browser and desktop automation. Control browsers and desktops programmatically through a simple TypeScript/JavaScript API.

## Installation

```bash
npm install tzafon
```

## Quick Start

```typescript
import Computer from 'tzafon';

const client = new Computer(); // Reads TZAFON_API_KEY from environment

// Create and control a browser instance
const computer = await client.create({ kind: 'browser' });

await computer.navigate('https://wikipedia.com');

const result = await computer.screenshot();
console.log(`Screenshot: ${result.result?.screenshot_url}`);

await computer.click(100, 200);
await computer.type('Hello, world!');

await computer.terminate();
```

Set your API key:
```bash
export TZAFON_API_KEY="your-api-key"
```

### Using `await using` (TypeScript 5.2+)

```typescript
await using computer = await client.create({ kind: 'browser' });
await computer.navigate('https://example.com');
// Automatically terminates when scope exits
```

## Features

**Session Management**
- Automatic cleanup with `await using` (TS 5.2+)
- Manual session control when needed
- Browser and desktop environments

**Browser Actions**
- Navigation: `navigate(url)`
- Mouse: `click()`, `doubleClick()`, `rightClick()`, `drag()`
- Keyboard: `type()`, `hotkey()`
- Viewport: `scroll()`, `setViewport()`
- Capture: `screenshot()`, `getHTML()`
- Debug: Execute shell commands with `debug()`

**Advanced Features**
- Multi-tab management
- Batch action execution
- Low-level input control (keyDown/keyUp, mouseDown/mouseUp)
- Proxy configuration
- Real-time streaming (events, screencast)

**Type Safety**
- Full TypeScript definitions
- IDE autocomplete support
- Typed request and response objects

## Examples

### Browser Automation

```typescript
const computer = await client.create({ kind: 'browser' });

// Navigate and interact
await computer.navigate('https://github.com/login');
await computer.click(300, 400);
await computer.type('username');
await computer.hotkey(['Control', 'a']); // Select all

// Capture state
const htmlResult = await computer.getHTML();
const html = htmlResult.result?.html_content;

// Execute commands
const debugResult = await computer.debug('ls -la');
const output = debugResult.result?.debug_response;

await computer.terminate();
```

### Batch Actions

```typescript
// Execute multiple actions in one request
const result = await computer.batch([
    { type: 'go_to_url', url: 'https://example.com' },
    { type: 'wait', ms: 2000 },
    { type: 'click', x: 100, y: 200 },
    { type: 'type', text: 'search query' },
    { type: 'screenshot' }
]);
```

### Low-Level Input Control

```typescript
// Shift-click selection
await computer.execute({ type: 'key_down', key: 'Shift' });
await computer.click(100, 200);
await computer.click(100, 400);
await computer.execute({ type: 'key_up', key: 'Shift' });
```

### Proxy Configuration

```typescript
// Set proxy for the browser session
await computer.execute({
    type: 'change_proxy',
    proxy_url: 'http://user:pass@proxy:port'
});
```

### Multi-Tab Management

```typescript
// Create new tab
const result = await computer.execute({
    type: 'new_tab',
    url: 'https://example.com'
});
const tabId = result.executed_tab_id;

// List all tabs
const tabs = await computer.execute({ type: 'list_tabs' });

// Switch to tab
await computer.execute({ type: 'switch_tab', tab_id: tabId });

// Close tab
await computer.execute({ type: 'close_tab', tab_id: tabId });
```

## Advanced Usage

### Raw SDK Access

The simplified wrapper uses the generated SDK under the hood. You can access it directly:

```typescript
// Low-level API
const response = await client.computers.create({ kind: 'browser' });
await client.computers.navigate(response.id!, { url: 'https://example.com' });
const result = await client.computers.captureScreenshot(response.id!);
await client.computers.terminate(response.id!);
```

### Request & Response Types

```typescript
import Computer from 'tzafon';

const client = new Computer();

const params: Computer.ComputerCreateParams = { kind: 'browser' };
const response: Computer.ComputerResponse = await client.computers.create(params);
```

### Error Handling

```typescript
import Computer from 'tzafon';

try {
    const computer = await client.create({ kind: 'browser' });
    await computer.navigate('https://example.com');
} catch (err) {
    if (err instanceof Computer.RateLimitError) {
        console.log('Rate limit exceeded, back off');
    } else if (err instanceof Computer.AuthenticationError) {
        console.log('Invalid API key');
    } else if (err instanceof Computer.APIError) {
        console.log(`API error: ${err.status} ${err.message}`);
    } else {
        throw err;
    }
}
```

### Configuration

```typescript
const client = new Computer({
    apiKey: 'your-api-key',      // Or use TZAFON_API_KEY env var
    baseURL: 'https://...',      // Optional: custom endpoint
    timeout: 120 * 1000,         // Request timeout in ms (default: 60s)
    maxRetries: 2,               // Retry failed requests (default: 2)
});
```

## API Reference

**Session Methods**
- `navigate(url)` - Navigate to URL
- `click(x, y)` - Click at coordinates
- `doubleClick(x, y)` - Double-click
- `rightClick(x, y)` - Right-click
- `drag(x1, y1, x2, y2)` - Click and drag
- `type(text)` - Type text
- `hotkey(keys)` - Press key combination
- `scroll(dx, dy, x?, y?)` - Scroll viewport
- `screenshot(base64?)` - Capture screenshot
- `getHTML(autoDetectEncoding?)` - Get page HTML
- `debug(command, options?)` - Run shell command
- `setViewport(width, height, scaleFactor?)` - Set viewport size
- `wait(seconds)` - Wait for duration
- `batch(actions)` - Execute multiple actions
- `execute(action)` - Execute any action
- `keepAlive()` - Extend session timeout
- `terminate()` - End session

## Error Codes

| Status | Error Type |
|--------|------------|
| 400 | `BadRequestError` |
| 401 | `AuthenticationError` |
| 403 | `PermissionDeniedError` |
| 404 | `NotFoundError` |
| 422 | `UnprocessableEntityError` |
| 429 | `RateLimitError` |
| >=500 | `InternalServerError` |

## Documentation

- REST API: [docs.tzafon.ai](https://docs.tzafon.ai)
- Full API Reference: [api.md](api.md)
- Contributing: [CONTRIBUTING.md](CONTRIBUTING.md)

## Requirements

- TypeScript >= 4.9
- Node.js 20+ (LTS)
- Also supports: Deno, Bun, Cloudflare Workers, Vercel Edge Runtime

## License

See [LICENSE](LICENSE)
