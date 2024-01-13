import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { DarkModeProvider } from '../src/Utils/DarkModeContext';

// Use createRoot directly
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);
