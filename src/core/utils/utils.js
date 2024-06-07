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
