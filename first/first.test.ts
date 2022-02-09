beforeAll(() => {
  console.log('beforeAll first');
});

afterAll(() => {
  console.log('afterAll first');
});

describe('tests', () => {
  test('log first', () => {
    console.log('test first');
    expect(true).toEqual(true);
  });
});
