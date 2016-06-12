require.config({
    baseUrl: "./",
    paths: {
        "etch": "js/etch.bundle",
        "Example": "Example",
        "stats": "stats.min"
    },
    shim: {

    }
});

require([
    "etch",
    "Example",
    "stats"
], function (etch, Example) {
    window.App = new Example.default();
    window.App.Setup();

    // $(function() {

    //     var stats = new Stats();
    //     stats.setMode(0); // 0: fps, 1: ms, 2: mb

    //     // align top-left
    //     stats.domElement.style.position = 'absolute';
    //     stats.domElement.style.left = '0px';
    //     stats.domElement.style.top = '0px';

    //     document.body.appendChild(stats.domElement);

    //     var statsLoop = function () {
    //         stats.begin();
    //         window.App.Tick();
    //         stats.end();
    //         requestAnimationFrame(statsLoop);
    //     };

    //     requestAnimationFrame(statsLoop);
    // });
});