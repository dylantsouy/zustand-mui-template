import React from 'react';
import { us } from './us/us';
import { tw } from './tw/tw';
import { cn } from './cn/cn';

export const dictionaryList = { us, tw, cn };

export const languageOptions = {
    us: <span className='langOption'>EN</span>,
    tw: <span className='langOption'>繁中</span>,
    cn: <span className='langOption'>簡中</span>,
};
