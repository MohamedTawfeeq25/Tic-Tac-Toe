import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../styles/board.css';
import restart from '../images/restart.png';
import exit from '../images/exit.png';

const Game=()=>{
    const [player,setPlayer]=useState('x');
    function rest(){
        document.getElementById("a").value="";
        document.getElementById("b").value="";
        document.getElementById("c").value="";
        document.getElementById("d").value="";
        document.getElementById("e").value="";
        document.getElementById("f").value="";
        document.getElementById("g").value="";
        document.getElementById("h").value="";
        document.getElementById("i").value="";
            setPlayer('x');
    }
    function Result(){
      var a=document.getElementById("a").value;
      var b=document.getElementById("b").value;
      var c=document.getElementById("c").value;
      var d=document.getElementById("d").value;
      var e=document.getElementById("e").value;
      var f=document.getElementById("f").value;
      var g=document.getElementById("g").value;
      var h=document.getElementById("h").value;
      var i=document.getElementById("i").value;
         if((a=="X" && b=="X" && c=="X")||(a=="X" && d=="X" && g=="X" )||(d=="X" && e=="X" && f=="X") || (g=="X" && h=="X" && i=="X") || (b=="X" && e=="X" && h=="X") ||(c=="X" && f=="X" && i=="X") || (a=="X" && e=="X" && i=="X") || (g=="X" && e=="X" && c=="X") ){
        window.alert("X wins");
        rest();
         }
        else if((a=="O" && b=="O" && c=="O")||(a=="O" && d=="O" && g=="O" )||(d=="O" && e=="O" && f=="O") || (g=="O" && h=="O" && i=="O") || (b=="O" && e=="O" && h=="O") ||(c=="O" && f=="O" && i=="O") || (a=="O" && e=="O" && i=="O") || (g=="O" && e=="O" && c=="O") ){
        window.alert("O wins");
        rest();
         }
         else if(a!="" && b!="" && c!="" && d!="" && e!="" && f!="" && g!="" && h!="" && i!=""){
            window.alert("Draw");
            rest();
         }

    }
    useEffect(()=>{
        if(player=='x'){
            document.getElementById("Xturn").style="color:#44BFD9;border-bottom:3px solid #44BFD9";
            document.getElementById("Yturn").style="color:#9A9B9B;border-bottom:2px solid #9A9B9B";
            Result();
            
        }
        else if(player=='o'){
              document.getElementById("Yturn").style="color:#D8BCFC;border-bottom:3px solid #D8BCFC";
                document.getElementById("Xturn").style="color:#9A9B9B;border-bottom:2px solid #9A9B9B";
            Result();
             
        }
    });

    function Ans(event){
    if(document.getElementById(event.target.id).value==""){
        if(player=='x'){
        
            document.getElementById(event.target.id).style='color:#44BFD9';
            document.getElementById(event.target.id).value='X';
            setPlayer('o');
        }
        else if(player=='o'){
            document.getElementById(event.target.id).style='color:#D8BCFC';
            document.getElementById(event.target.id).value='O';
            setPlayer('x');
            }
    }
    
       

}
    
	return(<>
        <div id="boards" class="box">
            <div id="boardtop">
                <div id="btop"><div id="restart"><button onClick={rest}><img src={restart}/></button></div><div id="gtitle"><h1>Player vs Player</h1></div><div id="exit"><button><Link to="/Tic-Tac-Toe/"><img src={exit}/></Link></button></div></div>
            </div>
            <div id="player">
                <div id="playerstatus"><div id="Xturn">Player X</div><div id="Yturn">Player O</div></div>
            </div>
            <div id="tic-tac-toe">
                <div id="innerbox">
                     <input type="text" onClick={Ans}    id="a" minlength="1" readOnly    maxlength="1" autocomplete="off"/>
                     <input type="text" onClick={Ans}  minlength="1" maxlength="1" readOnly   id="b"/ >
                     <input type="text" onClick={Ans}  minlength="1" maxlength="1" readOnly  id="c"/><br/>
                     <input type="text" onClick={Ans}  minlength="1" maxlength="1" readOnly    id="d" />
                     <input type="text" onClick={Ans}  minlength="1" maxlength="1" readOnly id="e" />
                     <input type="text" onClick={Ans}  minlength="1" maxlength="1" readOnly  id="f" /><br/>
                     <input type="text" onClick={Ans}  minlength="1" maxlength="1" readOnly id="g" />
                     <input type="text" onClick={Ans}  minlength="1" maxlength="1" readOnly   id="h" / >
                     <input type="text" onClick={Ans}  minlength="1" maxlength="1" readOnly  id="i" /><br/>
                </div>
            </div>
        </div>	
		</>)
}
export default Game;