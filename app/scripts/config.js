(function () {
    'use strict';

    var app = angular.module('main');

    // Configure Toastr
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';

    var events = {
        controllerActivateSuccess: 'controller.activateSuccess'
    };

    var config = {
        appErrorPrefix: '[Elvira Error] ', //Configure the exceptionHandler decorator
        docTitle: 'Elvira: ',
        events: events,
        version: '0.0.1'
    };

    app.value('config', config);
    
    app.config(['$logProvider', function ($logProvider) {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
    }]);

    //#region Configure the common services via commonConfig
    app.config(['commonConfigProvider', function (cfg) {
        cfg.config.controllerActivateSuccessEvent = config.events.controllerActivateSuccess;
    }]);
    //#endregion
})();