const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test('сортирует все товары по возрастанию (asc) согласно списку ID [3, 6, 5, 4, 2, 1]', () => {
    const result = sortProductsByPrice(products, 'asc');
    expect(result.map(p => p.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('сортирует все товары без указания направления как [3, 6, 5, 4, 2, 1]', () => {
    const result = sortProductsByPrice(products);
    expect(result.map(p => p.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('сортирует товары [1, 3, 4] по возрастанию (сортируются как [3, 4, 1])', () => {
    const subProducts = products.filter(p => [1, 3, 4].includes(p.id));
    const result = sortProductsByPrice(subProducts, 'asc');
    expect(result.map(p => p.id)).toEqual([3, 4, 1]);
  });

  test('сортирует все товары по убыванию как [1, 2, 4, 5, 6, 3]', () => {
    const result = sortProductsByPrice(products, 'desc');
    expect(result.map(p => p.id)).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test('товары [3, 1, 4] по убыванию сортируются как [1, 4, 3]', () => {
    const subProducts = products.filter(p => [3, 1, 4].includes(p.id));
    const result = sortProductsByPrice(subProducts, 'desc');
    expect(result.map(p => p.id)).toEqual([1, 4, 3]);
  });

  test('товары [5, 2, 6] по убыванию сортируются как [2, 5, 6]', () => {
    const subProducts = products.filter(p => [5, 2, 6].includes(p.id));
    const result = sortProductsByPrice(subProducts, 'desc');

    expect(result.map(p => p.id)).toEqual([2, 5, 6]);
  });

  test('при сортировке не меняет исходный массив [1, 3, 4]', () => {

    const subProducts = products.filter(p => [1, 3, 4].includes(p.id));
    const originalCopy = JSON.parse(JSON.stringify(subProducts));

    sortProductsByPrice(subProducts, 'asc');
    expect(subProducts).toEqual(originalCopy);
  });

  test('"desc" не меняет исходный массив [1, 3, 4]', () => {
    const subProducts = products.filter(p => [1, 3, 4].includes(p.id));
    const originalCopy = JSON.parse(JSON.stringify(subProducts));

    sortProductsByPrice(subProducts, 'desc');

    expect(subProducts).toEqual(originalCopy);
  });
  
  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    const originalCopy = JSON.parse(JSON.stringify(products));

    sortProductsByPrice(products);

    expect(products).toEqual(originalCopy);
  });
});

