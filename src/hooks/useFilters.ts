import { useState, useCallback } from 'react';

export function useSkillFilter() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const setFilter = useCallback((cat: string) => setActiveCategory(cat), []);
  return { activeCategory, setFilter };
}

export function useProjectFilter() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const setFilter = useCallback((cat: string) => setActiveCategory(cat), []);
  return { activeCategory, setFilter };
}
