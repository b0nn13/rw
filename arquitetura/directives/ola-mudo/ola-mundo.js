/**
 * Created by JCG-003 on 21/12/2015.
 */
(function (){
    'use strcit';

    angular.module('rw')
        .directive('olaMundo', olaMundo);

    function olaMundo() {
        return {
            restrict: 'EA',
            template: '<h1>Olá mundo. Minha primeira diretiva</h1>'
        };
    }
})();