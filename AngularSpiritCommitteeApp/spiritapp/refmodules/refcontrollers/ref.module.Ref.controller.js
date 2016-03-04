(function () {
    angular.module("RefModule").controller("RefController", RefController);

    RefController.$inject = ["RefConstants"];
    
    function RefController(RefConstants) {
        var rc = this;
        rc.refStatuses = RefConstants.statuses;
    }
})();