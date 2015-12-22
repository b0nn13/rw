/**
 * Created by JCG-003 on 22/12/2015.
 */
(function () {
    'use strict';
    angular.module('rw')
        .directive('rwEnter', rwEnter);


    function rwEnter(KeyCode){
        return {
            restrict: 'A',
            link: link
        };

        function link(scope, element, attrs){
            element.bind('keydown', onKeydown);

            function onKeydown (event) {
                var code = event.keycode || event.which;

                if (code === KeyCode.ENTER) {
                    scope.$eval(attrs.rwEnter);
                }
            }
        }
    }

})();