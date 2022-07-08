import React from 'react';
import { HashRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
    return (
        <>
            <HashRouter>
                <Routes />
            </HashRouter>
            <GlobalStyle />
        </>
    );
}

export default App;
