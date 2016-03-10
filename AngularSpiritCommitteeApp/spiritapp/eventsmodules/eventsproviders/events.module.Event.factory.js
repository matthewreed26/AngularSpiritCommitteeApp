(function (){
    angular.module("EventsModule").factory("Event", ["EventStatusProgression", function (EventStatusProgression) {
        return {
            init: function (eventID, eventName, currentStatusID, comments) {
                var initDate = new Date();
                return {
                    eventID: eventID,
                    eventName: eventName,
                    currentStatusID: currentStatusID,
                    currentStatusStartDate: initDate,
                    currentStatusEndDate: undefined,
                    currentStatusLastUpdated: initDate,
                    statusesProgression: EventStatusProgression.init(initDate, comments),
                    isCollapsed: true
                };
            }
        }
    }]);
})();