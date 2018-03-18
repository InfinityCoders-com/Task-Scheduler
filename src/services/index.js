import {CONFIG} from '../config/index';
import _ from 'lodash';
import 'whatwg-fetch';

export default function fireAjax (method, url, data, api) {
    let URL = CONFIG.api_url;
    let action = data.action;
    let token = '';
    let headers = {
        method: method,
        mode:   'no-cors',
        cache:  'no-cache',
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        body:   JSON.stringify(data)
    };


    return fetch(URL, headers).then((response) => {
        if (response.status === 500) {
            return new Promise((resolve, reject) => {
                response.json().then((data) => {
                    reject(data);
                });
            });
        } else if (response.status === 401) {
            alert('401 Access Denied !'+ action);
        } else {
            return response.json();
        }
    });
}
