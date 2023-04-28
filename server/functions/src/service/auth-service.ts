import {auth} from '../config/firebase';

class AuthService {
  auth = auth;

  async createUser(email: string, password: string) {
    const user = await this.auth.createUser({
      email,
      password,
    });
    return user;
  }
}

export default new AuthService();
