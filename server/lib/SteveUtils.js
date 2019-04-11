const axios = require('axios')

module.exports = {

    // function1(a, b) {
    //     return a + b
    // },

    sortByPriceDesc (arr) {
          let priceDesc = arr.sort((a, b) => (b - a))
          return priceDesc
      },
    
      fireSortFunctions (str, arr) {
        if(str === "PHL"){
            return this.sortByPriceDesc(arr)
        }
      },

    // getInternetData() {
    //     return axios.get('https://swapi.co/api/people').then(res => {
    //         return res.data.results
    //     })
    // }
}