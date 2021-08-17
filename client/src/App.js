import "./App.css";
import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Switch, Route, Redirect } from "react-router";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/create'>
          <main>Hello Create</main>
        </Route>
        <Route exact path='/overview'>
          <main>Hello Overview</main>
        </Route>
        <Route exact path='/darkmode'>
          <main>Hello Darkmode</main>
        </Route>
        <Route exact path='/account'>
          <main>Hello Account</main>
        </Route>
        <Route exact path='/imprint'>
          <main>Hello Imprint</main>
        </Route>
        <Route exact path='/login'>
          <main>Hello Login</main>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/*'>
          <Redirect to='/' />
        </Route>
      </Switch>
      <BottomNav />
    </>
  );
}
