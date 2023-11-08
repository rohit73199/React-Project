{/*import './App.css';*/}
{/*import Navbar from './components/Navbar';
import Main from './components/Main';
import Buttons from './components/Buttons';
import Footer from './components/Footer';*/}
import DynamicRendering from './day-3/DynamicRendering';
import Counter from './day-3/Counter';
import ToggleMessage from './day-3/ToggleMessage';

function App() {
  return(

    <div className="flex space-x-4 my-4">

  {/*<Navbar></Navbar>
  <Main></Main>
  <Footer></Footer>
      <Buttons label="Green button" color="green" />
      <Buttons label="Yellow button" color="blue"/>
      <Buttons label="Black button" color="white"/>
  <Buttons label="red button" color="red"/>*/}
  <DynamicRendering/>
  <Counter/>
  <ToggleMessage/>
  </div>
  );
}

export default App;