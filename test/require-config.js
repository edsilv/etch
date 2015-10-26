require.config({
    baseUrl: "./",
    paths: {
        "fletch": ".build/fletch",
        "Test": "Test",
        "jquery": "lib/jquery/dist/jquery",
        "extensions": "lib/extensions/dist/extensions"
    },
    shim: {

    }
});

require([
    "fletch",
    "Test",
    "jquery",
    "extensions"
], function (fletch, Test, jquery) {
    window.$ = jquery;

    $(document).ready(function() {
        window.App = new Test.default();
        window.App.Setup();
    });
});