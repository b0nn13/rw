/**
 * Created by JCG-003 on 19/12/2015.
 */
(function () {
    'use strict';

    angular
        .module('rw')
        .controller('CadastroPessoaController', CadastroPessoaController);

    /* @ngInject */
    function CadastroPessoaController() {
        var vm = this;
        vm.nome = 'Fabio';

        activate();


        function activate() {

        }
    }

})();

