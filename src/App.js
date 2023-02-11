
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import Staff from './layouts/Staff';

import SSS from './layouts/SSS';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Navi />
      <Staff />
      <SSS />

    </div>
  );
}

export default App;
