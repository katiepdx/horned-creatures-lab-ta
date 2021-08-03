import './App.css';
import Header from './components/Header';
import ImageList from './components/ImageList';
import creaturesData from './data/creatures-data';

function App() {
  return (
    <div className="App">
        <Header/>

        <ImageList images={creaturesData}/>
    </div>
  );
}

export default App;
