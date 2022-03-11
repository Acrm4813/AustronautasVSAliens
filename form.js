class form{
    constructor(){
        this.title=createElement("h2");
        this.nombre=createElement("h3"); 
        this.input = createInput(); 
        this.button = createButton("Jugar");
    }

    display(){
        this.title.html("Austronautas VS Aliens")
        this.title.position(800,100)
        this.nombre.html("Ingresa tu Nombre")
        this.nombre.position(800,150)
        this.input.position(800,200)
        this.button.position(800,250)
    }
}