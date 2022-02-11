import React from 'react';

const textHandler = (htmlString) => {
    // htmlString.split('\n');
    const _array = htmlString.split('\n').filter((e) => (e)); // split to string array & remove empty string
    return _array
}

const imgHandler = (htmlString, tagName) => {
    const parser = new DOMParser();
    const Doc = parser.parseFromString(htmlString, 'text/html');

    const _attrs = Doc.getElementsByTagName(tagName)[0].attributes; // get NamedNodeMap attributes
    const propsArray = Array.from(_attrs, ({ name, value }) => ([name, value])) // mapping to props array

    const props = Object.fromEntries(propsArray); //transforms a list of key-value pairs into an object

    return [React.createElement(tagName, props)];
}

const parseDOMHandler = (htmlString) => {
    if(htmlString.match(/img\b|\bsrc/)) return imgHandler(htmlString, 'img');
    else return textHandler(htmlString)
};

export default parseDOMHandler;