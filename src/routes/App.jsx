import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home';
import About from '../containers/About';
import Factions from '../containers/Factions';
import Houses from '../containers/Houses';
import Docs from '../containers/Docs';
import Layout from '../components/common/Layout';
import '../assets/styles/main.scss';
import NotFound from '../containers/NotFound';
import GetAll from '../components/GetAll';
import GetSingle from '../components/GetSingle';
import DocsSchema from '../components/DocsSchema';

function App() {
  return (
    // <BrowserRouter basename="/Dune">
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/factions" element={<Factions />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/docs" element={<Docs />}>
            <Route path="schema" element={<DocsSchema />} />
            <Route path="getAll" element={<GetAll />} />
            <Route path="getSingle" element={<GetSingle />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    // </BrowserRouter>
  );
}

export default App;
