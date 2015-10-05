require.config({
    baseUrl: "./",
    paths: {
        "Test": "Test",
        "jquery": "lib/jquery/dist/jquery"
    },
    shim: {

    }
});

require([
    "Test",
    "jquery"
], function (Test, jquery) {
    window.$ = jquery;

    $(document).ready(function() {
        window.App = new Test.default();
        window.App.Setup();
    });
});