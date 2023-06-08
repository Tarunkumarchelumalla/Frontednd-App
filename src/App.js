import logo from './logo.svg';
import './App.css';
import Navbaar from './NavbarComponent';
import SecondComponent from './secondComponent';
//  purple #6441F0 #rgb(67,66,69)
function App() {
  return (
    <><div className='h-[100vh] w-[100%]  my-10 mx-10'>
        <Navbaar></Navbaar>
        <SecondComponent></SecondComponent>
     </div>
    </>
  );
}

export default App;
