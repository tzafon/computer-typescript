#!/usr/bin/env -S npm run tsn -T

/**
 * Manual Usage Example
 *
 * Demonstrates direct execution of commands on a computer instance.
 */

import Computer from 'tzafon';

async function main() {
  const client = new Computer({
    apiKey: process.env['TZAFON_API_KEY'],
  });

  const computer = await client.create({ kind: 'browser' });

  await computer.navigate('https://google.com');
  await computer.type('Tzafon AI');
  await computer.click(100, 200);
  await computer.terminate();

  console.log('Manual usage completed successfully');
}

main();
