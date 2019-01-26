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

  test('checking the number in course page', async function(assert) {
    await visit('/course');
    assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 listing');
  });
});
