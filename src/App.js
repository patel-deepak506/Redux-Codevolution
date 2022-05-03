import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer'
import NewCakeContainer from './components/newCakeContainer';
import ItemContainer from './components/ItemContainer'
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store = { store }>
      <div className="App">
        <UserContainer />
        
        <CakeContainer />
        <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
      </Provider>
  );
}

export default App;
