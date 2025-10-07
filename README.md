# Computer TypeScript API Library

[![NPM version](<https://img.shields.io/npm/v/tzafoncomputer.svg?label=npm%20(stable)>)](https://npmjs.org/package/tzafoncomputer) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/tzafoncomputer)

This library provides convenient access to the Computer REST API from server-side TypeScript or JavaScript.

The REST API documentation can be found on [docs.tzafon.ai](http://docs.tzafon.ai). The full API of this library can be found in [api.md](api.md).

It is generated with [Stainless](https://www.stainless.com/).

## Installation

```sh
npm install git+ssh://git@github.com:atulgavandetzafon/computer-typescript.git
```

> [!NOTE]
> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npm install tzafoncomputer`

## Usage

The full API of this library can be found in [api.md](api.md).

### Quick Start

<!-- prettier-ignore -->
```js
import Computer from 'tzafoncomputer';

const client = new Computer({
  apiKey: process.env['COMPUTER_API_KEY'], // This is the default and can be omitted
});

const response = await client.auth.handleCallback({ code: 'REPLACE_ME', state: 'REPLACE_ME' });
```

### Computer Automation

This library provides convenient wrappers for computer automation with three usage patterns:

#### Manual Usage

Direct execution of commands on a computer instance:

```ts
import { Computer, ComputerWrapper } from 'tzafoncomputer';

const client = new Computer();
const wrapper = new ComputerWrapper(client);
const computer = await wrapper.create({ kind: 'browser' });

await computer.navigate('https://google.com');
await computer.type('Tzafon AI');
await computer.click(100, 200);
await computer.terminate();
```

#### Context Manager

Auto-termination using try/finally or Symbol.asyncDispose:

```ts
import { Computer, ComputerWrapper } from 'tzafoncomputer';

const client = new Computer();
const wrapper = new ComputerWrapper(client);
const computer = await wrapper.create({ kind: 'browser' });

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
import { Computer, AsyncComputerWrapper } from 'tzafoncomputer';

const client = new Computer();
const wrapper = new AsyncComputerWrapper(client);
const computer = await wrapper.create({ kind: 'browser' });

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
import Computer from 'tzafoncomputer';

const client = new Computer({
  apiKey: process.env['COMPUTER_API_KEY'], // This is the default and can be omitted
});

const params: Computer.AuthHandleCallbackParams = { code: 'REPLACE_ME', state: 'REPLACE_ME' };
const response: Computer.AuthHandleCallbackResponse = await client.auth.handleCallback(params);
```

Documentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.

## Handling errors

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `APIError` will be thrown:

<!-- prettier-ignore -->
```ts
const response = await client.auth
  .handleCallback({ code: 'REPLACE_ME', state: 'REPLACE_ME' })
  .catch(async (err) => {
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
await client.auth.handleCallback({ code: 'REPLACE_ME', state: 'REPLACE_ME' }, {
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
await client.auth.handleCallback({ code: 'REPLACE_ME', state: 'REPLACE_ME' }, {
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

const response = await client.auth.handleCallback({ code: 'REPLACE_ME', state: 'REPLACE_ME' }).asResponse();
console.log(response.headers.get('X-My-Header'));
console.log(response.statusText); // access the underlying Response object

const { data: response, response: raw } = await client.auth
  .handleCallback({ code: 'REPLACE_ME', state: 'REPLACE_ME' })
  .withResponse();
console.log(raw.headers.get('X-My-Header'));
console.log(response);
```

### Logging

> [!IMPORTANT]
> All log messages are intended for debugging only. The format and content of log messages
> may change between releases.

#### Log levels

The log level can be configured in two ways:

1. Via the `COMPUTER_LOG` environment variable
2. Using the `logLevel` client option (overrides the environment variable if set)

```ts
import Computer from 'tzafoncomputer';

const client = new Computer({
  logLevel: 'debug', // Show all log messages
});
```

Available log levels, from most to least verbose:

- `'debug'` - Show debug messages, info, warnings, and errors
- `'info'` - Show info messages, warnings, and errors
- `'warn'` - Show warnings and errors (default)
- `'error'` - Show only errors
- `'off'` - Disable all logging

At the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.
Some authentication-related headers are redacted, but sensitive data in request and response bodies
may still be visible.

#### Custom logger

By default, this library logs to `globalThis.console`. You can also provide a custom logger.
Most logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.

When providing a custom logger, the `logLevel` option still controls which messages are emitted, messages
below the configured level will not be sent to your logger.

```ts
import Computer from 'tzafoncomputer';
import pino from 'pino';

const logger = pino();

const client = new Computer({
  logger: logger.child({ name: 'Computer' }),
  logLevel: 'debug', // Send all messages to pino, allowing it to filter
});
```

### Making custom/undocumented requests

This library is typed for convenient access to the documented API. If you need to access undocumented
endpoints, params, or response properties, the library can still be used.

#### Undocumented endpoints

To make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.
Options on the client, such as retries, will be respected when making these requests.

```ts
await client.post('/some/path', {
  body: { some_prop: 'foo' },
  query: { some_query_arg: 'bar' },
});
```

#### Undocumented request params

To make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented
parameter. This library doesn't validate at runtime that the request matches the type, so any extra values you
send will be sent as-is.

```ts
client.auth.handleCallback({
  // ...
  // @ts-expect-error baz is not yet public
  baz: 'undocumented option',
});
```

For requests with the `GET` verb, any extra params will be in the query, all other requests will send the
extra param in the body.

If you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request
options.

#### Undocumented response properties

To access undocumented response properties, you may access the response object with `// @ts-expect-error` on
the response object, or cast the response object to the requisite type. Like the request params, we do not
validate or strip extra properties from the response from the API.

### Customizing the fetch client

By default, this library expects a global `fetch` function is defined.

If you want to use a different `fetch` function, you can either polyfill the global:

```ts
import fetch from 'my-fetch';

globalThis.fetch = fetch;
```

Or pass it to the client:

```ts
import Computer from 'tzafoncomputer';
import fetch from 'my-fetch';

const client = new Computer({ fetch });
```

### Fetch options

If you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)

```ts
import Computer from 'tzafoncomputer';

const client = new Computer({
  fetchOptions: {
    // `RequestInit` options
  },
});
```

#### Configuring proxies

To modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy
options to requests:

<img src="https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg" align="top" width="18" height="21"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>

```ts
import Computer from 'tzafoncomputer';
import * as undici from 'undici';

const proxyAgent = new undici.ProxyAgent('http://localhost:8888');
const client = new Computer({
  fetchOptions: {
    dispatcher: proxyAgent,
  },
});
```

<img src="https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg" align="top" width="18" height="21"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>

```ts
import Computer from 'tzafoncomputer';

const client = new Computer({
  fetchOptions: {
    proxy: 'http://localhost:8888',
  },
});
```

<img src="https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg" align="top" width="18" height="21"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>

```ts
import Computer from 'npm:tzafoncomputer';

const httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });
const client = new Computer({
  fetchOptions: {
    client: httpClient,
  },
});
```

## Frequently Asked Questions

## Semantic versioning

This package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:

1. Changes that only affect static types, without breaking runtime behavior.
2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_
3. Changes that we do not expect to impact the vast majority of users in practice.

We take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.

We are keen for your feedback; please open an [issue](https://www.github.com/atulgavandetzafon/computer-typescript/issues) with questions, bugs, or suggestions.

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
