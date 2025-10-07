#!/usr/bin/env -S npm run tsn -T

/**
 * Manual Usage Example
 *
 * Demonstrates direct execution of commands on a computer instance.
 */

import { Computer, ComputerWrapper } from 'tzafon';

async function main() {
  const client = new Computer({
    apiKey: process.env['COMPUTER_API_KEY'],
  });

  const wrapper = new ComputerWrapper(client);
  const computer = await wrapper.create({ kind: 'browser' });

  await computer.navigate('https://google.com');
  await computer.type('Tzafon AI');
  await computer.click(100, 200);
  await computer.terminate();

  console.log('Manual usage completed successfully');
}

main();
