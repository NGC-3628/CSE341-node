const homeRoute = (req, rest) => {
    res.send('This home in the controllers part');
};

const profileRoute = (req, rest) => {
    res.send('Profile');
};

const loginRoute = (req, res) => {
    res.send('Hello World, This is login router');
};

module.exports = {
    loginRoute,
    profileRoute,
    homeRoute
};

