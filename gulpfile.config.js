var metadata = require('./package');

var GulpConfig = (function () {
    function GulpConfig() {
        this.dist = './dist';
        this.header = '// ' + metadata.name + ' v' + metadata.version + ' ' + metadata.homepage + '\n';
        this.jsOut = 'fletch.js';
        this.dtsOut = 'fletch.d.ts';
        this.build = './.build';
    }
    return GulpConfig;
})();

module.exports = GulpConfig;