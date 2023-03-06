function juguetes(){
let juguetesNinos = ['Pelota', 'Auto', 'Motito', 'Rasty']


for (let i = 0; i < juguetesNinos.length; i++){
    return juguetesNinos[i];

}
}


function Auto(puertas, color, marca, año, ruedas){
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
}

var miPrimerCarro = new Auto(4, 'Blue', 'Ford', 2023, 4)