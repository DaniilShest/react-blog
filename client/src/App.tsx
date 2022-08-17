import { AppRouter } from "./components/AppRouter";
import { Header } from "./components/Header";
import "./styles/index.scss"


function App() {

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <div className="sidebar sidebar__left"></div>
        <div className="container">
          <AppRouter />
        </div>
        <div className="sidebar sidebar__right"></div>
      </div>
    </div>
  );
}

export default App;
