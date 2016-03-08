(function () {
    angular.module("EventsModule").controller("AddEventController", AddEventController);
    
    AddEventController.$inject = ["$uibModalInstance"];

    function AddEventController($uibModalInstance) {
        var aec = this;
        aec.add = add;
        aec.cancel = cancel;

        function add() {
            $uibModalInstance.close(aec.eventName);
        }

        function cancel() {
            $uibModalInstance.dismiss("cancel");
        }
    }
})();