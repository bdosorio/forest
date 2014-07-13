/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe('home section', function () {
    var $scope, HomeCtrl;

    beforeEach(module('forest.home'));



    beforeEach(inject(function ($controller, $rootScope) {
        $scope = $rootScope.$new();
        HomeCtrl = $controller('HomeCtrl', { $scope: $scope });
    }));

    it('should have a game object on the scope', function(){
        expect($scope).toBeDefined();
        expect($scope.game).toBeDefined();
    });
});

