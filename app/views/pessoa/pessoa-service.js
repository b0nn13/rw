/**
 * Created by JCG-003 on 19/12/2015.
 */
(function () {
    'use strict';

    angular
        .module('rw')
        .service('PessoaService', PessoaService);


    /* @ngInject */
    function PessoaService() {
        var self = this;
        self.getNomePessoa = getNomePessoa;

        function getNomePessoa() {
            //chama back
        }
    }

})();

