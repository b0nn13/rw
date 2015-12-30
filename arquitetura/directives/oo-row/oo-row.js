/**
 * Created by JCG-003 on 29/12/2015.
 */
(function () {
    'use strict';

    angular
        .module('ooit.arq')
        .directive('ooRow', ooRow);

    /* @ngInject */
    function ooRow() {
        var directive = {
            transclude: true,
            restrict: 'E',
            templateUrl: 'arquitetura/directives/oo-row/oo-row.html',
            link: link
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

})();

