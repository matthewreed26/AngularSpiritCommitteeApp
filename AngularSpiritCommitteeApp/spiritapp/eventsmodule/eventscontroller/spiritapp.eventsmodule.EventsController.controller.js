(function () {
    angular.module("EventsModule").controller("EventsController", EventsController);
    
    EventsController.$inject = ["RefConstants"];

    function EventsController(RefConstants) {
        var ec = this;
        ec.refStatuses = RefConstants.statuses;
        ec.events = [];
        ec.addEvent = addEvent;

        function addEvent() {
            if (ec.eventName != undefined && ec.eventName.trim() != "") {
                ec.events.push({
                    eventName: ec.eventName,
                    currentStatusID: 1,
                    startDate: new Date(),
                    endDate: undefined,
                    isCollapsed: true
                });
            }
            ec.eventName = "";
        }
    }
})();