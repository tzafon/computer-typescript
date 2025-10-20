# Computer TypeScript - Quick Start Guide

## Installation

```bash
npm install tzafon
# or
yarn add tzafon
```

## Three Ways to Use Computer Automation

### 1. 🔄 Manual Usage (Immediate Execution)

Best for: Simple scripts, debugging, or when you need immediate feedback

```typescript
import Computer from 'tzafon';

const client = new Computer();
const computer = await client.create({ kind: 'browser' });

await computer.navigate('https://google.com');
await computer.type('Tzafon AI');
await computer.click(100, 200);
await computer.terminate();
```

**Pros:**

- ✅ Simple and straightforward
- ✅ Immediate execution and feedback
- ✅ Easy to debug

**Cons:**

- ❌ Multiple API calls (one per action)
- ❌ Manual cleanup required

---

### 2. 🧹 Context Manager (Auto-Cleanup)

Best for: Production code where resource cleanup is critical

```typescript
import Computer from 'tzafon';

const client = new Computer();
const computer = await client.create({ kind: 'browser' });

try {
  await computer.navigate('https://google.com');
  await computer.type('Tzafon AI');
  await computer.click(100, 200);
} finally {
  await computer[Symbol.asyncDispose]();
}
```

**Pros:**

- ✅ Guaranteed cleanup
- ✅ Error-safe resource management
- ✅ Follows TypeScript disposal patterns

**Cons:**

- ❌ Requires try/finally block
- ❌ Multiple API calls (one per action)

---

### 3. ⚡ Async/Queued (Batch Execution)

Best for: Performance-critical applications, reducing API calls

```typescript
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

**Pros:**

- ✅ Single batch API call
- ✅ Better performance
- ✅ Cleaner syntax (no await on each action)

**Cons:**

- ❌ No immediate feedback per action
- ❌ All actions execute together (fail together)

---

## Available Methods

All three patterns support these methods:

| Method         | Parameters             | Description                   |
| -------------- | ---------------------- | ----------------------------- |
| `navigate()`   | `url: string`          | Navigate to a URL             |
| `type()`       | `text: string`         | Type text into active element |
| `click()`      | `x: number, y: number` | Click at coordinates          |
| `screenshot()` | -                      | Capture screenshot            |
| `terminate()`  | -                      | End the session               |
| `keepAlive()`  | -                      | Extend session timeout        |

## Configuration

### Create Computer with Options

```typescript
const computer = await wrapper.create({
  kind: 'browser', // 'browser' | 'desktop' | 'code'
  context_id: 'my-context', // Optional context ID
  display: {
    // Optional display settings
    width: 1920,
    height: 1080,
    scale: 1,
  },
});
```

### Client Configuration

```typescript
const client = new Computer({
  apiKey: process.env.TZAFON_API_KEY,
  timeout: 60000, // 60 seconds
  maxRetries: 3,
  logLevel: 'debug',
});
```

## Best Practices

1. **Always terminate sessions** to avoid resource leaks:

   ```typescript
   try {
     // ... your code
   } finally {
     await computer.terminate();
   }
   ```

2. **Use queued execution for performance**:

   ```typescript
   // ❌ Slow - 3 API calls
   await computer.navigate(url);
   await computer.type(text);
   await computer.click(x, y);

   // ✅ Fast - 1 API call
   computer.navigate(url);
   computer.type(text);
   computer.click(x, y);
   await computer.execute();
   ```

3. **Handle errors gracefully**:

   ```typescript
   try {
     await computer.navigate('https://example.com');
   } catch (error) {
     if (error instanceof Computer.APIError) {
       console.error('API Error:', error.status, error.message);
     }
   }
   ```

4. **Use environment variables for sensitive data**:
   ```typescript
   const client = new Computer({
     apiKey: process.env.TZAFON_API_KEY,
   });
   ```

## Examples

See the `examples/` directory for complete working examples:

- `examples/manual-usage.ts` - Direct execution pattern
- `examples/context-manager.ts` - Auto-cleanup pattern
- `examples/async-queued.ts` - Batch execution pattern

## Troubleshooting

### "TZAFON_API_KEY environment variable is missing"

**Solution:** Set your API key:

```bash
export TZAFON_API_KEY="your-api-key-here"
```

### "Cannot find module 'tzafon'"

**Solution:** Install the package:

```bash
npm install tzafon
```

### Session timeout errors

**Solution:** Use `keepAlive()` for long-running sessions:

```typescript
await computer.keepAlive();
```

## Need Help?

- 📖 Full API Documentation: [api.md](./api.md)
- 🐛 Report Issues: [GitHub Issues](https://github.com/stainless-sdks/computer-typescript/issues)
- 📚 More Examples: [examples/](./examples/)

---

**Happy Automating! 🚀**
