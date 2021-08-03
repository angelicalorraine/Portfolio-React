
import './App.css';
import NavTabs from './components/NavTabs';
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavTabs />

      </header>
      <PortfolioContainer />
    </div>
  );
}

export default App;
