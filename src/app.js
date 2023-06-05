const { default: axios } = require("axios");

const add = (a = 0, b = 0) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 0;
    }
    return a + b;
};

class User {
    constructor(userName, viewRepos = false) {
        this.userName = userName;
        this.canViewRepos = viewRepos;
    }

    getUserID() {
        return axios.get(`https://api.github.com/users/${this.userName}`).then(response => response.data.id);
    }

    getUserRepo(repoIndex) {
        if (this.canViewRepos) {
            return axios.get(`https://api.github.com/users/${this.userName}/repos`).then(response => response.data[repoIndex]);
        }
        return Promise.reject('Cannot view repos');
    }
}

module.exports = {
    add, User
}
