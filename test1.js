gemini.suite('delete_city', function(suite) {
    suite.setUrl('/')
        .setCaptureElements('.container')
        .capture('delete_city', function (actions, find) {

            actions.click('.city-card__remove');
            actions.wait(2000);

        })

});