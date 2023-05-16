// styles
import './App.css';

// components
import LayoutWrapper from './components/layout/LayoutWrapper';
import Weather from './components/weather';

function App() {
  return (
    <div className="App">
      <LayoutWrapper>
        <Weather />
      </LayoutWrapper>
    </div>
  );
}

export default App;
