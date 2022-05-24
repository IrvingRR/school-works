import Router from './components/Router';
import {SessionProvider} from './context/SessionContext';

function App() {
  return (
    <div className="App">
      <SessionProvider>
        <Router/>
      </SessionProvider>
    </div>
  );
}

export default App;
