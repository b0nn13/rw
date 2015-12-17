/**
 * Created by JCG-003 on 14/12/2015.
 */
angular.module('rw')
    .controller('IndexController', IndexController);

function IndexController($scope){
    $scope.nome =  'Fabão';

    $scope.onClickTest = onClickTest;

    function onClickTest() {
        $scope.nome = 'FABÃO ALTEROU TUDO';
    }
};