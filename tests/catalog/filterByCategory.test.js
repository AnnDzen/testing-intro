import { filterByCategory } from '../../src/catalog.js';
import { products } from '../../src/data/products.js';

describe('filterByCategory', () => {
  test('should return all products for "all" category', () => {
    const result = filterByCategory(products, 'all');
    const ids = result.map(p => p.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6]);
  });

  