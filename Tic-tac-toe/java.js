const gameBoard = function(){
    this.Restart = function(){
        this.gameBoard = [null,null,null,null,null,null,null,null,null] 
    }
    this.Win = function(Player, Player2){
        if(this.gameBoard[0] == this.gameBoard[1] && this.gameBoard[0] == this.gameBoard[2]){
            if(this.gameBoard[0] == Player || this.gameBoard[0] == Player2){
                return this.gameBoard[0] == Player? Player: Player2
            }
        }
        if(this.gameBoard[0] == this.gameBoard[3] && this.gameBoard[6] == this.gameBoard[0]){
            if(this.gameBoard[0] == Player || this.gameBoard[0] == Player2){
                return this.gameBoard[0] == Player? Player: Player2
            }
        }
        if(this.gameBoard[0] == this.gameBoard[4] && this.gameBoard[0] == this.gameBoard[8]){
            if(this.gameBoard[0] == Player || this.gameBoard[0] == Player2){
                return this.gameBoard[0] == Player? Player: Player2
            }
        }
        if(this.gameBoard[1] == this.gameBoard[4] && this.gameBoard[7] == this.gameBoard[1]){
            if(this.gameBoard[1] == Player || this.gameBoard[1] == Player2){
                return this.gameBoard[1] == Player? Player: Player2
            }
        }
        if(this.gameBoard[2] == this.gameBoard[5] && this.gameBoard[2] == this.gameBoard[8]){
            if(this.gameBoard[2] == Player || this.gameBoard[2] == Player2){
                return this.gameBoard[2] == Player? Player: Player2
            }
        }
        if(this.gameBoard[2] == this.gameBoard[4] && this.gameBoard[2] == this.gameBoard[6]){
            if(this.gameBoard[2] == Player || this.gameBoard[2] == Player2){
                return this.gameBoard[2] == Player? Player: Player2
            }
        }
        if(this.gameBoard[3] == this.gameBoard[4] && this.gameBoard[3] == this.gameBoard[5]){
            if(this.gameBoard[3] == Player || this.gameBoard[3] == Player2){
                return this.gameBoard[3] == Player? Player: Player2
            }
        }
        if(this.gameBoard[6] == this.gameBoard[7] && this.gameBoard[6] == this.gameBoard[8]){
            if(this.gameBoard[6] == Player || this.gameBoard[6] == Player2){
                return this.gameBoard[6] == Player? Player: Player2
            }
        }
        return null
    }
    this.Restart()
}

const game = function(player1, player2){
    this.restart = function(){
        this.turn = this.Players[0]
        this.gameboard.Restart()
        this.Display()
        const massage = document.getElementById("Massage")
        massage.textContent = ""
    }
    this.Display = function(){
        const container = document.getElementById("container")
        container.innerHTML = ""
        for(let i = 0; i<this.gameboard.gameBoard.length;i++){
            const div = document.createElement("div")
            div.textContent = this.gameboard.gameBoard[i]
            div.value = i
            container.appendChild(div)
            div.addEventListener("click", this.listener.bind(this))
        }
    }
    this.listener = function(e){
        if(this.gameboard.gameBoard[e.target.value] == null){
            this.gameboard.gameBoard[e.target.value] = this.turn
            this.Display()
            this.NextTurn()
            this.CheckIfWin()
        }
        
    }
    this.NextTurn = function(){
        this.turn = this.turn == this.Players[0]?this.Players[1]:this.Players[0]
    }
    this.CheckIfWin = function(){
        console.log()
        if(this.gameboard.Win(player1.sign,player2.sign) != null){
            this.turn = null
            const massage = document.getElementById("Massage")
            massage.textContent = `Player ${this.gameboard.Win(player1.sign, player2.sign)}, WON!`
        }
    }
    this.change = function(e){
        player1.sign = e.target.elements["player1"].value
        player2.sign = e.target.elements["player2"].value
        this.Players = [player1.sign, player2.sign]
        this.Display()
        e.preventDefault()
    }
    console.log(player1)
    this.Players = [player1.sign, player2.sign]
    this.gameboard = new gameBoard()
    this.turn = this.Players[0]
    this.turn = this.Players[0]
    this.gameboard.Restart()
    this.Display()
    this.button = document.querySelector("button")
    this.button.addEventListener("click", this.restart.bind(this))
    this.form = document.querySelector("form")
    this.form.addEventListener("submit", this.change.bind(this))
    
}
const Player = (sign) =>{
    return { sign }
}
let g = new game(Player('x'),Player('y'))
g.restart()