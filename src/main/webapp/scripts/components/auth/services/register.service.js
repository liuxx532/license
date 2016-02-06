'use strict';

angular.module('licenseApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


