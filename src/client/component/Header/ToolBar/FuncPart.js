import React from 'react';
import { useSelector } from 'react-redux';

import FuncButton from './FuncButton';
import LangLists from './LangLists';
import { appbar } from '../../../../../assets/js/config/header';

const FuncPart = () => {
    const lang = useSelector(state => state.lang);

    return (
        appbar[lang].map((item) => (
            item.nav &&
            <FuncButton
                key={item.key}
                item={item}
            /> ||
            item.link &&
            <FuncButton
                key={item.key}
                item={item}
            /> ||
            item.lists &&
            <LangLists
                key={item.key}
                item={item}
            />
        ))
    );
}

export default FuncPart;