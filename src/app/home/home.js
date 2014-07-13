angular.module('forest.home', [
    'ui.router'
])

    .config(function config($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                "main": {
                    controller: 'HomeCtrl',
                    templateUrl: 'home/home.tpl.html'
                }
            },
            data: { pageTitle: 'Home' }
        });
    })

    .controller('HomeCtrl', function HomeController($scope) {
        function Game() {

        }

        $scope.game = new Game();

        $scope.settings = {
            boardHeight: 200,
            boardWidth: 200,
            drawRadius: 1,
            strokeWidth: 1
        };
    })

;

