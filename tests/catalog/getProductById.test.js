const products = require('../../src/data/products');
const { getProductById } = require('../../src/catalog');

describe('getProductById', () => {

  test('возвращает товар по ID 1', () => {
    const result = getProductById(products, 1);
    expect(result).toEqual(products[0]);
  });

  test('возвращает товар по ID 4', () => {
    const result = getProductById(products, 4);
    expect(result).toEqual(products[3]);
  });

  test('возвращает товар по ID 6', () => {
    const result = getProductById(products, 6);
    expect(result).toEqual(products[5]);
  });

  test('возвращает null для ID 0', () => {
    const result = getProductById(products, 0);
    expect(result).toBeNull();
  });

  test('возвращает null для несуществующего ID 999', () => {
    const result = getProductById(products, 999);
    expect(result).toBeNull();
  });

  test('возвращает null для отрицательного ID -1', () => {
    const result = getProductById(products, -1);
    expect(result).toBeNull();
  });

  test('возвращает null, если ID — строка ("1")', () => {
    const result = getProductById(products, '1');
    expect(result).toBeNull();
  });

  test('возвращает null, если ID равен undefined', () => {
    const result = getProductById(products, undefined);
    expect(result).toBeNull();
  });

  test('возвращает null, если ID равен NaN', () => {
    const result = getProductById(products, NaN);
    expect(result).toBeNull();
  });

});
