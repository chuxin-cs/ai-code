import { createRoot } from 'react-dom/client';
import App from './App.tsx';

console.log('import.meta.env===>', import.meta.env.VITE_MODES);
createRoot(document.getElementById('root')!).render(<App />);
