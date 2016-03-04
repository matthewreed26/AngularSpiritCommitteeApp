(function () {
    angular.module("NavModule").controller("NavController", NavController);

    function NavController() {
        var nc = this;
        nc.isCollapsed = true;
        nc.links = [
            {
                url: "#/events", text: "Events"
            },
            {
                url: "#/reference", text: "Reference"
            }
        ];
    }
})();