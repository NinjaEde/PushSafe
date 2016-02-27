 'use strict';

angular.module('pushsafeApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-pushsafeApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-pushsafeApp-params')});
                }
                return response;
            }
        };
    });
