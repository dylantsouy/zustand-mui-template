import React, { useContext } from 'react';
import './styles.scss';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { StoreContext } from '../../contexts/StoreContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../../langs/useTranslation';
import HasPermission from '../../auths/HasPermission';

export default function Sidebar() {
    const { t } = useTranslation('common');
    const { sidebarShow } = useContext(StoreContext);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const listItems = [
        {
            listIcon: <Home />,
            listText: t('dashboard'),
            path: 'dashboard',
        },
    ];

    const goHandler = (path) => {
        navigate(path);
    };

    return (
        <div className={`sidebar-wrapper ${sidebarShow === 'close' ? 'hidden' : ''}`}>
            <div className='title' onClick={() => goHandler('/dashboard')}>
                <h1>Logo</h1>
                <span>v1.0.0</span>
            </div>
            <div className='logo'>Logo</div>
            <Box className='menuSliderContainer' component='div'>
                <List>
                    {listItems.map((e) => (
                        <HasPermission key={e.path} permission={e.path}>
                            <ListItem
                                className={`listItem ${`/${e.path}` === pathname && 'active'}`}
                                button
                                onClick={() => goHandler(`/${e.path}`)}
                            >
                                <ListItemIcon className='listItemIcon'>{e.listIcon}</ListItemIcon>
                                <ListItemText primary={e.listText} />
                            </ListItem>
                        </HasPermission>
                    ))}
                </List>
            </Box>
        </div>
    );
}
