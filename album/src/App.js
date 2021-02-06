import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import NavBar from "./components/navbar";
import AlbumView from "./pages/albumView";
import AlbumList from "./pages/albumList";
import "./styles/global.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/albumlist" component={AlbumList}/>
          <Route path="/albums/:id" component={AlbumView}/>
          <Redirect from="/" to="/albumlist" /> 
          <Redirect from="." to="/albumlist" /> 
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
