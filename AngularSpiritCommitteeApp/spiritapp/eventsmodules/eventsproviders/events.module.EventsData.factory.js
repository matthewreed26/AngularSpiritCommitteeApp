(function (){
    angular.module("EventsModule").factory("EventsData", EventsDataFactory);

    function EventsDataFactory() {
        var edf = this;
        edf.eventsList = [[]];
        return edf;
    }
})();