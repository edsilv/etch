var metadata = require('./package');

var GulpConfig = (function () {
    function GulpConfig() {
        this.name= metadata.name;
        // libs that MUST be included in a consuming app for this component to work
        this.deps = [
            'node_modules/extensions/dist/extensions.js',
            'node_modules/minerva/dist/minerva.min.js',
            'node_modules/nullstone/dist/nullstone.min.js'
        ];
        // libs that MAY be included in a consuming app but are used here for testing purposes
        this.examplesDeps = [
        ];
        this.examplesDir = './examples';
        this.examplesDepsDir = './examples/js';
        // ts definitions to copy to the typings dir
        this.typings = [
            'node_modules/extensions/dist/extensions.d.ts',
            'node_modules/minerva/dist/minerva.d.ts',
            'node_modules/nullstone/dist/nullstone.d.ts'
        ];
        this.typingsDir = './typings';
        this.dist = './dist';  
        this.header = '// ' + metadata.name + ' v' + metadata.version + ' ' + metadata.homepage + '\n';
        this.jsOut = this.name + '.js';
        this.jsMinOut = this.name + '.min.js';
        this.jsBundleOut = this.name + '.bundle.js';
        this.dtsOut = this.name + '.d.ts';
        this.dtsBundleOut = this.name + '.bundle.d.ts';
        this.tsSrc = [
            './src/*.ts',
            './src/**/*.ts',
            '!./lib/**/*.ts',
            './typings/*.ts'
        ];
        this.tsConfig = {
            sortOutput: true,
            module: 'amd',
            target: 'es5',
            declaration: true
        };
        this.examplesTSSrc = [
            './examples/*.ts',
            './examples/**/*.ts',
            './dist/*.d.ts',
            './typings/*.ts'
        ];
        this.examplesTSConfig = {
            sortOutput: true,
            module: 'amd',
            target: 'es5'
        };
    }
    return GulpConfig;
})();

module.exports = GulpConfig;