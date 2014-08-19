var testrunner = require("qunit");

function onTest (err, report ){
    if (err) {
        console.warn(err);
        console.warn(err.stack);
        process.exit(1);
    } else {
        //console.dir(report);
    }
}

testrunner.run(
    {
        code: "lib/Spec.js",
        tests: "test/01_Spec.js"
    }
, onTest);

testrunner.run(
{
    code: "lib/Model.js",
    deps: [
        "lib/Spec.js",
        "lib/Host.js",
        "lib/Set.js",
        "lib/Storage.js"
    ],
    tests: "test/02_EventRelay.js"
}, onTest);

testrunner.run(
{
    code: "lib/Text.js",
    deps: [
        "lib/Spec.js",
        "lib/Host.js",
        "lib/Storage.js"
    ],
    tests: "test/04_Text.js"
}, onTest);

testrunner.run(
{
    code: "lib/Pipe.js",
    deps: [
        "lib/Spec.js",
        "lib/Host.js",
        "lib/Set.js",
        "lib/Storage.js",
        "lib/AsyncLoopbackConnection.js"
    ],
    tests: "test/03_OnOff.js"
}, onTest);

testrunner.run(
{
    code: "lib/Host.js",
    deps: [
        "lib/Spec.js",
        "lib/Set.js",
        "lib/Storage.js",
        "lib/Pipe.js",
        "lib/Model.js"
    ],
    tests: "test/06_Handshakes.js"
}, onTest);