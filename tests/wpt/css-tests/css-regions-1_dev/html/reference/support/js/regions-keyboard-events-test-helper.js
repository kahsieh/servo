// Timeout is 10 seconds for manual testing, 1.5 seconds for automated testing
var testTimeout = 10000;
if (window.testRunner) {
    testTimeout = 1500;
}
setup({timeout: testTimeout});

// This block is executed if running in WebKit's harness
    if (window.testRunner)
{
    testRunner.dumpAsText(false);
}

// Verify that CSS Regions are enabled in the browser.
// Divs will be horizontal if Regions are enabled.
// Divs will be vertical if Regions are not enabled.
function getLeftPosition(elemID) {
    return document.getElementById(elemID).getBoundingClientRect().left;
}

function keyDown(block) {
    if(window.testRunner) {
        var input = document.getElementById(block);
        input.focus();
        eventSender.keyDown('a');
    }
}

function pressDeleteKey(block) {
    if(window.testRunner) {
        var input = document.getElementById(block);
        input.focus();
        eventSender.keyDown('delete');
    }
}

function tabKeyPresses(numOfTabs) {
    if(window.testRunner) {
        for (i=1; i<=numOfTabs; i++) {
             eventSender.keyDown('\t');
        }
    }
}

function completionCallback () {
    add_completion_callback(function (allRes, status) {
        if(status.status === 0){
            //Update the message stating that tests are complete
            var msg = document.getElementById("msg");
            msg.innerHTML += "<p id='msg-complete'>Tests are complete. All results in the Details section below should PASS.</p>";
        }
    });
}