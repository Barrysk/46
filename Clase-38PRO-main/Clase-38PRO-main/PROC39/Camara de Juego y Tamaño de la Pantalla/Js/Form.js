class Form{ //Clase para el formulario de registro de los jugadores
    constructor(){

        this.input = createInput("Nombre"); //Variables para crear una entrada de datos para nombre
        this.inputBanco = createInput("Nombre del banco");
        this.button = createButton("iniciar"); //Boton para inicar juego
        this.title = createElement("h1");   //Tìtulo de la página
        this.greeting = createElement("h1"); //Bienvenida
    }

    hide(){ //Función para ocultar el mensaje de bienvenida, buton Play y cuadro de texto para Nombre
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        //var title = createElement("h1");//Cabecera del título
        this.title.html("idle banck tycoon");
        this.title.position(displayWidth -717,300);      //Ajusta posición automática del Título del juego        5
        this.input.position(displayWidth/2,displayHeight/2); //Posición del la variable input (entrada del nombre) en pantalla
        this.inputBanco.position(displayWidth/2,displayHeight/1.8);//posicion del nombre del banco
        this.button.position(displayWidth/2.5+70, displayHeight/1.9+70);//posicion para cargar el nombre de usuario y del banco
       // <img src="images/nombre.jpg"></img>
        this.button.mousePressed(()=>{ //Función para el clic sobre el botón
            this.input.hide(); //Oculta el nombre 
            this.button.hide();  //Oculta el botón
            this.inputBanco.hide();//Oculta el nombre del banco
            player1.name = this.input.value();   //Obtiene el valor de la entrada 
            player1.Banco = this.inputBanco.value();   //Obtiene el valor de la entrada 
            playerCount+=1; //Actualiza el número de jugadores
            playerCountBanco+=1; //Actualiza el número de jugadores
            player1.index = playerCount;
            player1.indexBanco = playerCountBanco;
            player1.update(); //Actualiza en la DB el nombre del jugador
            player1.updateBanco();//Actualiza en la DB el nombre del banco
            player1.updateCount(playerCount); //Actualiza en la DB el número de jugadores -- LAMADA PASO4
            player1.updateCountBanco(playerCountBanco);
            this.greeting.html("Bienvenido a mi primer juego " + player1.name); //Saluda al jugador nuevo
            this.greeting.position(displayWidth/2,displayHeight/2); //Posición del mensaje de bienvenida en pantalla
        }); 


    }//Fin display
}//Fin Form.js