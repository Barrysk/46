class Player{ //Clase para los jugadores
    constructor(){
        this.index = null;  //Identificador del nuevo jugador 
        this.indexBanco = null //Identificador del nuevo banco 
        this.distance = 0;  //Distancia recorrida en el juego
        this.name = null;   //Nombre del nuevo jugador
        this.banco = null;
    }

    getCount(){//Función para obtener playerCount
        
        var playerCountRef = database.ref('playerCount');  //Obtiene la referencia a la ubicación del valor de la DB para playerCount
        playerCountRef.on("value",(data) => {playerCount = data.val();})    //Crea el "oyente" para los cambios en la DG de playerCount
    }//Fin getCount()

    updateCount(count){ //Función para actualizar playerCount en la DB
        
        database.ref("/").update({playerCount: count}); //playerCount fue creado en firebase
    }//Fin updateCount

    updateCountBanco(count){
    database.ref("/").update({playerCountBanco: count}); //playerCountBanco fue creado en firebase
    }

    update(){  //Función para actualizar el nombre y la distancia del jugador 
        var playerIndex = "players/player" + this.index; //Obtiene el indice del jugador
        database.ref(playerIndex).set({name: this.name, distance: this.distance})
    }//Fin update

    updateBanco(){
        var playerIndexBanco = "bancos/banco" + this.indexBanco; //Obtiene el indice del banco
        database.ref(playerIndexBanco).set({Banco: this.banco})
    }//Fin updateBanco

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=> {allplayers = data.val()});
       
    }//Fin getPlayerInfo

    
}