import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home';
import About from '../containers/About';
import Factions from '../containers/Factions';
import Houses from '../containers/Houses';
import Docs from '../containers/Docs';
import Layout from '../components/common/Layout';
import '../assets/styles/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/factions" element={<Factions />} />
          <Route exact path="/houses" element={<Houses />} />
          <Route exact path="/docs" element={<Docs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
