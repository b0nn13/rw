(function(){
    'use strict';

    /**
     * @ngdoc directive
     * @name ooDirectives.directive:ooInputText
     * @element oo-input-text
     * @scope
     * @restrict E
     *
     * @description
     * Componente de input-text padrão da arquitetura ooits.
     * Este input já possuí as mensagens de validação (ng-messages)
     * internamente conforme arquivo 'arquitetura/directives/messages/messages-default.html'
     *
     * @param {string} label Texto a ser exibido na parte superior input
     * @param {string} placeholder Texto a ser exibido dentro do input
     * @param {object} ngModel ngModel do input
     * @param {boolean} ngRequired informa se o input é obrigatório
     * @param {number} ngMaxlength informa o tamanho máximo do input
     * @param {number} ngMinlength informa o tamanho mínimo do input
     * @param {number} colspan informa quantas colunas o input irá utilizar
     *
     */
    angular.module('ooit.arq')
        .directive('ooInputText', ooInputText);

    function ooInputText(){
        return {
            require:'^form',
            restrict:'E',
            templateUrl:'arquitetura/directives/oo-input-text/oo-input-text.html',
            scope:{
                id:'@',
                label:'@',
                placeholder:'@',
                ngModel:'=',
                ngRequired:'=?',
                ngMaxlength:'@',
                ngMinlength:'@',
                colspan:'@',
                ooMessageTemplate: '@'
            },
            link: link
        };

        function link(scope, element, attrs, formControll){
            scope.myForm = formControll;
            scope.myClass = 'col-sm-' + attrs.colspan;

            if (!scope.id) {
                scope.inputName = scope.$id + 'inputText';

            } else {
                scope.inputName = scope.id;
            }


            if (!scope.ooMessageTemplate || ooMessageTemplate.length ==0) {
                scope.ooMessageTemplate = 'arquitetura/directives/messages/messages-default.html';
            }

            if(!scope.ngRequired){
                scope.ngRequired = false;
            }
        }
    }
})();

