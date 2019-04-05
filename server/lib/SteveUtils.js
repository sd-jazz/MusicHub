const axios = require('axios')

module.exports = {

    function1(a, b) {
        return a + b
    },

    function2() {
        return 'Sean is the greatest'
    },

    func3(str, cb) {
        cb(str)
    },

    getInternetData() {
        return axios.get('https://swapi.co/api/people').then(res => {
            return res.data.results
        })
    }
}