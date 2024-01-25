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
    const token = this.getToken(); // Retrieve token from local storage
    // Check if there is a token and it's not expired, return `true`, otherwise return `false`
    return token && !this.isTokenExpired(token) ? true : false;
  };

  // Method to check if a token is expired
  isTokenExpired = token => {
    const decoded = decode(token);
    return decoded.exp < Date.now() / 1000;
  };

  // Method to get the token from secure storage
  getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('id_token');
      return token;
    } catch (error) {
      console.error('Error getting token from secure storage:', error);
    }
  };

  // Method to log in the user
  login = async idToken => {
    try {
      await AsyncStorage.setItem('id_token', idToken);
      // Navigate to the home screen using React Navigation or similar
      //TODO:
    } catch (error) {
      console.error('Error setting token in secure storage:', error);
    }
  };

  // Method to log out the user
  logout = async () => {
    try {
      await AsyncStorage.removeItem('id_token');
      // TODO: Navigate to the login screen
    } catch (error) {
      console.error('Error removing token from secure storage:', error);
    }
  };
}

// Export an instance of the AuthService class
export default new AuthService();
