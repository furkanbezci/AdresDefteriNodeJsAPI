const config = require('config.json');
const jwt = require('jsonwebtoken');

const users = [
    {
        id: 1, username: 'piri', password: 'reis', name: 'Piri Reis'
        , phone: '5623213', email: '1@1.com', lat: 39.970148, long: 32.789022
    }
];

module.exports = {
    authenticate,
    getAll,
    updateProfile,
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) throw 'Kullanıcı Adı Şifre Yanlış';

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: 5 * 1000 });

    return {
        ...omitPassword(user),
        token
    };
}

async function getAll() {
    return users.map(u => omitPassword(u));
}

function updateProfile(model) {
    var index = users.map(s=>s.id).indexOf(model.id)
    console.log(index)
    users[index]=model;
    return users[index]
}

// helper functions

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}