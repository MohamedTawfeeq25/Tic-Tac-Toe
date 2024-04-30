import ReactDOM from 'react-dom';
import './styles/layout.css';
import Game from './pages/dualPlayer.js';
import Home from './pages/home.js';
import Botmode from './pages/botmode.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
const App=()=>{
	return(
	<>
	<BrowserRouter>
	<Routes>
	<Route index path="/Tic-Tac-Toe/" element={<Home/>}/>
	<Route  path="/game/dualPlayer" element={<Game/>}/>
	<Route  path="/game/playervsbot" element={<Botmode/>}/>	
	</Routes>
	</BrowserRouter>
	</>
	)
	
}
ReactDOM.render(<App/>,document.getElementById('root'));