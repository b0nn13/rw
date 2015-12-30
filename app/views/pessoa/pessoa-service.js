(function () {
    'use strict';

    angular
        .module('rw')
        .service('PessoaService', PessoaService);


    /* @ngInject */
    function PessoaService(RwService, $http, $q) {
        var self = this;

        self.getRwService = getRwService;
        self.getListaPessoas = getListaPessoas;

        function getRwService() {
            var rws = new RwService('pessoaRest');
            return rws;
        }

        function getListaPessoas(param) {
            var deferred = $q.defer();

            if (1 === 2) {
                deferred.reject('Não pode mano, volta com erro!!!! Sai Dilma');
            }

            $http.get('http://jsonplaceholder.typicode.com/posts')
                .then(
                function (response) {
                    deferred.resolve(response);
                },
                function (rejection) {
                    deferred.reject(rejection);
                }
            );

            return deferred.promise;
        }
    }

})();
