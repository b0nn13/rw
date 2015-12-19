(function () {
    'use strict';

    angular
        .module('rw')
        .service('PessoaService', PessoaService);


    /* @ngInject */
    function PessoaService() {
        var self = this;

        self.getNomePessoa = getNomePessoa();

        function getNomePessoa() {
            // CHAMA BACK ENDE
        }
    }

})();
