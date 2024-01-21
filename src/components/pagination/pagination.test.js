import { describe, expect, test } from '@jest/globals';
import TotalCountOfPages from './Pagination';

describe('pagination', () => {
  test('should return integer <=100', () => {
    expect(TotalCountOfPages(480, 12)).toBe(40);
    expect(TotalCountOfPages(1, 12)).toBe(1);
    expect(TotalCountOfPages(100, 12)).toBe(9);
    expect(TotalCountOfPages(1380, 12)).toBe(100);
  });
});
