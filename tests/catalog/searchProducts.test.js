const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test('should find product by exact match "Наушники"', () => {
    const result = searchProducts(products, 'Наушники');
    expect(result.map(p => p.id)).toEqual([1]);
  });

  test('should find product by exact match "Чистый код"', () => {
    const result = searchProducts(products, 'Чистый код');
    expect(result.map(p => p.id)).toEqual([6]);
  });

  test('should find product by exact match "Настольная лампа"', () => {
    const result = searchProducts(products, 'Настольная лампа');
    expect(result.map(p => p.id)).toEqual([4]);
  });

  test('should find product case-insensitively for "javascript"', () => {
    const result = searchProducts(products, 'javascript');
    expect(result.map(p => p.id)).toEqual([3]);
  });

  test('should find product case-insensitively for "ЧЕХОЛ"', () => {
    const result = searchProducts(products, 'ЧЕХОЛ');
    expect(result.map(p => p.id)).toEqual([5]);
  });

  test('should find product case-insensitively for "наушники"', () => {
    const result = searchProducts(products, 'наушники');
    expect(result.map(p => p.id)).toEqual([1]);
  });

  test('should return all products for empty string query', () => {
    const result = searchProducts(products, '');
    expect(result.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should return all products when a space character is entered into the search query', () => {
    const result = searchProducts(products, ' ');
    expect(result.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should return all products for whitespace characters query', () => {
    const result = searchProducts(products, '\t\n');
    expect(result.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
