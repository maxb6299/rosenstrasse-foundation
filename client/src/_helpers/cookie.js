export default {
  readCookie(name) {
    let cookie = document.cookie;

    let cookieStartIndex = cookie.indexOf(`${name}=`);
    if (cookieStartIndex === -1) {
      return;
    }
    let cookieEndIndex = cookie.indexOf(";", cookieStartIndex);
    if (cookieEndIndex === -1) {
      cookieEndIndex = cookie.length;
    }

    let cookieString = cookie.substring(cookieStartIndex + 9, cookieEndIndex);
    let parsedCookie;

    try {
      parsedCookie = JSON.parse(cookieString);
    } catch (error) {
      return null;
    }

    return parsedCookie;
  },

  deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  },
};
