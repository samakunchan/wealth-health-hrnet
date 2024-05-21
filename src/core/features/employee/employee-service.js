import { ApiPath } from '../../utils/utils';

export class EmployeeService {
  async login({ email, password }) {}

  async fakeLogout() {}

  _fakeLogoutRequest() {
    return Promise.resolve({ ok: true, body: { message: `User disconnected` } });
  }

  _loginRequest({ email, password }) {
    return fetch(`${ApiPath.baseUrl}/api/v1/${ApiPath.endPointAuth}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  }
}
