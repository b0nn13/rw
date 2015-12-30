(function () {
    'use strict';

    angular.module('rwServices')
        .factory('RwService', RwService);


    function RwService (AlertService) {
        return function (restService) {
            var self = this;
            self.restService = restService;

            self.entidade = {};

            self.salvar = salvar;
            self.excluir = excluir;
            self.limpar = limpar;
            self.pesquisar = pesquisar;

            self.beforeSave = beforeSave;
            self.afterSave = afterSave;


            function salvar() {
                if (!beforeSave()) {
                    AlertService.showWarning('Erro beforSave');
                    return;
                }
                // chama REST
                afterSave();
            }

            function excluir() {
                // chama REST
                AlertService.showError('Excluir');
            }

            function limpar() {
                self.entidade = {};
                AlertService.showInfo('Limpou');
            }

            function pesquisar() {
                AlertService.showInfo('Pesquisou');
            }

            function beforeSave() {
                return true;
            }

            function afterSave() {
                AlertService.showSucess('Registro salvo com sucesso');
            }

        };
    }
})();