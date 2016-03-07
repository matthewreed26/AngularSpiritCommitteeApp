(function () {
    angular.module("EventsModule").controller("AddEventController", AddEventController);
    
    AddEventController.$inject = ["$uibModalInstance", "currentEventID"];

    function AddEventController($uibModalInstance, currentEventID) {
        var aec = this;
        aec.add = add;
        aec.cancel = cancel;

        function add() {
            $uibModalInstance.close({
                eventID: currentEventID,
                eventName: aec.eventName,
                currentStatusID: 1,
                startDate: new Date(),
                endDate: undefined,
                comments: [],
                lastUpdated: new Date(),
                isCollapsed: true
            });
        }

        function cancel() {
            $uibModalInstance.dismiss("cancel");
        }
    }
})();