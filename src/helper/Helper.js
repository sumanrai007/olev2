import React from "react";
import axios from "axios";
    export const doGet = (url) => (
        axios.get(url)
        .then(function (response) {
            // handle success
            return(response)
        })
        .catch(function(err) {
          console.log('Fetch Error :-S', err)
        })
    )
    export const doPost = (url, content) => (
        axios.post(url, content)
        .then(function (response) {
            // handle success
            return(response)
        })
        .catch(function(err) {
          console.log('Post Error :-S', err)
        })
    )