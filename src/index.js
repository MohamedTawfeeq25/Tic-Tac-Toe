import ReactDOM from 'react-dom';
import './styles/layout.css';
import Game from './pages/dualPlayer.js';
import Muls from './pages/multi1.js';
import Home from './pages/home.js';
import Botmode from './pages/botmode.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
const App=()=>{
	return(
	<>
	<BrowserRouter>
	<Routes>
	<Route index path="/" element={<Home/>}/>
	<Route  path="/game/dualPlayer" element={<Game/>}/>
	<Route  path="/game/playervsbot" element={<Botmode/>}/>
	<Route path="/game/multip" element={<Muls/>}/>	
	</Routes>
	</BrowserRouter>
	</>
	)
	
}
ReactDOM.render(<App/>,document.getElementById('root'));