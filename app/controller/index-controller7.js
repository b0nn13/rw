/**
 * Created by JCG-003 on 19/12/2015.
 */
(function () {
    'use strict';

    angular
        .module('rw')
        .controller('IndexController7', IndexController7);

    /* @ngInject */
    function IndexController7(AlertService, PessoaService) {

        var vm = this;

        vm.rwService = PessoaService.getRwService();

        vm.pressEnter = pressEnter;

        function pressEnter () {
            AlertService.showInfo('Enter pressionado');
        }
    }

})();

