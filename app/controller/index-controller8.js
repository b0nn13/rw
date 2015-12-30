/**
 * Created by JCG-003 on 23/12/2015.
 */
/**
 * Created by JCG-003 on 19/12/2015.
 */
(function () {
    'use strict';

    angular
        .module('rw')
        .controller('IndexController8', IndexController8);

    /* @ngInject */
    function IndexController8(AlertService, PessoaService) {

        var vm = this;
        vm.gridOptions = {};
        vm.lista = [];
        vm.carregarDados = carregarDados;
        vm.limpar = limpar;

        iniciar();

        function iniciar() {
            vm.gridOptions.data = 'vm.lista';
        }

        function carregarDados() {
            PessoaService.getListaPessoas()
                .then(carregarDadosResult, carregarDadosFault);
        }

        function limpar() {
            vm.lista = [];
        }

        function carregarDadosResult(response) {
            vm.lista = response.data;
        }

        function carregarDadosFault(erro) {
            AlertService.showError('Erro:' + erro);
        }

    }

})();

