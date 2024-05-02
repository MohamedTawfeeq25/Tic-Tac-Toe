import ReactDOM from 'react-dom';
import './styles/layout.css';
import Game from './pages/dualPlayer.jsx';
import Home from './pages/home.jsx';
import Botmode from './pages/botmode.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
const App=()=>{
	return(
	<>
	<BrowserRouter>
	<Routes>
	<Route path="/Tic-Tac-Toe/" element={<Home/>}/>
	<Route  path="/game/dualPlayer" element={<Game/>}/>
	<Route  path="/game/playervsbot" element={<Botmode/>}/>	
	</Routes>
	</BrowserRouter>
	</>
	)
	
}
ReactDOM.render(<App/>,document.getElementById('root'));