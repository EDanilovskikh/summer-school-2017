gemini.suite('first_page', function(suite) {
    suite.setUrl('/')
        .setCaptureElements('.container')
        .capture('main_form_1', function (actions, find) {

            actions.wait(2000);

        })


});