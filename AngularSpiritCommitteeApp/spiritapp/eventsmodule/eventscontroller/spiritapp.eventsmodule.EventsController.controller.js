(function () {
    angular.module("EventsModule").controller("EventsController", EventsController);
    
    function EventsController() {
        var ec = this;
        ec.events = [];
        ec.addEvent = addEvent;

        function addEvent() {
            if (ec.eventName != undefined && ec.eventName.trim() != "") {
                ec.events.push({
                    eventName: ec.eventName,
                    previousStatus: {
                        statusName: "Future",
                        statusCode: "future"
                    },
                    currentStatus: {
                        statusName: "Brainstorming",
                        statusCode: "brainstorming"
                    },
                    nextStatus: {
                        statusName: "Logistics",
                        statusCode: "logistics"
                    },
                    startDate: new Date(),
                    endDate: undefined,
                    isCollapsed: true
                });
            }
            ec.eventName = "";
        }
    }
})();