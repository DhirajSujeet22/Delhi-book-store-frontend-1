class TokenHelper {
  constructor() {
    this.key = "dbs-cookie";
  }

  // Helper function to get a cookie by name
  get = () => {
    const cookieString = document.cookie;
    const cookies = cookieString.split("; ");
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      if (name === this.key) {
        return decodeURIComponent(value);
      }
    }
    return null;
  };

  // Create or set a cookie with optional expiration in days
  create = (value, days = 7) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${this.key}=${encodeURIComponent(
      value
    )};expires=${expires.toUTCString()};path=/`;
  };

  // Delete a cookie by setting its expiration date in the past
  delete = () => {
    document.cookie = `${this.key}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  };
}

export default new TokenHelper();
