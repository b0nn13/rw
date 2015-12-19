/**
 * Created by JCG-003 on 14/12/2015.
 */
angular.module('rw',['ngMessages', 'toastr', 'ui.grid', 'ui.router'])
    .config(config);

function config($stateProvider, $urlRouterProvider) {

    var home = {
        url: '/',
        templateUrl: 'app/views/home/home.html'
    }

    var pessoa = {
        abstract: true,
        url: '/pessoa',
        template: '<ui-view/>'
    }

    var cadastroPessoa= {
        url: '/cadastro',
        templateUrl: 'app/views/pessoa/cadastro-pessoa.html'
    }

    var pesquisaPessoa= {
        url: '/pesquisa',
        templateUrl: 'app/views/pessoa/pesquisa-pessoa.html'
    }

    $stateProvider
        .state('home', home)
        .state('pessoa', pessoa)
        .state('pessoa.cadastro', cadastroPessoa)
        .state('pessoa.pesquisa', pesquisaPessoa);
}
