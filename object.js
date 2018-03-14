console.log('==== LES OBJETS ====')

let lucasCar = {
  color: 'red',
  type: 'essence',
  motor: 'v12',
  doors: 3,
  passenger: [
    'Louis',
    'Thomas'
  ]
}

console.log(lucasCar.passenger[0])

function Car (newColor, type, nbDoors) {
  this.color = newColor
  this.type = type
  this.doors = nbDoors

  this.klaxon = function () {
    console.log('Pouet Pouet')
  }

  this.description = function () {
    console.log('My car is ' + this.color + ' and has ' + this.doors + ' doors.')
  }

  this.repaint = function (newPaint) {
    this.color = newPaint
  }
}

let myCar = new Car('red', 'essence', 5)
let hisCar = new Car('blue', 'disel', 3)

myCar.klaxon()
hisCar.klaxon()

myCar.description()
hisCar.description()

let limo = new Car('violet', 'gpl', 32)

limo.description()
limo.repaint('gold')
limo.description()

limo.windows = 30
limo.color = 'purple and shiny'
limo.description()

limo.closeDoors = function () {
  console.log('jai fermer les portes')
}

limo.closeDoors()
myCar.closeDoors() // error, la fonction closeDoors a été déclarer uniquement sur l'objet limo

console.log('==== === ====== ====')
