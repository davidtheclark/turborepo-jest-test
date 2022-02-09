beforeAll(() => {
  console.log('beforeAll second');
});

afterAll(() => {
  console.log('afterAll second');
});

describe('tests', () => {
  test('log second', () => {
    console.log('test second');
    expect(true).toEqual(true);
  });
});
