(function () {
    angular.module("RefModule").controller("RefDetailController", RefDetailController);

    RefDetailController.$inject = ["$routeParams"];
    
    function RefDetailController($routeParams) {
        var rdc = this;
        rdc.status = $routeParams.status;
        init();

        function init() {
            rdc.statusLink = getReferenceData();
        }

        function getReferenceData() {
            return "http://www.creativerealities.com/Portals/64975/images/future-city.jpg";
        }

        function display(response) {
            rdc.statusLink = response.data;
        }

        function displayError(response) {
            rdc.errorMessage = response.data;
        }
    }
})();