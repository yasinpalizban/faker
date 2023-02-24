import { afterEach, describe, expect, it } from 'vitest';
import { faker } from '../src';
import { seededTests } from './support/seededRuns';

const NON_SEEDED_BASED_RUN = 5;

const functionNames = [
  'bear',
  'bird',
  'cat',
  'cetacean',
  'cow',
  'crocodilia',
  'dog',
  'fish',
  'horse',
  'insect',
  'lion',
  'rabbit',
  'rodent',
  'snake',
  'type',
  'random'
] as const;

describe('animal', () => {
  afterEach(() => {
    faker.locale = 'en';
  });

  seededTests(faker, 'animal', (t) => {
    t.itEach(...functionNames);
  });

  describe(`random seeded tests for seed ${faker.seed()}`, () => {
    for (let i = 1; i <= NON_SEEDED_BASED_RUN; i++) {
      for (const functionName of functionNames) {

        if(functionName=='random'){
          describe(`${functionName}()`, () => {
            it(`should return a random animal types name`, () => {
              const actual = faker.animal[functionName]();
              expect(actual).toBeTruthy();
              expect(actual).toBeTypeOf('string');
            });
          });
        }else{
          describe(`${functionName}()`, () => {
            it(`should return random value from ${functionName} array`, () => {
              const actual = faker.animal[functionName]();
              expect(faker.definitions.animal[functionName]).toContain(actual);
            });
          });
        }

      }
    }
  });
});
