/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe('home section', function () {
    var $scope, HomeCtrl, ForestEngine;

    beforeEach(module('forest.home'));


    beforeEach(inject(function ($controller, $rootScope, _ForestEngine_) {
        $scope = $rootScope.$new();
        ForestEngine = _ForestEngine_;
        HomeCtrl = $controller('HomeCtrl', { $scope: $scope, ForestEngine: ForestEngine});
    }));

    it('should have a forest object on the scope', function () {
        expect($scope).toBeDefined();
        expect($scope.forest).toBeDefined();
    });

    it('should have a settings object on the scope', function () {
        expect($scope.settings).toBeDefined();
    });

    it('should have the drawing settings in the settings object', function () {
        expect($scope.settings.boardWidth).toBeDefined();
        expect($scope.settings.cellWidth).toBeDefined();
    });

    it('should have a method to call the engine\'s init function', function () {
        spyOn(ForestEngine, 'init');
        $scope.init();
        expect(ForestEngine.init).toHaveBeenCalled();
    });

    it('should have a method to calculate the color for a tree\'s age', function () {
        expect($scope.getAgeColor).toBeDefined();
        expect($scope.getAgeColor(0)).toEqual(255);
        expect($scope.getAgeColor(12)).toEqual(120);
        expect($scope.getAgeColor(240)).toEqual(60);
    });
});

