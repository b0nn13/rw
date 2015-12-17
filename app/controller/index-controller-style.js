/**
 * Created by JCG-003 on 14/12/2015.
 */
angular.module('rw')
    .controller('IndexControllerStyle', IndexControllerStyle);

function IndexControllerStyle($scope){
    $scope.nome = '';
    $scope.myStyle = {};
    $scope.myClass = '';

    $scope.$watch('nome', function (newValue, oldValue){
        if (newValue === oldValue){
            return;
        } else if (newValue === 'Maria'){
            $scope.myClass = 'amarelo';
        } else {
            $scope.myClass = 'verde';
        }
    })

};