import {Link} from 'react-router-dom';
import '../styles/home.css';
const Home=()=>{
	return(<>
		<div id="home" className="box">
			<div id="title"><h1>Tic Tac Toe</h1></div>
			<div id="cont">
				<div id="but">
				<div id="but1"><button><Link to="/game/dualPlayer">Player vs Player</Link></button></div>
				<div id="but2"><button><Link to="/game/playervsbot">Player vs Bot</Link></button></div>
				</div>
			</div>
		</div>
		</>)
}
export default Home;