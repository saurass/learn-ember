import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import {
  click,
  currentURL,
  visit
} from '@ember/test-helpers';

module('Acceptance | learn ember', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /about', async function(assert) {
    await visit('/about');
    await click('.button')
    assert.equal(currentURL(), '/contact', 'should navigate equal to /contact');
  });
});
