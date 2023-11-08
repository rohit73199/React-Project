import './App.css';
{/*import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';*/}


function App() {
  return(

    <div className="flex space-x-4 my-4">

  {/*<Navbar></Navbar>
  <Main></Main>
  <Footer></Footer>*/}
      <Buttons label="Green button" color="green" />
      <Buttons label="Yellow button" color="blue"/>
      <Buttons label="Black button" color="white"/>
      <Buttons label="red button" color="red"/>
    </div>
  );
}

export default App;