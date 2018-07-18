class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}


class BoardMember{
  constructor(name, homeState, training){
      this.name = name
      this.homeState = homeState
      this.training = training
    }

    veto() {
      return 'No, I must disagree'
    }
    approve () {
      return 'You can do that!'
    }
    doCharity (){
      return "I like to help people."
    }

    releasePressStatement (){
      return "You will see great things from Scuber."
    }

    sayHi (){
      return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
    }
  }

  class Ceo extends BoardMember{
    hireEmployee() {
      return 'Welcome aboard!'
    }
  }
