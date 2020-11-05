import React from 'react';
import Media from 'react-media';

import Header from '../Header';
import MobileHeader from '../MobileHeader';

import './App.css';

function App() {
    return (
        <div className="outer">
            <div className="app-container">
                <Media query={{ maxWidth: 750 }}>
                    {matches =>
                        matches ? <MobileHeader /> : <Header />
                    }
                </Media>
            </div>
        </div>
    );
}

export default App;
