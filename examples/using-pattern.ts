#!/usr/bin/env -S npm run tsn -T

import { Computer } from 'tzafon';

/**
 * Example using the TC39 explicit resource management proposal.
 * Requires TypeScript 5.2+ and target ES2022+
 *
 * The session will be automatically terminated when the `using` block exits.
 */
async function main() {
  const client = new Computer();

  // The session will automatically terminate when this scope exits
  await using computer = await client.create({
    kind: 'browser',
    display: { width: 1920, height: 1080 },
  });

  console.log('Created computer session:', computer.id);

  await computer.navigate('https://tzafon.ai');
  const screenshot = await computer.screenshot();
  const html = await computer.getHTML();

  console.log({ html: html.result?.html_content?.slice(0, 100) });
  console.log(screenshot);

  // No need to call computer.terminate() - it happens automatically!
}

main().catch(console.error);
