import "./styles/global.css";
import NavBar from "./components/navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AlbumView from "./pages/albumView";
import AlbumList from "./pages/albumList";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Router>
        <Switch>
          <Route path="/albumlist" component={AlbumList} />
          <Route path="/albums/:id" component={AlbumView} />
          <Redirect from="/" to="/albumlist" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
