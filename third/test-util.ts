exports.setLoggingHooks = function() {
  beforeAll(async () => {
    console.log('beforeAll first');
  });

  afterAll(async () => {
    console.log('afterAll first');
  });
}
