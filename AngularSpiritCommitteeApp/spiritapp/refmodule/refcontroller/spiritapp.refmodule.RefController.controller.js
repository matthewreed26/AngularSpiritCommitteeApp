(function () {
    angular.module("RefModule").controller("RefController", RefController);
    
    function RefController() {
        var rc = this;
        rc.statuses = ["Future"];
    }
})();