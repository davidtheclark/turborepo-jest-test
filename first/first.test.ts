beforeAll(async () => {
  console.log('beforeAll first');
});

afterAll(async () => {
  console.log('afterAll first');
});

describe('tests', () => {
  test('log first', async () => {
    console.log('test first');
    expect(true).toEqual(true);
  });
});
