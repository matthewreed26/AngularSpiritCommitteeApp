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
                    startDate: new Date(),
                    endDate: undefined,
                    isCollapsed: true
                });
            }
            ec.eventName = "";
        }
    }
})();