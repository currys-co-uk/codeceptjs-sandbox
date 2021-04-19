Feature('Dixons homework');

Scenario('Register new user', ({I}) => {
    I.amOnPage('/index.php?controller=authentication&back=my-account')
    // Your code goes here
    I.wait(5)
});
