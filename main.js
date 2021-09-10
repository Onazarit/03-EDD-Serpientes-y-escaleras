/*
Simular la ejecución del juego de serpientes y escaleras en un tablero de 100 casillas, con dos jugadores, distribuir a su consideración entre 8 y 10 serpientes y entre 8 y 10 escaleras dentro del tablero.
Considerar el modo de juego simple que es donde un jugador con llegar o pasar de 100 gana (no deberá regresar las casillas extras al 100)
Utilizar clases para los elementos que se requieren para el juego.
Subir enlace de GIT
*/

class Main{
    constructor(){
        this.main();
    }

    main(){
        let Player1 = new Player(1);
        let Player2 = new Player(2);
        let final = false;
        let turno = 1;
        while(final == false){
            Player1.setPos(Player1.getPos()+this.dice());
            Player2.setPos(Player2.getPos()+this.dice());
            
            console.log(`Turno ${turno}-1: P1: ${Player1.getPos()} | P2: ${Player2.getPos()}`);

            Player1.setPos(this.revisarEscaleras(Player1.getPos()));
            Player1.setPos(this.revisarSerpientes(Player1.getPos()));
            
            Player2.setPos(this.revisarEscaleras(Player2.getPos()));
            Player2.setPos(this.revisarSerpientes(Player2.getPos()));
            
            console.log(`Turno ${turno}-2: P1: ${Player1.getPos()} | P2: ${Player2.getPos()}`);
            if((Player1.getPos() >= 100)||(Player2.getPos() >= 100)){
                final = true;
            }
            turno++;
        }
        console.log(this.gameWinner(Player1.getPos(), Player2.getPos())); 
    }

    dice(){
        let dice = Math.floor(Math.random()*6)+1;
        return(dice);
    }

    revisarEscaleras(pos){
        switch(pos){
            case 11: return(39); break; case 17: return(67); break; case 19: return(45); break;
            case 21: return(56); break; case 26: return(50); break; case 43: return(84); break;
            case 52: return(76); break; case 70: return(92); break; case 74: return(100); break;
            default: return(pos); break;
        }        
    }

    revisarSerpientes(pos){
        switch(pos){
            case 96: return(69); break; case 93: return(40); break; case 83: return(8); break;
            case 78: return(49); break; case 75: return(30); break; case 62: return(14); break;
            case 36: return(20); break; case 18: return(6); break; case 22: return(2); break;
            default: return(pos); break;
        }   
    }

    gameWinner(pos1, pos2){
        if(pos1 >= 100){
            return("El jugador 1 ha ganado");
        }
        else if(pos2 >= 100){
            return("El jugador 2 ha ganado");
        }
    }
}

class Player{
    constructor(player){
        this._player = player;
        this._pos = 0;
    }

    getPlayer(){
        return(this._player);
    }

    getPos(){
        return(this._pos);
    }

    setPos(pos){
        this._pos = pos;
        return(this._pos);
    }
}
new Main();