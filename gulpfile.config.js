var metadata = require('./package');

var GulpConfig = (function () {
    function GulpConfig() {
        this.name= metadata.name;
        this.header = '// ' + metadata.name + ' v' + metadata.version + ' ' + metadata.homepage + '\n';
        this.dependencies = {
            // libs that MUST be included in a consuming app for this component to work
            libs: [         
                'node_modules/extensions/dist/extensions.js',
                'node_modules/minerva/dist/minerva.min.js',
                'node_modules/nullstone/dist/nullstone.min.js'
            ],
            // libs that MAY be included in a consuming app but are used here for example purposes
            examples: [     

            ],
            // ts definitions to copy to the typings dir
            typings: [      
                'node_modules/extensions/dist/extensions.d.ts',
                'node_modules/minerva/dist/minerva.d.ts',
                'node_modules/nullstone/dist/nullstone.d.ts'
            ]
        };
        this.fileNames = {
            jsOut: this.name + '.js',
            jsMinOut: this.name + '.min.js',
            jsBundleOut: this.name + '.bundle.js',
            dtsOut: this.name + '.d.ts',
            dtsBundleOut: this.name + '.bundle.d.ts'
        };
        this.directories = {
            dist: './dist',
            examples: './examples',
            examplesJs: './examples/js',
            typings: './typings'
        };
        this.typescript = {
            src: [
                './src/*.ts',
                './src/**/*.ts',
                '!./lib/**/*.ts',
                './typings/*.ts'
            ],
            config: {
                sortOutput: true,
                module: 'amd',
                target: 'es5',
                declaration: true
            },
            examples: {
                src: [
                    './examples/*.ts',
                    './examples/**/*.ts',
                    './dist/*.d.ts',
                    './typings/*.ts'
                ],
                config: {
                    sortOutput: true,
                    module: 'amd',
                    target: 'es5'
                }
            }
        }
    }
    return GulpConfig;
})();

module.exports = GulpConfig;