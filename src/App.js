// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import 'bootstrap/dist/css/bootstrap.min.css';
// import 'katex/dist/katex.min.css';
import { React, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { Header, Footer } from './components';
import { HomePage } from './pages';
import './App.css';

function Layout() {
    // const location = useLocation();

    // // Check if the current path starts with "/docs"
    // const showSidebar = location.pathname.startsWith('/docs');

    return (
        <div>
            {/* <Header /> */}
            <Container fluid className='home-page'>
                <Row>
                   <Routes>
                            <Route exact path="/" element={<HomePage />} />
                            {/* <Route path="/docs/intro" element={<DocsIntroPage />} />
                            <Route path="/docs/:word" element={<DocsSectionPage />} />
                            <Route path="/docs/:word1/:word2" element={<DocsTopicPage />} />
                            <Route path="/docs/:word1/:word2/:word3" element={<DocsArticlePage />} />
                            <Route path="/search" element={<SearchPage />} /> */}
                  </Routes>
                </Row>
            </Container>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Layout />
        </Router>
    );
}

export default App;