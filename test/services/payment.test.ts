import assert from 'assert';
import app from '../../src/app';

describe('\'payment\' service', () => {
  it('registered the service', () => {
    const service = app.service('payment');

    assert.ok(service, 'Registered the service');
  });
});
