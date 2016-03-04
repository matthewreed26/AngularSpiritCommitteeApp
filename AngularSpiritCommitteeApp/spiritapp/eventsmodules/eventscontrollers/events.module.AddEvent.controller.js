(function () {
    angular.module("EventsModule").controller("AddEventController", AddEventController);
    
    AddEventController.$inject = ["$uibModalInstance"];

    function AddEventController($uibModalInstance) {
        var aec = this;
        aec.add = add;
        aec.cancel = cancel;

        function add() {
            $uibModalInstance.close({
                eventName: aec.eventName,
                currentStatusID: 1,
                startDate: new Date(),
                endDate: undefined,
                lastUpdated: new Date(),
                isCollapsed: true
            });
        }

        function cancel() {
            $uibModalInstance.dismiss("cancel");
        }
    }
})();