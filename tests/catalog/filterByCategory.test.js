const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test('should return all products for "all" category', () => {
    const result = filterByCategory(products, 'all');
    const ids = result.map(p => p.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should return all products for undefined category', () => {
    const result = filterByCategory(products, undefined);
    const ids = result.map(p => p.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should return all products for empty string category', () => {
    const result = filterByCategory(products, '');
    const ids = result.map(p => p.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should filter by "electronics" category', () => {
    const result = filterByCategory(products, 'electronics');
    const ids = result.map(p => p.id);
    expect(ids).toEqual([1, 2]);
  });

  test('should filter by "books" category', () => {
    const result = filterByCategory(products, 'books');
    const ids = result.map(p => p.id);
    expect(ids).toEqual([3, 6]);
  });

  test('should filter by "home" category', () => {
    const result = filterByCategory(products, 'home');
    const ids = result.map(p => p.id);
    expect(ids).toEqual([4, 5]);
  });

  test('should return empty array for "clothes" category', () => {
    const result = filterByCategory(products, 'clothes');
    const ids = result.map(p => p.id);
    expect(ids).toEqual([]);
  });

  test('should return empty array for "toys" category', () => {
    const result = filterByCategory(products, 'toys');
    const ids = result.map(p => p.id);
    expect(ids).toEqual([]);
  });

  test('should return empty array for "sports" category', () => {
    const result = filterByCategory(products, 'sports');
    const ids = result.map(p => p.id);
    expect(ids).toEqual([]);
  });
}); 