require.config({
    baseUrl: "./",
    paths: {
        "core": ".build/core",
        "Test": "Test",
        "jquery": "lib/jquery/dist/jquery",
        "extensions": "lib/extensions/dist/extensions"
    },
    shim: {

    }
});

require([
    "core",
    "Test",
    "jquery",
    "extensions"
], function (core, Test, jquery) {
    window.$ = jquery;

    $(document).ready(function() {
        window.App = new Test.default();
        window.App.Setup();
    });
});