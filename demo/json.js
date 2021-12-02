import {
  cloneJSON,
  tryParseJSON
} from '@/json';
const QUnit = window.QUnit;


QUnit.test('clone', (assert) => {
  const src = {
    a: 1,
    b: 2
  };
  const copy = cloneJSON(src);
  assert.notStrictEqual(src, copy);
  assert.deepEqual(src, copy);
});

QUnit.test('tryParseJSON', (assert) => {
  assert.strictEqual(tryParseJSON('ss&&**'), undefined);
  assert.deepEqual(tryParseJSON('{"a": 1}'), { a: 1 });
});
