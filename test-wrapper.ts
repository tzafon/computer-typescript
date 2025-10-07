#!/usr/bin/env -S npx tsx

/**
 * Test script for Computer wrapper functionality
 * Run with: npx tsx test-wrapper.ts
 */

import { Computer, ComputerWrapper, AsyncComputerWrapper } from './src/index';

async function test() {
  console.log('🧪 Testing Computer Wrapper Implementations\n');

  const client = new Computer({
    apiKey: process.env.COMPUTER_API_KEY || 'test-key',
  });

  try {
    // Test 1: Manual Usage
    console.log('1️⃣  Testing Manual Usage...');
    const wrapper1 = new ComputerWrapper(client);
    const computer1 = await wrapper1.create({ kind: 'browser' });
    console.log('   ✓ Created computer:', computer1);

    await computer1.navigate('https://google.com');
    await computer1.wait(1);
    await computer1.type('Tzafon AI');
    await computer1.click(100, 200);
    await computer1.doubleClick(150, 250);
    await computer1.rightClick(200, 300);
    await computer1.drag(100, 100, 300, 300);
    await computer1.hotkey('ctrl', 'f');
    await computer1.scroll('down', 500);
    await computer1.screenshot();
    console.log('   ✓ All 10 actions executed');

    await computer1.terminate();
    console.log('   ✓ Terminated successfully\n');

    // Test 2: Context Manager
    console.log('2️⃣  Testing Context Manager...');
    const wrapper2 = new ComputerWrapper(client);
    const computer2 = await wrapper2.create({ kind: 'browser' });
    console.log('   ✓ Created computer:', computer2);

    try {
      await computer2.navigate('https://example.com');
      await computer2.type('Test');
      console.log('   ✓ Commands executed');
    } finally {
      await computer2[Symbol.asyncDispose]();
      console.log('   ✓ Auto-terminated via Symbol.asyncDispose\n');
    }

    // Test 3: Async/Queued
    console.log('3️⃣  Testing Async/Queued...');
    const wrapper3 = new AsyncComputerWrapper(client);
    const computer3 = await wrapper3.create({ kind: 'browser' });
    console.log('   ✓ Created computer:', computer3);

    computer3.navigate('https://google.com');
    computer3.wait(1);
    computer3.type('Queued action');
    computer3.click(50, 100);
    computer3.doubleClick(150, 250);
    computer3.rightClick(200, 300);
    computer3.drag(100, 100, 300, 300);
    computer3.hotkey('ctrl', 'a');
    computer3.scroll('down', 500);
    computer3.screenshot();
    console.log('   ✓ Actions queued (10 actions)');

    const result = await computer3.execute();
    console.log('   ✓ Batch executed:', result);

    await computer3.terminate();
    console.log('   ✓ Terminated\n');

    console.log('✅ All tests passed!');
  } catch (error: any) {
    console.error('\n❌ Test failed:', error.message);
    console.log('\n💡 Tip: Make sure COMPUTER_API_KEY is set and the API is accessible');
    process.exit(1);
  }
}

test();
