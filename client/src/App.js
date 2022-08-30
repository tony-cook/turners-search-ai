import './App.css';
import Header from './components/Header'
import Navigation from './components/Navigation'
import LeftMargin from './components/LeftMargin'
import Content from './components/Content'
import RightMargin from './components/RightMargin'

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className="container-body">
        <LeftMargin />
        <Content / >
        <RightMargin />
      </div>
    </div>
  );
}

export default App;
