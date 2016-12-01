'use strict';
var System = require('dw/system');
var Cookie = require('dw/web/Cookie');
var StringUtils = require('dw/util/StringUtils');
var second = 20
var obj = {
	key : 'HomePopup',
	value: ''
}

exports.init = {
	CheckHomePopup : function(){
		var isCookie = true;
		var cookieHomePopup = request.httpCookies[obj.key];
		if(cookieHomePopup != null){
			isCookie = false;
		}else{
			AddCookie(obj);
		}
		return isCookie;
	}
};

function AddCookie(myobj){
	var maxAge = parseInt(System.Site.getCurrent().getCustomPreferenceValue('maxAgeCookie'));
	var createCookie = new Cookie(myobj.key, myobj.value);	
	createCookie.setMaxAge(maxAge);
	response.addHttpCookie(createCookie);
}