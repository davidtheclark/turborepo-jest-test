const { setLoggingHooks } = require('third/test-util');

describe('tests', () => {
  setLoggingHooks();

  test('log first', async () => {
    console.log('test first');
    expect(true).toEqual(true);
  });
});
