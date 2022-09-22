import { Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { AuthContext } from '../../auths/Auth';
import LangSelect from '../LangSelect';
import './styles.scss';
import PropTypes from 'prop-types';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import { StoreContext } from '../../contexts/StoreContext';
import { Logout } from '@mui/icons-material';
export default function Header(props) {
    const { login } = props;
    const { logout } = useContext(AuthContext);
    const { sidebarShow, toggleSidebar } = useContext(StoreContext);

    const logoutHandler = (e) => {
        e.preventDefault();
        logout();
    };

    return login ? (
        <div className='header-wrapper'>
            <div className='container'>
                <h1 className='title'>Logo</h1>
            </div>
            <div className='buttonWrapper'>
                <LangSelect />
            </div>
        </div>
    ) : (
        <div className={`header-wrapper`}>
            <div className='header-left'>
                <div className='header-bar'>
                    {sidebarShow === 'close' ? (
                        <FormatIndentIncreaseIcon onClick={() => toggleSidebar('open')} />
                    ) : (
                        <FormatIndentDecreaseIcon onClick={() => toggleSidebar('close')} />
                    )}
                </div>
            </div>
            <div className='header-right'>
                <Tooltip placement='bottom' title={'登出'}>
                    <Logout className='logout-btn' color='gray' onClick={logoutHandler} />
                </Tooltip>

                <LangSelect />
            </div>
        </div>
    );
}

Header.propTypes = {
    login: PropTypes.bool,
};
