#!/usr/bin/env -S npm run tsn -T

/**
 * Async (Queued) Usage Example
 *
 * Demonstrates queuing actions and executing them in batch.
 */

import { Computer, AsyncComputerWrapper } from 'tzafonComputer';

async function main() {
  const client = new Computer({
    apiKey: process.env['COMPUTER_API_KEY'],
  });

  const wrapper = new AsyncComputerWrapper(client);
  const computer = await wrapper.create({ kind: 'browser' });

  computer.navigate('https://google.com');
  computer.type('Tzafon AI');
  computer.click(100, 200);

  const result = await computer.execute();
  console.log(`Executed ${result['executed'] || 'all'} actions`);

  await computer.terminate();

  console.log('Async queued usage completed successfully');
}

main();
