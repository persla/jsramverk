
// import React from 'react';
// import Login from '../Login.js';
const axios = require('axios');

var reports = {
    allReports: [],
    allReports1: [],
    currentReports: [],
    password: "",
    emailNew: "",
    passwordNew: "",
    token: "",
    errorMessage: "",
    
    

    clear: function() {
        console.log( reports.allReports1);
    },

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

    addReport: async function(name, description, texten) {
        // console.log(this.state.fullName.value);
        console.log(name);
        console.log(description);
        var payload = {
            name: name,
            description: description,
            texten: texten
        };

        let res = await axios.post('http://localhost:1337/reports', payload);
        console.log(res.data);
        // console.log(res.data.data.user);
    },
    
    getReport: async function() {

//         axios.get('http://localhost:1337/reports')
//         .then((response) => {
//             return reports.allReports = response.data;
//     // console.log(response.status);
//     // console.log(response.statusText);
//     // console.log(response.headers);
//     // console.log(response.config);
//   });

    // axios.get('http://localhost:1337/reports')
    //     .then(function (response) {
    //        return reports.allReports  = response;
    //     })
    //     .catch(function (error) {
    //     //  resultElement.innerHTML = generateErrorHTMLOutput(error);
    //     });   

        // console.log(this.state.fullName.value);
        
        // var payload = {
        //     name: name,
        //     description: description,
        //     texten: texten
        // };

        // getUsers : async () => {
        //     let res = await axios.get("https://reqres.in/api/users?page=1");
        //     let { data } = res.data;
        //     this.setState({ users: data });
        // };

        let res = await axios.get('http://localhost:1337/reports');
        // console.log(res.data.data);
        // console.log(res.data.data.user);
        reports.currentReports = res.data.data;
        return reports.currentReports;

      
    },

    getReport1: async function (url) {
        let response = await fetch('http://localhost:1337/reports');
        let data = await response.json();
        reports.allReports1 = data;
        console.log(data);
        return data;
      },

    getUsers : async () => {
        let res = await axios.get("http://localhost:1337/reports");
        // reports.allReports = res.data;
        reports.allReports.push(res.data);
        // this.setState({ users: data });
        // console.log(res.data);
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

        console.log(res.data);
    },
    

};
export default reports;
