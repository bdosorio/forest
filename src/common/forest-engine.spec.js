describe('ForestEngine', function () {
    var ForestEngine;
    beforeEach(module('forest.engine'));
    beforeEach(inject(function (_ForestEngine_) {
        ForestEngine = _ForestEngine_;
    }));

    it('should have a list of trees', function () {
        expect(ForestEngine.trees).toBeDefined();
    });

    it('should have a list of lumberjacks', function () {
        expect(ForestEngine.lumberjacks).toBeDefined();
    });

    it('should have a list of bears', function () {
        expect(ForestEngine.bears).toBeDefined();
    });

    it('should have a map of unqiue active cells in the board', function () {
        expect(ForestEngine.board).toBeDefined();
    });

    describe('.init', function () {
        var size = 10;
        beforeEach(function () {
            ForestEngine.tress = [];
            ForestEngine.lumberjacks = [];
            ForestEngine.bears = [];
        });
        it('should exist', function () {
            expect(ForestEngine.init).toBeDefined();
        });
        it('should have an age of 0', function () {
            expect(ForestEngine.age).toEqual(0);
        });
        it('should create 10% lumberjacks', function () {
            ForestEngine.init(size);
            expect(ForestEngine.lumberjacks.length).toEqual(Math.ceil((size * size) / 10));
        });
        it('should create 50% trees', function () {
            ForestEngine.init(size);
            expect(ForestEngine.trees.length).toEqual(Math.ceil((size * size) / 2));
        });
        it('should create 2% bears', function () {
            ForestEngine.init(size);
            expect(ForestEngine.bears.length).toEqual(Math.ceil((size * size) * 0.02));
        });
        it('should fill the board with the data in the type lists', function () {
            ForestEngine.init(size);
            expect(_.size(ForestEngine.board)).toEqual(ForestEngine.bears.length + ForestEngine.lumberjacks.length + ForestEngine.trees.length);
        });
    });

    describe('.growTree', function () {
        beforeEach(function () {
            ForestEngine.trees = [];
        });
        it('should exist', function () {
            expect(ForestEngine.growTree).toBeDefined();
        });
        it('should initialize and return an objec with the parameters set', function () {
            ForestEngine.growTree(1, 1, 1);
            expect(ForestEngine.trees[0]).toEqual({x: 1, y: 1, age: 1, hash: '1,1', type: 'T'});
            expect(ForestEngine.board['1,1']).toEqual({x: 1, y: 1, age: 1, hash: '1,1', type: 'T'});
        });
    });
    describe('.hireLumberjack', function () {
        beforeEach(function () {
            ForestEngine.lumberjacks = [];
        });
        it('should exist', function () {
            expect(ForestEngine.hireLumberjack).toBeDefined();
        });
        it('should initialize a random lumberjack cell', function () {
            var boardCount = _.size(ForestEngine.board);
            ForestEngine.hireLumberjack();
            expect(ForestEngine.lumberjacks[0]).toBeDefined();
            expect(_.size(ForestEngine.board)).toBeGreaterThan(boardCount);
        });
    });
    describe('.discoverBear', function () {
        beforeEach(function () {
            ForestEngine.bears = [];
        });
        it('should exist', function () {
            expect(ForestEngine.discoverBear).toBeDefined();
        });
        it('should initialize a random bear cell', function () {
            var boardCount = _.size(ForestEngine.board);
            ForestEngine.discoverBear();
            expect(ForestEngine.bears[0]).toBeDefined();
            expect(_.size(ForestEngine.board)).toBeGreaterThan(boardCount);
        });
    });
});
