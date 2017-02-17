var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "36507",
        "ok": "13014",
        "ko": "23493"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59276",
        "ok": "59276",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3834",
        "ok": "10756",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "11326",
        "ok": "16893",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "573",
        "ko": "0"
    },
    "percentiles2": {
        "total": "104",
        "ok": "19418",
        "ko": "0"
    },
    "percentiles3": {
        "total": "32654",
        "ok": "51790",
        "ko": "0"
    },
    "percentiles4": {
        "total": "54703",
        "ok": "57844",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 6753,
        "percentage": 18
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 504,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5757,
        "percentage": 16
    },
    "group4": {
        "name": "failed",
        "count": 23493,
        "percentage": 64
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "414.852",
        "ok": "147.886",
        "ko": "266.966"
    }
},
contents: {
"req_request-0-684d2": {
        type: "REQUEST",
        name: "request_0",
path: "request_0",
pathFormatted: "req_request-0-684d2",
stats: {
    "name": "request_0",
    "numberOfRequests": {
        "total": "30000",
        "ok": "6507",
        "ko": "23493"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "26",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59276",
        "ok": "59276",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "4541",
        "ok": "20934",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "12372",
        "ok": "19039",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "19420",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "34148",
        "ko": "0"
    },
    "percentiles3": {
        "total": "34437",
        "ok": "55236",
        "ko": "0"
    },
    "percentiles4": {
        "total": "55313",
        "ok": "58097",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1850,
        "percentage": 6
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 59,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4598,
        "percentage": 15
    },
    "group4": {
        "name": "failed",
        "count": 23493,
        "percentage": 78
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "340.909",
        "ok": "73.943",
        "ko": "266.966"
    }
}
    },"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "6507",
        "ok": "6507",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6385",
        "ok": "6385",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "578",
        "ok": "578",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1037",
        "ok": "1037",
        "ko": "-"
    },
    "percentiles1": {
        "total": "42",
        "ok": "42",
        "ko": "-"
    },
    "percentiles2": {
        "total": "756",
        "ok": "756",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3251",
        "ok": "3251",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4351",
        "ok": "4351",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4903,
        "percentage": 75
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 445,
        "percentage": 7
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1159,
        "percentage": 18
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "73.943",
        "ok": "73.943",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
