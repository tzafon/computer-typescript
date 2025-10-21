# Tzafon TypeScript SDK

[![NPM version](<https://img.shields.io/npm/v/tzafon.svg?label=npm%20(stable)>)](https://npmjs.org/package/tzafon) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/tzafon)

**Programmatic control of browsers and desktops in minutes. Full stealth. Lightning quick.**

This library provides convenient access to the Tzafon Computer API from server-side TypeScript or JavaScript. Control browsers and desktops programmatically with a simple, intuitive API.

📚 **[Full Documentation](https://docs.tzafon.ai/overview)** | 🔧 **[API Reference](api.md)**

## Installation

```sh
npm install tzafon
```

## Quick Start

```typescript
import Computer from 'tzafon';

const client = new Computer({
  apiKey: process.env['TZAFON_API_KEY'], // This is the default and can be omitted
});

const computer = await client.create({ kind: 'browser' });

await computer.navigate('https://google.com');
await computer.type('Tzafon AI');
await computer.click(100, 200);
await computer.screenshot();

await computer.terminate();
```

For more examples and detailed usage, visit the [Tzafon SDK Documentation](https://docs.tzafon.ai/overview).

## Usage

The full API of this library can be found in [api.md](api.md).

### Computer Automation

This library provides convenient wrappers for computer automation with three usage patterns:

#### Manual Usage

Direct execution of commands on a computer instance:

```ts
import Computer from 'tzafon';

const client = new Computer();
const computer = await client.create({ kind: 'browser' });

await computer.navigate('https://google.com');
await computer.type('Tzafon AI');
await computer.click(100, 200);
await computer.terminate();
```

#### Context Manager

Auto-termination using try/finally or Symbol.asyncDispose:

```ts
import Computer from 'tzafon';

const client = new Computer();
const computer = await client.create({ kind: 'browser' });

try {
  await computer.navigate('https://google.com');
  await computer.type('Tzafon AI');
  await computer.click(100, 200);
} finally {
  await computer[Symbol.asyncDispose](); // Auto-terminates
}
```

#### Async (Queued) Usage

Queue actions and execute them in batch:

```ts
import Computer from 'tzafon';

const client = new Computer();
const computer = await client.createAsync({ kind: 'browser' });

computer.navigate('https://google.com');
computer.type('Tzafon AI');
computer.click(100, 200);

const result = await computer.execute();
console.log(`Executed ${result['executed'] || 'all'} actions`);

await computer.terminate();
```

### Request & Response types

This library includes TypeScript definitions for all request params and response fields. You may import and use them like so:

<!-- prettier-ignore -->
```ts
import Computer from 'tzafon';

const client = new Computer({
  apiKey: process.env['TZAFON_API_KEY'], // This is the default and can be omitted
});

const params: Computer.ComputerCreateParams = { kind: 'browser' };
const computerResponse: Computer.ComputerResponse = await client.computers.create(params);
```

Documentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.

## Handling errors

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `APIError` will be thrown:

<!-- prettier-ignore -->
```ts
const computerResponse = await client.computers.create({ kind: 'browser' }).catch(async (err) => {
  if (err instanceof Computer.APIError) {
    console.log(err.status); // 400
    console.log(err.name); // BadRequestError
    console.log(err.headers); // {server: 'nginx', ...}
  } else {
    throw err;
  }
});
```

Error codes are as follows:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 401         | `AuthenticationError`      |
| 403         | `PermissionDeniedError`    |
| 404         | `NotFoundError`            |
| 422         | `UnprocessableEntityError` |
| 429         | `RateLimitError`           |
| >=500       | `InternalServerError`      |
| N/A         | `APIConnectionError`       |

### Retries

Certain errors will be automatically retried 2 times by default, with a short exponential backoff.
Connection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,
429 Rate Limit, and >=500 Internal errors will all be retried by default.

You can use the `maxRetries` option to configure or disable this:

<!-- prettier-ignore -->
```js
// Configure the default for all requests:
const client = new Computer({
  maxRetries: 0, // default is 2
});

// Or, configure per-request:
await client.computers.create({ kind: 'browser' }, {
  maxRetries: 5,
});
```

### Timeouts

Requests time out after 1 minute by default. You can configure this with a `timeout` option:

<!-- prettier-ignore -->
```ts
// Configure the default for all requests:
const client = new Computer({
  timeout: 20 * 1000, // 20 seconds (default is 1 minute)
});

// Override per-request:
await client.computers.create({ kind: 'browser' }, {
  timeout: 5 * 1000,
});
```

On timeout, an `APIConnectionTimeoutError` is thrown.

Note that requests which time out will be [retried twice by default](#retries).

## Advanced Usage

### Accessing raw Response data (e.g., headers)

The "raw" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.
This method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.

You can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.
Unlike `.asResponse()` this method consumes the body, returning once it is parsed.

<!-- prettier-ignore -->
```ts
const client = new Computer();

const response = await client.computers.create({ kind: 'browser' }).asResponse();
console.log(response.headers.get('X-My-Header'));
console.log(response.statusText); // access the underlying Response object

const { data: computerResponse, response: raw } = await client.computers
  .create({ kind: 'browser' })
  .withResponse();
console.log(raw.headers.get('X-My-Header'));
console.log(computerResponse.id);
```


## Requirements

TypeScript >= 4.9 is supported.

The following runtimes are supported:

- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)
- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.
- Deno v1.28.0 or higher.
- Bun 1.0 or later.
- Cloudflare Workers.
- Vercel Edge Runtime.
- Jest 28 or greater with the `"node"` environment (`"jsdom"` is not supported at this time).
- Nitro v2.6 or greater.

Note that React Native is not supported at this time.

If you are interested in other runtime environments, please open or upvote an issue on GitHub.

## Contributing

See [the contributing documentation](./CONTRIBUTING.md).
