// To do >>>>> add a file in apis folder root apiSetup.js
// to detect REACT_APP_ENV if local, (use js method, window.location.hostname)
// then get the url from local, else get the url from the real url

import axios from 'axios';
import localforage from 'localforage';

export const urlDeterminator = () => {
    let env = process.env.REACT_APP_ENV;
    let endpoint = `REACT_APP_API_${env.toUpperCase()}_URL`;

    return process.env[endpoint];
};

export const apiUrl = urlDeterminator();

export const fetcher = async (url, method = 'GET', data = {}) => {
    const token = await localforage.getItem('token');

    const result = await axios({
        method,
        url: `${apiUrl}${url}`,
        data,
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
    });

    if (result.status !== 200) {
        const error = {
            ...new Error('Some error is happened'),
            info: result.data.message,
            status: result.status,
        };
        throw error;
    }

    const { resultData } = result;

    return { data: resultData };
};
