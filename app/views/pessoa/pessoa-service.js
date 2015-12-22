(function () {
    'use strict';

    angular
        .module('rw')
        .service('PessoaService', PessoaService);


    /* @ngInject */
    function PessoaService(RwService) {
        var self = this;

        self.getRwService = getRwService;

        function getRwService() {
            var rws = new RwService('pessoaRest');
            return rws;
        }
    }

})();
