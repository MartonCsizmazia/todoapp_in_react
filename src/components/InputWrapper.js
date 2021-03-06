import React from 'react';
import InputBox from './Input';
import Search from './Search';
import {MODE_SEARCH, MODE_CREATE} from './mode';

export default function InputWrapper(props) {
    const {mode, addNew, query, setSearchQuery} = props;

    switch (mode) {
        case MODE_CREATE:
            return <InputBox {...{addNew}}/>;

        case MODE_SEARCH:
            return <Search {...{query, setSearchQuery}}/>;

        default:
            return null;
    }
}
