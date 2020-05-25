import React from 'react';
import Header from './Header';

export default function TodoList(props) {
    const {mode, query} = props.data;
    const {addNew,setSearchQuery} = props.actions;
    return (
        <div className="container">
            <div className="row">
                <Header {...{addNew, mode, query, setSearchQuery}}/>
            </div>
        </div>
    );
}
