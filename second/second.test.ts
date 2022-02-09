const { setLoggingHooks } = require('third/test-util');

describe('tests', () => {
  setLoggingHooks();

  test('log second', async () => {
    console.log('test second');
    expect(true).toEqual(true);
  });
});
