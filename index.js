class BoardMember{
  constructor(name, homeState, training){
    this.name = name
    this.homeState = homeState
    this.training = training
  }
  veto(){
    return 'No, I must disagree'
  }
  approve(){
    return 'You can do that!'
  }
  doCharity(){
    return "I like to help people."
  }
  releasePressStatement(){
    return "You will see great things from Scuber."
  }
  sayHi(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }
}
// let sam = new BoardMember;
// sam.veto()
// => "No, I must disagree"
// let sam = new BoardMember("Sam", "NYC", "coding");
// sam.sayHi()
// "Hi, my name is Sam. I am from NYC, and I was trained in coding."

//inherits from BoardMember
class Ceo extends BoardMember {
  hireEmployee(){
    return "Welcome aboard!"
  }
}
