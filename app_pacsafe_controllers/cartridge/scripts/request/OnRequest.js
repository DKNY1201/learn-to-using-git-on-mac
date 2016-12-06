'use strict';

/**
 * The onRequest hook is called with every top-level request in a site. This happens both for requests to cached and non-cached pages.
 * For performance reasons the hook function should be kept short.
 *
 * @module  request/OnRequest
 */

var Status = require('dw/system/Status');

/**
 * Gets age of current user
 * @return {Number}
 */
function getAgeOfLoggedInUser() {
    var userAge = -1;

    let profile = customer.profile;
    let birthday = profile.getBirthday();

    if (!empty(birthday)) {
        let TimeHelper = require('app_pacsafe_core/cartridge/scripts/util/TimeHelper');
        userAge = TimeHelper.getAge(birthday);
    }

    return userAge;
}

/**
 * The onRequest hook function.
 */
exports.onRequest = function() {
    if (customer.authenticated) {
        session.custom.userAge = getAgeOfLoggedInUser();
    } else {
        delete session.custom.userAge;
    }
    return new Status(Status.OK);
};