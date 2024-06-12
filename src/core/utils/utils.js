export const basicErrorMessage = 'Une érreur non définis est survenue.';

export class RouteName {
  /**
   * /wealth-health-hrnet ou rien
   * @type {string|string}
   */
  static prefix = process.env.REACT_APP_ENV === 'gh-pages' ? `/wealth-health-hrnet` : ``;

  /**
   * /
   * @type {string}
   */
  static home = '/';

  /**
   * /list/employee
   * @type {string}
   */
  static listEmployee = '/list/employee';

  /**
   * /error
   * @type {string}
   */
  static error = '/error';
}

export class ApiPath {
  /**
   * Ex: http:localhost:3002
   * @type {string}
   */
  static baseUrl = process.env.REACT_APP_API_URL;

  /**
   * Ex: employee/login
   * @type {string}
   */
  static endPointAuth = 'employee/login';

  /**
   * Ex: employee/profile
   * @type {string}
   */
  static endPointProfile = 'employee/profile';
}

export class Theme {
  /**
   * color: #085835
   * @type {string}
   */
  static primary = '#085835';

  /**
   * color: #12002b
   * @type {string}
   */
  static secondary = '#12002b';

  /**
   * Change la couleur du thème
   * @param newColor
   */
  static changeThemeColor(newColor) {
    const metaTag = document.querySelector('meta[name="theme-color"]');
    if (metaTag) {
      metaTag.content = newColor;
    }
  }
}

export class DateFormat {
  static enFormat = 'dd/mm/yyyy';
  static frFormat = 'dd/mm/yyyy';
}

const oldSort = (a, b) => (a.name > b.name ? 1 : -1);
// const oldReverseSort = (a, b) => (b.name > a.name ? 1 : -1);

// const newSort = (a, b) => `${a.name}`.localeCompare(`${b.name}`);

export class MenuDropdown {
  /**
   * Liste des états
   * type {Array}
   */
  static states = [
    {
      name: 'Alabama',
      abbreviation: 'AL',
    },
    {
      name: 'Alaska',
      abbreviation: 'AK',
    },
    {
      name: 'American Samoa',
      abbreviation: 'AS',
    },
    {
      name: 'Arizona',
      abbreviation: 'AZ',
    },
    {
      name: 'Arkansas',
      abbreviation: 'AR',
    },
    {
      name: 'California',
      abbreviation: 'CA',
    },
    {
      name: 'Colorado',
      abbreviation: 'CO',
    },
    {
      name: 'Connecticut',
      abbreviation: 'CT',
    },
    {
      name: 'Delaware',
      abbreviation: 'DE',
    },
    {
      name: 'District Of Columbia',
      abbreviation: 'DC',
    },
    {
      name: 'Federated States Of Micronesia',
      abbreviation: 'FM',
    },
    {
      name: 'Florida',
      abbreviation: 'FL',
    },
    {
      name: 'Georgia',
      abbreviation: 'GA',
    },
    {
      name: 'Guam',
      abbreviation: 'GU',
    },
    {
      name: 'Hawaii',
      abbreviation: 'HI',
    },
    {
      name: 'Idaho',
      abbreviation: 'ID',
    },
    {
      name: 'Illinois',
      abbreviation: 'IL',
    },
    {
      name: 'Indiana',
      abbreviation: 'IN',
    },
    {
      name: 'Iowa',
      abbreviation: 'IA',
    },
    {
      name: 'Kansas',
      abbreviation: 'KS',
    },
    {
      name: 'Kentucky',
      abbreviation: 'KY',
    },
    {
      name: 'Louisiana',
      abbreviation: 'LA',
    },
    {
      name: 'Maine',
      abbreviation: 'ME',
    },
    {
      name: 'Marshall Islands',
      abbreviation: 'MH',
    },
    {
      name: 'Maryland',
      abbreviation: 'MD',
    },
    {
      name: 'Massachusetts',
      abbreviation: 'MA',
    },
    {
      name: 'Michigan',
      abbreviation: 'MI',
    },
    {
      name: 'Minnesota',
      abbreviation: 'MN',
    },
    {
      name: 'Mississippi',
      abbreviation: 'MS',
    },
    {
      name: 'Missouri',
      abbreviation: 'MO',
    },
    {
      name: 'Montana',
      abbreviation: 'MT',
    },
    {
      name: 'Nebraska',
      abbreviation: 'NE',
    },
    {
      name: 'Nevada',
      abbreviation: 'NV',
    },
    {
      name: 'New Hampshire',
      abbreviation: 'NH',
    },
    {
      name: 'New Jersey',
      abbreviation: 'NJ',
    },
    {
      name: 'New Mexico',
      abbreviation: 'NM',
    },
    {
      name: 'New York',
      abbreviation: 'NY',
    },
    {
      name: 'North Carolina',
      abbreviation: 'NC',
    },
    {
      name: 'North Dakota',
      abbreviation: 'ND',
    },
    {
      name: 'Northern Mariana Islands',
      abbreviation: 'MP',
    },
    {
      name: 'Ohio',
      abbreviation: 'OH',
    },
    {
      name: 'Oklahoma',
      abbreviation: 'OK',
    },
    {
      name: 'Oregon',
      abbreviation: 'OR',
    },
    {
      name: 'Palau',
      abbreviation: 'PW',
    },
    {
      name: 'Pennsylvania',
      abbreviation: 'PA',
    },
    {
      name: 'Puerto Rico',
      abbreviation: 'PR',
    },
    {
      name: 'Rhode Island',
      abbreviation: 'RI',
    },
    {
      name: 'South Carolina',
      abbreviation: 'SC',
    },
    {
      name: 'South Dakota',
      abbreviation: 'SD',
    },
    {
      name: 'Tennessee',
      abbreviation: 'TN',
    },
    {
      name: 'Texas',
      abbreviation: 'TX',
    },
    {
      name: 'Utah',
      abbreviation: 'UT',
    },
    {
      name: 'Vermont',
      abbreviation: 'VT',
    },
    {
      name: 'Virgin Islands',
      abbreviation: 'VI',
    },
    {
      name: 'Virginia',
      abbreviation: 'VA',
    },
    {
      name: 'Washington',
      abbreviation: 'WA',
    },
    {
      name: 'West Virginia',
      abbreviation: 'WV',
    },
    {
      name: 'Wisconsin',
      abbreviation: 'WI',
    },
    {
      name: 'Wyoming',
      abbreviation: 'WY',
    },
  ].sort(oldSort);

  /**
   * Liste des départements
   * @type {string[]}
   */
  static departments = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'];

  static firstState() {
    return MenuDropdown.states.find((_, index) => index === 0);
  }
}

export class LibrarySort {
  static oldSortString = (a, b) => (a.name > b.name ? 1 : -1);
  // static newSortString = (a, b) => `${a.name}`.localeCompare(`${b.name}`);

  static sortNumber = (a, b) => a - b;
  static sortAsc = 'asc';
  static sortDesc = 'desc';
  static noSort = 'noSort';
}
