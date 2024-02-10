'use strict';

/**  
* fetch data from server
* @param {*} url API Url [required]
* @param {*} successCallback success Callback [required]
* @param {*} errorCallback error Callback [optional]
*/


export async function fetchData(url, successCallback, errorCallback){

    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        successCallback(data);
    }

    else{
        const error = await response.json();
        errorCallback && errorCallback(error);
    }
}