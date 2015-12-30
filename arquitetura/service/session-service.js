/**
 * Created by JCG-003 on 23/12/2015.
 */
(function () {
    'use strict';

    angular.module('rwServices')
        .service('SessionService', SessionService);

    /* @ngInject */
    function SessionService(localStorageService) {

        this.get = get;
        this.set = set;

        function get(key) {
            return localStorageService.get(key);
        }

        function set(key, value) {
            localStorageService.set(key, value);
        }
    }
})();