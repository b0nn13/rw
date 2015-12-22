(function(){
    'use strict';

    angular.module('rw')
        .directive('rwInputText', rwInputText);

    function rwInputText(){
        return {
            require:'^form',
            restrict:'E',
            templateUrl:'arquitetura/directives/rw-input-text/rw-input-text.html',
            scope:{
                label:'@',
                placeholder:'@',
                ngModel:'=',
                ngRequired:'=?',
                ngMaxlength:'@',
                ngMinlength:'@',
                colspan:'@'
            },
            link: link
        };

        function link(scope, element, attrs, formControll){
            scope.myForm = formControll;
            scope.myClass = 'col-sm-' + attrs.colspan;

            scope.inputName = scope.$id + 'inputText';

            if(!scope.ngRequired){
                scope.ngRequired = false;
            }

            iniciar();

            function iniciar(){

            }
        }
    }
})();

