/**
 * Created by JCG-003 on 22/12/2015.
 */
(function(){
    'use strict';

    angular.module('rw')
        .directive('rwCrud', rwCrud);

    function rwCrud(){
        return {
            transclude: true,
            restrict: 'E',
            templateUrl: 'arquitetura/directives/rw-crud/rw-crud.html',
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

