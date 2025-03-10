/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */

import { Faker } from '../faker';
import en from '../locales/en';
import fr_LU from '../locales/fr_LU';

export const faker = new Faker({
  locale: 'fr_LU',
  localeFallback: 'en',
  locales: {
    fr_LU,
    en,
  },
});
