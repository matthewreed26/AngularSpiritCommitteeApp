angular.module("SpiritApp", ["ui.bootstrap", "ngRoute", "NavModule",
        "EventsModule", "RefModule"]).value("RefConstants", {
    statuses: [
            {
                statusName: "Future",
                statusCode: "future",
                canProgressBack: false
            },
            {
                statusName: "Brainstorming",
                statusCode: "brainstorming",
                canProgressBack: true
            },
            {
                statusName: "Logistics",
                statusCode: "logistics",
                canProgressBack: false
            },
            {
                statusName: "HR Final Approval",
                statusCode: "hRFinalApproval",
                canProgressBack: true
            },
            {
                statusName: "Preparation",
                statusCode: "preparation",
                canProgressBack: false
            },
            {
                statusName: "Publicizing",
                statusCode: "publicizing",
                canProgressBack: false
            },
            {
                statusName: "Execution",
                statusCode: "execution",
                canProgressBack: false
            },
            {
                statusName: "Completion",
                statusCode: "completion",
                canProgressBack: false
            }
    ]
});