'use strict';

const bulmaIconpicker = require('../src/js/index').default;

describe('bulmaIconpicker', () => {
  test('Should throw exception if instanciate with no/wrong selector', () => {
    expect(() => {
      new bulmaIconpicker();
    }).toThrow('An invalid selector or non-DOM node has been provided.');
  });

  test('Should return an array', () => {
    var instances = bulmaIconpicker.attach('.selector');
    expect(Array.isArray(instances)).toBe(true);
  });

  test('Should return an array of bulmaIconpicker instances', () => {
    var instances = bulmaIconpicker.attach();
    instances.every(i => expect(i).toBeInstanceOf(bulmaIconpicker));
  });
});
