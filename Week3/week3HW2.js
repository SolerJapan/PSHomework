
class Circle {
  constructor(radius, sides) {
    this.radius = radius;
    this.sides = sides;
  }
  circle_area = function(){
     return Math.PI * (this.radius * this.radius);
  }
  total_sides(){
     return this.sides;
  }
}

var round = new Circle(10,2);
var table = new Circle(9,2);

class Rectangle {
  constructor(height,width,sides) {
    this.height = height;
    this.width = width;
    this.sides = sides;
  }
  rectangle_area = function(){
     return this.height * this.width;
  }
  total_sides(){
     return this.sides;
  }
}

var rect1 = new Rectangle(5,4,4)
var rect2 = new Rectangle(3,4,4)


class Square {
  constructor(height,width,sides) {
    this.height = height;
    this.width = width;
    this.sides = sides;
  }
  square_area = function(){
     return this.height * this.width;
  }
  total_sides(){
     return this.sides;
  }
}

var sqar1 = new Square(4,4,4)
var sqar2 = new Square(5,5,4)

var recarea = rect1.rectangle_area();
console.log(recarea);


var cirarea = round.circle_area();
console.log(cirarea);


var sqarea = sqar1.square_area();
console.log(sqarea);
