function createCookie(cookieName, cookieValue, cookieExpirationMinutes) {
    var cookieExpiration = new Date();
    cookieExpiration.setTime(cookieExpiration.getTime() + (cookieExpirationMinutes * 60 * 1000));
    
    var expires = "expires="+ cookieExpiration.toUTCString();

    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function destroyCookie(cookieName) {
    var cookieExpiration = new Date(null);
    cookieExpiration.setTime(cookieExpiration.getTime());

    var expires = "expires="+ cookieExpiration.toUTCString();

    document.cookie = cookieName + "=;" + expires + ";path=/";
}

function readCookies() {
    return document.cookie;
}