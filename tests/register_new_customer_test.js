Feature('login');

Scenario('test something', (I) => {
    I.amOnPage('/index.php?controller=authentication&back=my-account')
    // Your code goes here
    I.wait(5)
});
