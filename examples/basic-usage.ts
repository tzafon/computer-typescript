#!/usr/bin/env -S npm run tsn -T

import { Computer } from 'tzafon';

async function main() {
  const client = new Computer();

  // Create a browser session
  const computer = await client.create({
    kind: 'browser',
    display: { width: 1920, height: 1080 },
  });

  console.log('Created computer session:', computer.id);

  try {
    // Navigate to a URL
    await computer.navigate('https://tzafon.ai');
    console.log('Navigated to Tzafon');

    // Take a screenshot
    const screenshot = await computer.screenshot();
    console.log('Screenshot taken:', screenshot);

    // Get HTML content
    const html = await computer.getHTML();
    console.log('HTML preview:', html.result?.html_content?.slice(0, 100));

    // Click at coordinates
    await computer.click(100, 200);

    // Type some text
    await computer.type('hello world');

    // Scroll down
    await computer.scroll(0, 100);
  } finally {
    // Clean up
    await computer.terminate();
    console.log('Session terminated');
  }
}

main().catch(console.error);
