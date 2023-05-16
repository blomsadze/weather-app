// styles
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

// components
import LayoutWrapper from './components/layout/LayoutWrapper';
import Weather from './components/weather';

// utils
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-left" autoClose={3000} />
      <LayoutWrapper>
        <Weather />
      </LayoutWrapper>
    </div>
  );
}

export default App;
