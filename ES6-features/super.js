// Why super is used inside constructor

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name); // remove the name and you will get undefined error on line 16
    this.likesBaths = false;
  }

  meow() {
    console.log(this.name + " says " + "Meow!");
  }
}

c = new Cat("magesh");
c.meow();
