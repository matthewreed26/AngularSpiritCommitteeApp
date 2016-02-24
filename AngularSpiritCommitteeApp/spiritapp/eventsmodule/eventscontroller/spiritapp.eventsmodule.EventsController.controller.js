(function () {
    angular.module("EventsModule").controller("EventsController", EventsController);
    
    function EventsController() {
        var ec = this;
        ec.events = [
            {
                title: "Title1"
            },
            {
                title: "Title2"
            }
        ];
    }
})();