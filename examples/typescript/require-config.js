require([
    "Example"
], function (
    example
    ) {
    var example = new example.default();
    example.init();

    // uncomment for stats

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