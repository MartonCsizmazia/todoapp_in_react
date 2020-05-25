import React, {Component} from 'react';
import TodoList from '../ui/TodoList';
import StateProvider from './StateProvider';
import KeyStrokeHandler from './KeyStrokeHandler';

class App extends Component {
    render() {
        return (
                    <TodoList/>
        );
    }
}

export default App;
