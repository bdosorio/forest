angular.module('forest.home', [
    'ui.router', 'forest.engine'
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

    .controller('HomeCtrl', function HomeController($scope, ForestEngine) {

        $scope.forest = ForestEngine;
        $scope.init = function () {
            $scope.forest.init($scope.settings.boardWidth);
        };
        $scope.settings = {
            boardWidth: 10,
            cellWidth: 20
        };
        $scope.getAgeColor = function (age) {
            var SAPLING_AGE = 12, ELDER_AGE = 120;
            if (age < SAPLING_AGE) {
                return 255;
            }
            if (age < ELDER_AGE) {
                return 120;
            }
            return 60;
        };
    })

;

