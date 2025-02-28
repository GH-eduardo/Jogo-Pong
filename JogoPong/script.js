let xBolinha = 300;
let yBolinha = 300;
let diametro = 20;
let VxBolinha = 5;
let VyBolinha = 5;
let raio = diametro/2;
let xRaquete = 10;
let yRaquete = 300;
let xRaquete2 = 590;
let yRaquete2 = 300;
let comprimentoRaquete = 90;
let larguraRaquete = 5;


function setup() {
    createCanvas(600.0, 400.0)
}

function draw() {
    background(0)
        circle(xBolinha, yBolinha, diametro)

        xBolinha += VxBolinha;
        yBolinha += VyBolinha

        if(xBolinha + raio > 600 || xBolinha - raio < 0){
            VxBolinha *= -1;
        }   
        if(yBolinha + raio > 400 || yBolinha - raio < 0){
            VyBolinha *= -1;
        }

        rect(xRaquete, yRaquete, larguraRaquete, comprimentoRaquete)

        rect(xRaquete2, yRaquete2, larguraRaquete, comprimentoRaquete)

        if( keyIsDown(UP_ARROW) === true ) {
            yRaquete -= 3;
        }

        if( keyIsDown(DOWN_ARROW) === true ) {
            yRaquete += 3;
        }

        if( keyIsDown(87) === true ) {
            yRaquete2 -= 3;
        }

        if( keyIsDown(83) === true ) {
            yRaquete2 += 3;
        }


}