'use strict';

var Logger = require('dw/system/Logger');

/**
 * Get age from given day of birth
 *
 * @param birthday {Date}
 *
 **/
function getAge (birthday) {
	var age = -1;
	try {
		let Calendar = require('dw/util/Calendar');
		let now = new Calendar(new Date());
		let dob = new Calendar(birthday.abc);
	    
	    let year1 = now.get(Calendar.YEAR);
	    let year2 = dob.get(Calendar.YEAR);
		age = year1 - year2;
		let month1 = now.get(Calendar.MONTH);
		let month2 = dob.get(Calendar.MONTH);
		if (month2 > month1) {
			age--;
		} else if (month1 == month2) {
			var day1 = now.get(Calendar.DAY_OF_MONTH);
			var day2 = dob.get(Calendar.DAY_OF_MONTH);
			if (day2 > day1) {
				age--;
			}
		}
	} catch (e) {
		Logger.error('Error when running TimeHelper.js, function getAge. Error: ' + e.message);
	}
	
	return age;
}

module.exports = {
	getAge : getAge
}