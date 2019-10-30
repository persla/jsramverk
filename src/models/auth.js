
// import React from 'react';
// import Login from '../Login.js';
const axios = require('axios');
var auth = {
    email: "",
    password: "",
    emailNew: "",
    passwordNew: "",
    token: "",
    errorMessage: "",

    // clear: function() {
    //     auth.email = "";
    //     auth.password = "";
    // },

    // login: function() {
    //     var payload = {
    //         email: auth.email,
    //         password: auth.password,
    //         api_key: "e2386b9513c75723e61b80bd23d427d1"
    //
    //     };
    //
    //     return request({
    //         url: "https://auth.emilfolino.se/login",
    //         method: "POST",
    //         data: payload
    //     }).then(function(result) {
    //         auth.token = result.data.token;
    //         route.set("/loadpage");
    //     }).catch(function(error) {
    //         var errorJSON = JSON.parse(error.message);
    //
    //         auth.errorMessage = errorJSON.errors.detail;
    //     });
    //
    // },

    registrer: async function(name, email, year, month, day, password) {
        // console.log(this.state.fullName.value);
        console.log(name);
        console.log(password);
        console.log(email);
        console.log(year);
        console.log(month);
        console.log(day);
        
        var payload = {
            name: name,
            email: email,
            year: year,
            month: month,
            day: day,
            password: password
        };

        let res = await axios.post('http://localhost:1337/register', payload);

        console.log(res.data);
    },

    login: async function(email, password) {
        // console.log(this.state.fullName.value);
        console.log(email);
        console.log(password);
        var payload = {
            email: email,
            password: password,
            api_key: "e2386b9513c75723e61b80bd23d427d1"
        };

        let res = await axios.post('http://localhost:1337/login', payload);

        console.log(res.data.data.token);
        auth.token = res.data.data.token;
        return auth.token
    },

};
export default auth;
