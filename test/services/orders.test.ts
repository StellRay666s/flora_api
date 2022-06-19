import assert from 'assert';
import app from '../../src/app';

describe('\'orders\' service', () => {
  it('registered the service', () => {
    const service = app.service('orders');

    assert.ok(service, 'Registered the service');
  });
});
