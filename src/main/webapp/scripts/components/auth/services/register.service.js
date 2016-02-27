'use strict';

angular.module('pushsafeApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


