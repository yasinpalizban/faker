import type { LocaleEntry } from './definitions';

/**
 * The possible definitions related to addresses and locations.
 */
export type LocationDefinitions = LocaleEntry<{
  /**
   * Postcodes patterns by state
   */
  postcode_by_state: { [state: string]: { min: number; max: number } };

  /**
   * Postcodes patterns.
   */
  postcode: string | string[];

  /**
   * The patterns to generate city names.
   */
  city: string[];

  /**
   * The names of actual cities.
   */
  city_name: string[];

  /**
   * Common city prefixes.
   */
  city_prefix: string[];

  /**
   * Common city suffixes.
   */
  city_suffix: string[];

  /**
   * The names of all countries.
   */
  country: string[];

  /**
   * The [ISO_3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) country codes.
   */
  country_code: Array<{ alpha2: string; alpha3: string }>;

  /**
   * The names of this country's states.
   */
  state: string[];

  /**
   * The abbreviated names of this country's states.
   */
  state_abbr: string[];

  /**
   * The names of counties inside the country or state.
   */
  county: string[];

  /**
   * The names of the compass directions.
   * First the 4 cardinal directions, then the 4 ordinal directions.
   */
  direction: string[];

  /**
   * The abbreviated names of the compass directions.
   * First the 4 cardinal directions, then the 4 ordinal directions.
   */
  direction_abbr: string[];

  /**
   * The pattern used to generate building numbers.
   */
  building_number: string[];

  /**
   * The patterns to generate street names.
   */
  street: string[];

  /**
   * The names of actual streets.
   */
  street_name: string[];

  /**
   * Common street prefixes.
   */
  street_prefix: string[];

  /**
   * Common street suffixes.
   */
  street_suffix: string[];

  /**
   * The pattern used to generate street addresses.
   */
  street_address: {
    /**
     * The fake pattern to generate only the street address.
     */
    normal: string;

    /**
     * The fake pattern to generate the full street address including the secondary address.
     */
    full: string;
  };

  /**
   * The address "inside" an address/e.g. an apartment or office.
   */
  secondary_address: string[];

  /**
   * A list of timezones names.
   */
  time_zone: string[];
}>;
