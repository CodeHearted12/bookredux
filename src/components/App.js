import React, {Component} from 'react';
import '../styles/App.css';

import BookList from '../container/BookList';
import BookDetail from '../container/BookDetail';

class App extends Component {
    render() {
        return (
            <div className="row">
                <h1>Some of the Best books ever!</h1>
                <BookList/>
                <BookDetail/>
            </div>
        );
    }
}
export default App;
