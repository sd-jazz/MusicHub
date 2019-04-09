const axios = require('axios')

const listing = {

}

describe('integration test', () => {
    describe('Get user data by listing', () => {
        it('Should return user data based on listing ID', () => {
            
        })
    })

    describe('get all user data',  () => {
        it('should return all user data in db', () => {
            axios.get(`/api/user_data`)
        })
    })
})