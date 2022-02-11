import React from 'react';

const TabLink = (props) => {
    return <a href={props.to} target='_blank' >{props.children}</a>
}

export default TabLink;