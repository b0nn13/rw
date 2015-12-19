/**
 * Created by JCG-003 on 19/12/2015.
 */
(function () {
    'use strict';

    angular
        .module('rw')
        .controller('PesquisaPessoaController', PesquisaPessoaController);


    /* @ngInject */
    function PesquisaPessoaController() {
        var vm = this;
        vm.nome = 'Fabio Pesquisa';

        activate();

        function activate() {
        }
    }

})();

