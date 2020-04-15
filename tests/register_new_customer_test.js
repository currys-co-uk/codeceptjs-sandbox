Feature('login');

Scenario('test something', (I) => {
    I.amOnPage('/index.php?controller=authentication&back=my-account')
});
