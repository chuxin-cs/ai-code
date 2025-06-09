import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
// plugins
import 'virtual:svg-icons-register'
// components
import App from './App.jsx';
import ProgressBar from './components/ProgressBar';
// i18n
import './locales/i18n';
// css
import './styles/index.css';
import "./theme/theme.css";

const root = createRoot(document.getElementById('root'));
root.render(
  <Suspense>
    <ProgressBar />
    <App />
  </Suspense>
);
