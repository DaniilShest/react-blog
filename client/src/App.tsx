import { AppRouter } from "./components/AppRouter";
import { Header } from "./components/Header";
import "./App.css"


function App() {

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
