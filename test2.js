gemini.suite('ignore_elements', function(suite) {
    suite.setUrl('/')
        .setCaptureElements('.container')
        .ignoreElements('.page__title')
        .capture('ignore_elements_title', function (actions, find) {

            actions.wait(2000);

        })

});