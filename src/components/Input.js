import React from 'react';
import enhance from './InputBoxWrapper';

function Input(props) {

    return (
        <input autoFocus
            type="text"
            className="form-control add-todo"
            placeholder="Add New"
        />
    );
}

export default enhance(Input);