import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const StoreContext = React.createContext({});
export default function Store(props) {
    const { children } = props;
    const [sidebarShow, setSidebarShow] = useState('open');

    const toggleSidebar = async (e) => {
        localStorage.setItem('sidebarShow', JSON.stringify(e));
        setSidebarShow(e);
    };
    const getLocalData = async () => {
        let data = JSON.parse(localStorage.getItem('sidebarShow'));
        if (data) {
            setSidebarShow(data);
        }
    };
    useEffect(() => {
        getLocalData();
    }, []);

    return <StoreContext.Provider value={{ sidebarShow, toggleSidebar }}>{children}</StoreContext.Provider>;
}

Store.propTypes = {
    children: PropTypes.element,
};
