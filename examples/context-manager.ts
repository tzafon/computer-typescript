#!/usr/bin/env -S npm run tsn -T

/**
 * Context Manager Example
 *
 * Demonstrates auto-termination using TypeScript's async disposal (using statement).
 * Requires TypeScript 5.2+ and Node.js with Symbol.asyncDispose support.
 */

import { Computer, ComputerWrapper } from 'tzafon';

async function main() {
  const client = new Computer({
    apiKey: process.env['COMPUTER_API_KEY'],
  });

  const wrapper = new ComputerWrapper(client);

  // Using Symbol.asyncDispose for automatic cleanup
  {
    const computer = await wrapper.create({ kind: 'browser' });
    try {
      await computer.navigate('https://google.com');
      await computer.type('Tzafon AI');
      await computer.click(100, 200);
    } finally {
      await computer[Symbol.asyncDispose]();
    }
  }

  console.log('Context manager usage completed successfully');
}

main();
