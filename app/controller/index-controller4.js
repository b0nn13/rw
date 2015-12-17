/**
 * Created by JCG-003 on 14/12/2015.
 */
angular.module('rw')
    .controller('IndexController4', IndexController4);

IndexController4.$inject = ['$scope', '$timeout', 'AlertService', '$filter'];

function IndexController4($scope, $timeout,AlertService, $filter) {

    $scope.listaDePessoas = [];
    $scope.entidade = {};

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;


    function salvar () {

        var dataStr = $filter('date')($scope.entidade.nascimento, 'dd/MM/yyyy');
        AlertService.showError(dataStr);


        if ($scope.myForm.$invalid) {
            AlertService.showWarning('Verifique os campos do formulario!');
            setTouched();
            return;
        }

        $scope.listaDePessoas.push($scope.entidade);
        limpar();
        AlertService.showInfo('Registro salvo com sucesso');
    }

    function limpar () {
        $scope.entidade = {};
        $timeout(function(){
            setUntouched();
        },100);

    }

    function excluir () {

    }

    function setTouched() {
        angular.forEach($scope.myForm.$error, function(error){
            angular.forEach(error, function(field){
                field.$setTouched();
            });
        });
    }

    function setUntouched() {
        angular.forEach($scope.myForm.$error, function(error){
            angular.forEach(error, function(field){
                field.$setUntouched();
            });
        });
    }

};