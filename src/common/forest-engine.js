angular.module('forest.engine', [])
    .service('ForestEngine', function () {
        var that = this,
            SAPLING_TO_TREE_AGE = 12,
            TREE_TO_ELDER_AGE = 120,
            _size = 0,
            Cell = function (x, y, type) {
                this.x = x;
                this.y = y;
                this.type = type;
                this.hash = x + ',' + y;
            },
            findOpenCell = function (type) {
                var tempX = _.random(_size),
                    tempY = _.random(_size);

                if (that.board[tempX + ',' + tempY] !== undefined) {
                    return findOpenCell(type);
                }
                return new Cell(tempX, tempY, type);
            };
        this.board = {};
        this.trees = [];
        this.lumberjacks = [];
        this.bears = [];
        this.age = 0;
        this.growTree = function (x, y, age) {
            var cell = new Cell(x, y, 'T');
            cell.age = age;
            this.board[cell.hash] = cell;
            this.trees.push(cell);
        };
        this.hireLumberjack = function () {
            var cell = findOpenCell('L');
            this.board[cell.hash] = cell;
            this.lumberjacks.push(cell);
        };
        this.discoverBear = function () {
            var cell = findOpenCell('B');
            this.board[cell.hash] = cell;
            this.bears.push(cell);
        };

        this.init = function (size) {
            var total = size * size,
                treeCount = Math.ceil(total / 2),
                lumberjackCount = Math.ceil(total / 10),
                bearCount = Math.ceil(total * 0.02),
                tempCell;
            _size = size;
            while (this.trees.length < treeCount) {
                tempCell = findOpenCell('T');
                this.growTree(tempCell.x, tempCell.y, SAPLING_TO_TREE_AGE);
            }
            while (this.lumberjacks.length < lumberjackCount) {
                this.hireLumberjack();
            }
            while (this.bears.length < bearCount) {
                this.discoverBear();
            }
            this.age = 0;
        };

    }
)
;


