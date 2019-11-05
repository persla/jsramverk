
// import React from 'react';
// import Login from '../Login.js';
const axios = require('axios');

var reports = {
    allReports: [],
    allReports1: [],
    currentReports: [],
    token: "",
    errorMessage: "",

    addReport: async function(name, description, texten) {
        // console.log(this.state.fullName.value);
        // console.log(name);
        // console.log(description);
        var payload = {
            name: name,
            description: description,
            texten: texten
        };

        let res = await axios.post('https://me-api.teachmeapp.me/reports', payload);
        console.log(res.data);
        // console.log(res.data.data.user);
    },

    revReport: async function(name, description, texten, id) {
        var payload = {
            name: name,
            description: description,
            texten: texten,
            id: id
        };

        let res = await axios.put('https://me-api.teachmeapp.me/reports', payload);
        console.log(res.data);
        // console.log(res.data.data.user);
    },

    getReport: async function() {
        let res = await axios.get('https://me-api.teachmeapp.me/reports');
        console.log(res.data);
        reports.currentReports = res.data.data;
        return reports.currentReports;
    },

    // getReport1: async function (url) {
    //     let response = await fetch('http://localhost:1337/reports');
    //     let data = await response.json();
    //     reports.allReports1 = data;
    //     console.log(data);
    //     return data;
    //   },
    //
    // getUsers : async () => {
    //     let res = await axios.get("http://localhost:1337/reports");
    //     // reports.allReports = res.data;
    //     reports.allReports.push(res.data);
    //     // this.setState({ users: data });
    //     // console.log(res.data);
    // },
    //
    // login: async function(email, password) {
    //     // console.log(this.state.fullName.value);
    //     console.log(email);
    //     console.log(password);
    //     var payload = {
    //         email: email,
    //         password: password,
    //         api_key: "e2386b9513c75723e61b80bd23d427d1"
    //     };
    //
    //     let res = await axios.post('http://localhost:1337/login', payload);
    //
    //     console.log(res.data);
    // },


};
export default reports;
