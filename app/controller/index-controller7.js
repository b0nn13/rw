/**
 * Created by JCG-003 on 19/12/2015.
 */
(function () {
    'use strict';

    angular
        .module('rw')
        .controller('IndexController7', IndexController7);

    /* @ngInject */
    function IndexController7(AlertService, PessoaService, SessionService) {

        var vm = this;

        vm.rwService = PessoaService.getRwService();

        vm.pressEnter = pressEnter;

        function pressEnter () {
            SessionService.set('valor', 'testeValoe');
            AlertService.showInfo('Enter pressionado');
            AlertService.showSucess('Session Storage:' + SessionService.get('valor'));

        }
    }

})();

