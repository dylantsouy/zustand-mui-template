import Cookies from 'js-cookie';

export const setCookie = (name, value) => {
    return Cookies.set(name, value);
};

export const getCookie = (name) => {
    return Cookies.get(name);
};

export const removeCookie = (name) => {
    return Cookies.remove(name);
};
