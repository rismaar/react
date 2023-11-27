import './App.css';
import "./style/landing.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './component/intro';
import NavigateBar from './component/navigate';
import TrendGame from './component/trending';
import BestGame from './component/best';

function App(){
  return(
    <div>
      <div className='myBg'>
        <NavigateBar />
        <Intro />
      </div>

      <div className='trending'>
        <TrendGame />
      </div>

      <div className='best'>
        <BestGame />
      </div>
    </div>
  )
}


export default App;
