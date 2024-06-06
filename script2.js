function createCookies() {  
    var username = document.getElementById('username').value;  
    var password = document.getElementById('password').value;  
  
    // Create cookies  
    document.cookie = "username=" + encodeURIComponent(username) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  
    document.cookie = "password=" + encodeURIComponent(password) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";  
  
    // Alert the user that the cookies have been created (optional)  
    alert("Cookies 'username' and 'password' have been created.");  
}

function setLoginCookie() {  
    // Set the cookie with a one-year expiration date  
    var date = new Date();  
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000)); // 1 year  
    var expires = "; expires=" + date.toUTCString();  
    document.cookie = "login=yes" + expires + "; path=/";  
}  
  
// Call the function to set the cookie  
setLoginCookie();


function deleteCookies() {  
    // Deleting the 'username' cookie  
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";  
  
    // Deleting the 'password' cookie  
    document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";  
  
    // Deleting the 'login' cookie  
    document.cookie = "login=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";  
  
    alert("Cookies 'username', 'password', and 'login' have been deleted.");  
}