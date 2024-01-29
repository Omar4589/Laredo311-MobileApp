import AsyncStorage from '@react-native-async-storage/async-storage';
// Import the decode function from the "jwt-decode" library
import decode from 'jwt-decode';

// Define a class named AuthService to manage authentication-related functionality
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

  // Method to check if a token is expired
  isTokenExpired = async token => {
    // First, check if the token is not null or undefined
    if (!token) {
      return true;
    }
    try {
      // Proceed with decoding if the token exists
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

  // Method to get the token from secure storage
  getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('id_token');

      return token || null;
    } catch (error) {
      return null;
    }
  };

  // Method to log in the user
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

  // Method to log out the user
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

// Export an instance of the AuthService class
export default new AuthService();
