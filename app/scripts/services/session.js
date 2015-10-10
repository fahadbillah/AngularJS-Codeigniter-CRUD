'use strict';

/**
 * @ngdoc service
 * @name ngciApp.session
 * @description
 * # session
 * Service in the ngciApp.
 */
 angular.module('ngciApp')
 .service('session', function () {
 	this.create = function (user) {
 		this.user = user;
 	};
 	this.destroy = function () {
 		this.user = null;
 	};
 	return this;
 });
