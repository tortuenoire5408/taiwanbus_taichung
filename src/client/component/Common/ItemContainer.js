import React from 'react';
import { Link } from 'react-router-dom';

import TabLink from './TabLink';

export const ImmutableItemContainer = (props) => {
    const { $$item } = props;
    if($$item && $$item.get('link'))
        return <TabLink to={$$item.get('link')} target='_blank' children={props.children} />;
    else if($$item && $$item.get('nav'))
        return <Link to={$$item.get('nav')} children={props.children} />;
    else if($$item && $$item.get('lists'))
        return <>{props.children}</>;
    else return <>{props.children}</>;
}

const ItemContainer = (props) => {
    const { item } = props;
    if(item && item.link)
        return <TabLink to={item.link} target='_blank' children={props.children} />;
    else if(item && item.nav)
        return <Link to={item.nav} children={props.children} />;
    else if(item && item.lists)
        return <>{props.children}</>;
    else return <>{props.children}</>;
}

export default ItemContainer;
