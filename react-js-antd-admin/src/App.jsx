import Router from '@/router';

// components
import MotionLazy from './components/animate/MotionLazy';

function App() {
  return (
    <MotionLazy>
      <Router />
    </MotionLazy>
  );
}

export default App;
