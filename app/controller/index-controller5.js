/**
 * Created by JCG-003 on 14/12/2015.
 */
angular.module('rw')
    .controller('IndexController5', IndexController5);

IndexController5.$inject = ['$scope', '$timeout', 'AlertService', '$filter'];

function IndexController5($scope, $timeout, AlertService, $filter) {

    $scope.gridOptions = {};

    $scope.listaDePessoas = [
        {nome: 'FABIO DE OLIVEIRA XAVIER', nascimento: new Date(), sexo: 'MASCULINO', cor: 'green'},
        {nome: 'KARINA DE OLIVEIRA XAVIER', nascimento: new Date(), sexo: 'FEMININO', cor: 'pink'}
    ];
    $scope.entidade = {};

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;

    $scope.gridItemClick = gridItemClick;
    $scope.getRowStyle = getRowStyle;


    iniciar();

    function iniciar() {
        $scope.gridOptions.data = 'listaDePessoas';
        $scope.gridOptions.rowTemplate = 'app/templates/row-template.html';
        $scope.gridOptions.columnDefs = [
            { displayName : 'Nome', field : 'nome', cellTemplate: 'app/templates/cell-template.html' },
            { displayName : 'Data de Nascimento', field: 'nascimento', cellTemplate: 'app/templates/cell-template.html' },
            { displayName : 'Sexo', field : 'sexo', cellTemplate: 'app/templates/cell-template.html' },
            { displayName: 'Excluir', field: 'excluir', cellTemplate:'app/templates/cell-template-delete.html'}
        ];
    }


    function salvar () {

        var dataStr = $filter('date')($scope.entidade.nascimento, 'dd/MM/yyyy');


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

    function excluir (index) {
        $scope.listaDePessoas.splice(index,1);

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

    function gridItemClick(linhaSelecionada, indexCol, indexRow) {
        AlertService.showInfo('Nome:' + linhaSelecionada.nome + ' Index Col: ' + indexCol + ' Index Row: ' + indexRow);
    }


    function getRowStyle(linhaSelecionada) {
        var myStyle = {};
        myStyle.backgroundColor = linhaSelecionada.cor;
        return myStyle;
    }

};