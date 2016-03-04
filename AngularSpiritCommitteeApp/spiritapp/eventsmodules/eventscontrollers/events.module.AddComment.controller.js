(function () {
    angular.module("EventsModule").controller("AddCommentController", AddCommentController);
    
    AddCommentController.$inject = ["$uibModalInstance"];

    function AddCommentController($uibModalInstance) {
        var acc = this;
        acc.add = add;
        acc.cancel = cancel;

        function add() {
            $uibModalInstance.close({
                commentText: acc.commentText,
                enteredDate: new Date(),
            });
        }

        function cancel() {
            $uibModalInstance.dismiss("cancel");
        }
    }
})();