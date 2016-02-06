 'use strict';

angular.module('licenseApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-licenseApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-licenseApp-params')});
                }
                return response;
            }
        };
    });
