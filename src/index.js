import ReactDOM from 'react-dom';
import { VisibleProvider } from './context/VisibleContext';
import App from './routes/App';

ReactDOM.render(
  <VisibleProvider>
    <App />
  </VisibleProvider>,
  document.getElementById('app'),
);
