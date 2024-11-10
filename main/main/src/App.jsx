import  { Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Header from './components/Header/Header';

const Flap = lazy(() => import('../../../FlipFlaap/FLAP/src/App'));
const Age = lazy(() => import('../../../age/AGE/src/App'));
const Xo = lazy(() => import('../../../xo/xo/src/App'));
function App() {
  

  return (
    <Router>
      <Header />
     
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<h1>Welcome to the Main Project</h1>} />
          <Route path="/flap" element={<Flap/>} />
          <Route path="/age" element={<Age />} />
          <Route path="/xo" element={<Xo />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

