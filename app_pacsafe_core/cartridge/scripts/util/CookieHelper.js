'use strict';
var System = require('dw/system');
var Cookie = require('dw/web/Cookie');
var Resource = require('dw/web/Resource');
var cookieForPopupHomePage = {
    key: Resource.msg('homepage.key.popup', 'content', null),
    value: ''
}

var CheckHomePopup = function() {
    var isCookie = true;
    var cookieHomePopup = request.httpCookies[cookieForPopupHomePage.key];
    if (cookieHomePopup != null) {
        isCookie = false;
    } else {
        AddCookie(cookieForPopupHomePage);
    }
    return isCookie;
}

function AddCookie(myObj) {
    var maxAge = parseInt(System.Site.getCurrent().getCustomPreferenceValue('homePageMaxAgeCookie'));
    var createCookie = new Cookie(myObj.key, myObj.value);	
    createCookie.setMaxAge(maxAge);
    response.addHttpCookie(createCookie);
}

module.exports.CheckHomePopup = CheckHomePopup;