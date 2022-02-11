import React from 'react';
import { useSelector } from 'react-redux';

import NavButton from './NavButton';
import NavLists from './NavLists';

import { navbar } from '../../../../../assets/js/config/header';

const NavPart = () => {
    const lang = useSelector(state => state.lang);

    return (
        navbar[lang].map((item) => (
            item.nav &&
            <NavButton
                key={item.key}
                item={item}
            /> ||
            item.lists &&
            <NavLists
                key={item.key}
                item={item}
            />
        ))
    );
}

export default NavPart;