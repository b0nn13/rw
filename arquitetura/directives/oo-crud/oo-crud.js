/**
 * Created by JCG-003 on 22/12/2015.
 */
(function(){
    'use strict';

    angular.module('ooit.arq')
        .directive('ooCrud', ooCrud);

    function ooCrud(){
        return {
            transclude: true,
            restrict: 'E',
            templateUrl: 'arquitetura/directives/oo-crud/oo-crud.html',
            scope: {
                titulo: '@',
                service: '='
            },
            link: link
        };

        function link(scope, element, attrs){

        }
    }
})();

