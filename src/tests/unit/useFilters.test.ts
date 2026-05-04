import { renderHook, act } from '@testing-library/react';
import { useSkillFilter, useProjectFilter } from '../../hooks/useFilters';

describe('useSkillFilter', () => {
  it('initializes with "all" category', () => {
    const { result } = renderHook(() => useSkillFilter());
    expect(result.current.activeCategory).toBe('all');
  });

  it('updates category on setFilter', () => {
    const { result } = renderHook(() => useSkillFilter());
    act(() => {
      result.current.setFilter('mobile');
    });
    expect(result.current.activeCategory).toBe('mobile');
  });

  it('can switch between multiple categories', () => {
    const { result } = renderHook(() => useSkillFilter());
    act(() => result.current.setFilter('frontend'));
    expect(result.current.activeCategory).toBe('frontend');
    act(() => result.current.setFilter('backend'));
    expect(result.current.activeCategory).toBe('backend');
    act(() => result.current.setFilter('all'));
    expect(result.current.activeCategory).toBe('all');
  });
});

describe('useProjectFilter', () => {
  it('initializes with "all" category', () => {
    const { result } = renderHook(() => useProjectFilter());
    expect(result.current.activeCategory).toBe('all');
  });

  it('updates category on setFilter', () => {
    const { result } = renderHook(() => useProjectFilter());
    act(() => {
      result.current.setFilter('rn');
    });
    expect(result.current.activeCategory).toBe('rn');
  });

  it('can switch back to all', () => {
    const { result } = renderHook(() => useProjectFilter());
    act(() => result.current.setFilter('rj'));
    act(() => result.current.setFilter('all'));
    expect(result.current.activeCategory).toBe('all');
  });
});
