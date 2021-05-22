const constants = {
  CONTENT: {
    TYPES: {
      POLITICS: 'politics',
      HEALTH: 'health',
      CURRENT_AFFAIRS: 'currentAffairs',
      SPORTS: 'sports',
      ECONOMICS: 'economics',
      FINANCE: 'finance',
      STUDENT: 'student',
      TECHNOLOGY: 'technology'
    },
    FLAGS: {
      PENDING: 'pending',
      VALID: 'valid',
      FAKE: 'fake',
      UNCONFIRMED: 'unconfirmed',
    },
    SPAM_TYPES: {
      STRONG_LANGUAGE: 'strongLanguage',
      VIOLENCE: 'referenceToViolence',
      PHYSICAL_ABUSE: 'physicalAbuse',
      MENTAL_ABUSE: 'mentalAbuse',
      SEXUAL: 'sexual',
      DISCRIMINATORY: 'discriminatory'
    },
    FILTER_TYPES: {
      TYPE: 'type',
      TAGS: 'tags',
      CREATED_BY: 'createdBy',
    },
    SORT_TYPES: {
      // TAGS: 'tags', TODO
      CREATED_AT: 'createdAt',
      UPDATED_AT: 'updatedAt'
    },
    SORT_DIRECTION: {
      ASC: 'asc',
      DESC: 'desc'
    }
  }
};

export default constants;