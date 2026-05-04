import {
  NAV_LINKS,
  HERO_STATS,
  HERO_PROFILE,
  TECH_BADGES,
  MINI_SKILLS,
  SKILLS,
  SKILL_FILTERS,
  TOOLS,
  PROJECTS,
  PROJECT_FILTERS,
  EXPERIENCE_ITEMS,
  CERTIFICATIONS,
  LANGUAGES,
  WORK_STYLE_TAGS,
  CONTACT_CARDS,
  AVAILABILITY_INFO,
  PERSONAL_INFO,
  EDUCATION,
  INTERESTS,
  ABOUT_BIO,
} from '../../constants';

describe('NAV_LINKS', () => {
  it('has at least 6 links', () => {
    expect(NAV_LINKS.length).toBeGreaterThanOrEqual(6);
  });

  it('every link has id, label, and path', () => {
    NAV_LINKS.forEach(link => {
      expect(link.id).toBeTruthy();
      expect(link.label).toBeTruthy();
      expect(link.path).toMatch(/^\//);
    });
  });

  it('home link has path "/"', () => {
    const home = NAV_LINKS.find(l => l.id === 'home');
    expect(home?.path).toBe('/');
  });
});

describe('HERO_PROFILE', () => {
  it('has all required fields', () => {
    expect(HERO_PROFILE.name).toBeTruthy();
    expect(HERO_PROFILE.role).toBeTruthy();
    expect(HERO_PROFILE.location).toBeTruthy();
    expect(HERO_PROFILE.avatarInitials).toHaveLength(2);
  });
});

describe('HERO_STATS', () => {
  it('has exactly 3 stats', () => {
    expect(HERO_STATS).toHaveLength(3);
  });

  it('each stat has id, value and label', () => {
    HERO_STATS.forEach(stat => {
      expect(stat.id).toBeTruthy();
      expect(stat.value).toBeTruthy();
      expect(stat.label).toBeTruthy();
    });
  });
});

describe('TECH_BADGES', () => {
  it('has at least 4 highlighted badges', () => {
    const highlighted = TECH_BADGES.filter(b => b.highlighted);
    expect(highlighted.length).toBeGreaterThanOrEqual(4);
  });
});

describe('MINI_SKILLS', () => {
  it('all percentages are between 0 and 100', () => {
    MINI_SKILLS.forEach(skill => {
      expect(skill.percentage).toBeGreaterThan(0);
      expect(skill.percentage).toBeLessThanOrEqual(100);
    });
  });
});

describe('SKILLS', () => {
  it('has 6 skills', () => {
    expect(SKILLS).toHaveLength(6);
  });

  it('every skill has required fields', () => {
    SKILLS.forEach(skill => {
      expect(skill.id).toBeTruthy();
      expect(skill.name).toBeTruthy();
      expect(skill.percentage).toBeGreaterThan(0);
      expect(skill.category.length).toBeGreaterThan(0);
      expect(['orange', 'dark']).toContain(skill.variant);
    });
  });

  it('all categories are valid SkillCategory values', () => {
    const valid = ['all', 'frontend', 'mobile', 'realtime', 'backend', 'integration'];
    SKILLS.forEach(skill => {
      skill.category.forEach(cat => {
        expect(valid).toContain(cat);
      });
    });
  });
});

describe('SKILL_FILTERS', () => {
  it('first filter is "all"', () => {
    expect(SKILL_FILTERS[0].value).toBe('all');
  });
});

describe('TOOLS', () => {
  it('has 12 tools', () => {
    expect(TOOLS).toHaveLength(12);
  });

  it('every tool has icon and label', () => {
    TOOLS.forEach(tool => {
      expect(tool.icon).toBeTruthy();
      expect(tool.label).toBeTruthy();
    });
  });
});

describe('PROJECTS', () => {
  it('has 6 projects', () => {
    expect(PROJECTS).toHaveLength(6);
  });

  it('every project has required fields', () => {
    PROJECTS.forEach(p => {
      expect(p.id).toBeTruthy();
      expect(p.title).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.stack.length).toBeGreaterThan(0);
      // Fixed: actual categories used are rn, rj, nx, rd
      expect(['rn', 'rj', 'nx', 'rd']).toContain(p.category);
      expect(['orange', 'dark', 'muted']).toContain(p.catVariant);
    });
  });

  it('at least 2 projects are featured', () => {
    const featured = PROJECTS.filter(p => p.featured);
    expect(featured.length).toBeGreaterThanOrEqual(2);
  });
});

describe('PROJECT_FILTERS', () => {
  it('first filter label is "All Projects"', () => {
    // Fixed: label is "All Projects" not "All"
    expect(PROJECT_FILTERS[0].label).toBe('All Projects');
  });

  it('first filter value is "all"', () => {
    expect(PROJECT_FILTERS[0].value).toBe('all');
  });

  it('includes a Full Stack filter', () => {
    // Fixed: label is "Full Stack" not "R&D / Full Stack"
    const fsFilter = PROJECT_FILTERS.find(f => f.label === 'Full Stack');
    expect(fsFilter).toBeDefined();
  });
});

describe('EXPERIENCE_ITEMS', () => {
  it('has exactly 3 experience items', () => {
    expect(EXPERIENCE_ITEMS).toHaveLength(3);
  });

  it('every item has role, company, and achievements', () => {
    EXPERIENCE_ITEMS.forEach(exp => {
      expect(exp.role).toBeTruthy();
      expect(exp.company).toBeTruthy();
      expect(exp.achievements.length).toBeGreaterThan(0);
    });
  });

  it('dotVariant values are valid', () => {
    EXPERIENCE_ITEMS.forEach(exp => {
      expect(['orange', 'dark', 'muted']).toContain(exp.dotVariant);
    });
  });
});

describe('CERTIFICATIONS', () => {
  it('has at least 3 certifications', () => {
    expect(CERTIFICATIONS.length).toBeGreaterThanOrEqual(3);
  });
});

describe('LANGUAGES', () => {
  it('has at least 2 languages', () => {
    expect(LANGUAGES.length).toBeGreaterThanOrEqual(2);
  });
});

describe('WORK_STYLE_TAGS', () => {
  it('has at least 4 tags', () => {
    expect(WORK_STYLE_TAGS.length).toBeGreaterThanOrEqual(4);
  });
});

describe('CONTACT_CARDS', () => {
  it('has 5 contact cards', () => {
    expect(CONTACT_CARDS).toHaveLength(5);
  });

  it('email card has mailto href', () => {
    const emailCard = CONTACT_CARDS.find(c => c.id === 'email');
    expect(emailCard?.href).toMatch(/^mailto:/);
  });
});

describe('AVAILABILITY_INFO', () => {
  it('has heading, subtext and badge', () => {
    expect(AVAILABILITY_INFO.heading).toBeTruthy();
    expect(AVAILABILITY_INFO.subtext).toBeTruthy();
    expect(AVAILABILITY_INFO.badge).toBeTruthy();
  });
});

describe('PERSONAL_INFO', () => {
  it('has at least 5 entries', () => {
    expect(PERSONAL_INFO.length).toBeGreaterThanOrEqual(5);
  });

  it('at least one entry is accented (Available)', () => {
    const accented = PERSONAL_INFO.filter(i => i.accent);
    expect(accented.length).toBeGreaterThanOrEqual(1);
  });
});

describe('EDUCATION', () => {
  it('has 2 education entries', () => {
    expect(EDUCATION).toHaveLength(2);
  });
});

describe('INTERESTS', () => {
  it('has at least 5 interests', () => {
    expect(INTERESTS.length).toBeGreaterThanOrEqual(5);
  });
});

describe('ABOUT_BIO', () => {
  it('has 3 paragraphs', () => {
    expect(ABOUT_BIO).toHaveLength(3);
  });

  it('each paragraph is non-empty', () => {
    ABOUT_BIO.forEach(para => {
      expect(para.length).toBeGreaterThan(0);
    });
  });
});
