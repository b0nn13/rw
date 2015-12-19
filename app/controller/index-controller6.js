/**
 * Created by JCG-003 on 19/12/2015.
 */
(function () {
    'use strict';

    angular
        .module('rw')
        .controller('IndexController6', IndexController6);

    IndexController6.$inject = ['AlertService'];

    /* @ngInject */
    function IndexController6(AlertService) {
        var vm = this;
        vm.title = 'IndexController6';

        activate();

        ////////////////

        function activate() {
            console.debug('IndexController6.activate'
        }
    }

})();

