beforeAll(async () => {
  console.log('beforeAll second');
});

afterAll(async () => {
  console.log('afterAll second');
});

describe('tests', () => {
  test('log second', async () => {
    console.log('test second');
    expect(true).toEqual(true);
  });
});
