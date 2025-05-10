const profileRoute = (req, rest) => {
    res.send('Profile');
};

const loginRoute = (req, res) => {
    res.send('Hello World, This is login router');
};

module.exports = {
    loginRoute,
    profileRoute
};

