angular.module('rw')
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
        templateUrl: 'app/views/pessoa/cadastro-pessoa.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/views/pessoa/cadastro-pessoa-controller.js'
                ])
            }
        }
    }

    var pesquisaPessoa= {
        url: '/pesquisa',
        templateUrl: 'app/views/pessoa/pesquisa-pessoa.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/views/pessoa/pesquisa-pessoa-controller.js'
                ])
            }
        }
    }

    $stateProvider
        .state('home', home)
        .state('pessoa', pessoa)
        .state('pessoa.cadastro', cadastroPessoa)
        .state('pessoa.pesquisa', pesquisaPessoa);

    $urlRouterProvider.otherwise("/");
}