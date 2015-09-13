System.register(['aurelia-framework', 'aurelia-logging-console'], function(exports_1) {
    var aurelia_framework_1, aurelia_logging_console_1;
    function configure(aurelia) {
        aurelia.use
            .defaultBindingLanguage()
            .defaultResources()
            .history()
            .router()
            .eventAggregator();
        aurelia.start().then(function (app) { return app.setRoot('app/home', document.body); });
    }
    exports_1("configure", configure);
    return {
        setters:[
            function (_aurelia_framework_1) {
                aurelia_framework_1 = _aurelia_framework_1;
            },
            function (_aurelia_logging_console_1) {
                aurelia_logging_console_1 = _aurelia_logging_console_1;
            }],
        execute: function() {
            aurelia_framework_1.LogManager.addAppender(new aurelia_logging_console_1.ConsoleAppender());
            aurelia_framework_1.LogManager.setLevel(aurelia_framework_1.LogManager.logLevel.debug);
        }
    }
});
