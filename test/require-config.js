require.config({
    baseUrl: "./",
    paths: {
        "etch": ".build/etch",
        "Test": "Test",
        "jquery": "lib/jquery/dist/jquery",
        "extensions": "lib/extensions/dist/extensions",
        "stats": "stats.min"
    },
    shim: {

    }
});

require([
    "etch",
    "Test",
    "jquery",
    "extensions",
    "stats"
], function (etch, Test, jquery) {
    window.$ = jquery;

    window.App = new Test.default();
    window.App.Setup();

    $(function() {

        var stats = new Stats();
        stats.setMode(0); // 0: fps, 1: ms, 2: mb

        // align top-left
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';

        document.body.appendChild(stats.domElement);

        var update = function () {

            stats.begin();

            window.App.Tick();

            stats.end();

            requestAnimationFrame(update);

        };

        requestAnimationFrame(update);
    });
});