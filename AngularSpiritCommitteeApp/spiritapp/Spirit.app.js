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
            }
    ]
});