const { saveHeapdumpInterval } = require('../src/memory');

test('saveHeapdumpInterval', async () => {
  await saveHeapdumpInterval(2, 1000, './heapdump/test');
});

test('saveHeapdumpInterval times < 1', async () => {
  await saveHeapdumpInterval(-1, 1000, './heapdump/test');
});
