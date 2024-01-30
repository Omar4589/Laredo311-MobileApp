import AsyncStorage from '@react-native-async-storage/async-storage';
import decode from 'jwt-decode';

class AuthService {
  // Method to get user profile information from the JWT token
  getProfile = async () => {
    const token = await this.getToken();
    return token ? decode(token) : null;
  };

  // Method to check if a user is logged in
  loggedIn = async () => {
    try {
      const token = await this.getToken();
      if (!token) {
        return {
          success: false,
          message: 'An unexpected error occured. Error code: 956',
        };
      }
      const isExpired = await this.isTokenExpired(token);
      return {
        success: !isExpired, //returns false
        message: isExpired
          ? 'An unexpected error occured. Error code: 956.'
          : '',
      };
    } catch (e) {
      return {
        success: false,
        message: 'An unexpected error occured. Error code: 956',
      };
    }
  };

  isTokenExpired = async token => {
    // First, check if the token is not null or undefined
    if (!token) {
      return true;
    }
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        await AsyncStorage.removeItem('id_token');
        return true; // Token is expired
      }
      return false; // Token is not expired
    } catch (e) {
      return true;
    }
  };

  getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('id_token');

      return token || null;
    } catch (error) {
      return null;
    }
  };

  login = async idToken => {
    try {
      await AsyncStorage.setItem('id_token', idToken);
      return {success: true, message: ''};
    } catch (error) {
      return {
        success: false,
        message: 'An unexpected error occured. Error code: 1492.',
      };
    }
  };

  logout = async () => {
    try {
      await AsyncStorage.removeItem('id_token');
      return {success: true, message: ''};
    } catch (error) {
      return {
        success: false,
        message: 'An unexpected error occured. Error code: 1776.',
      };
    }
  };
}

export default new AuthService();
