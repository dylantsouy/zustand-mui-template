import React, { useContext } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { LanguageContext } from '../../langs/LanguageContext';
import { languageOptions } from '../../langs/index';
import './styles.scss';
import { Public } from '@mui/icons-material';

const LangSelect = () => {
    const { userLanguage, userLanguageChange } = useContext(LanguageContext);

    const handleLangChange = (event) => {
        userLanguageChange(event.target.value);
    };

    const renderLangMenu = (
        <>
            <Select
                className='lang-select'
                defaultValue={userLanguage}
                value={userLanguage}
                onChange={handleLangChange}
                MenuProps={{ disableScrollLock: true }}
            >
                {Object.entries(languageOptions).map(([id, name]) => (
                    <MenuItem key={id} value={id} name={id}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
            <Public color='gray' />
        </>
    );
    return <div className='langSelect-wrapper'>{renderLangMenu}</div>;
};

export default LangSelect;
