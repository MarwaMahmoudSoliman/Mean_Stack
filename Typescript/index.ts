console.log(Math.floor(12.5));
let or: number = 50;
let arr1: string[] = ['marwa']

let arr3: any[] = [324, false, [], {}]

let customer1: Customer = {
    id: '1',
    name: 'marwa',
    age: 22,
    gender: 'female',
    email: '',
  }
  let customer2: Customers  = {
   
    name: 'Ali',
    age: 25,
    gender: 'male',
  }
  let customer3: Customer= {
    id: '3',
    name: 'Ahmed',
    age: 25,
    gender: 'male',
  }
  

  console.log(customer3.id);
  
  type Customer = {
    readonly id: string,
    name: string,
    age: number,
    gender: Gender,
    email?: string,
  }
  type mix = number | undefined

const sum = (n1: number = 10, n2: number): number => {
  return n1 + n2;
};

console.log(sum(15, 15));
  
  type Gender = 'male' | 'female'
 
  console.log(customer1.id)

  interface Customers  {
    name: string;
    age: number;
    gender: Gender;
  }
  
interface Profile extends Customers { }

const hello = <messageType = number>(message: messageType): messageType => {
  return message;
}
const hello2 = <messageType = number>(n1: messageType, n2: messageType): string => {
  return n1 + '' + n2;
}

console.log(hello<string>('Hello '));
console.log(hello<number>(1));
class Car {
    //  private message: string;
    constructor(protected message: string) {
      console.log(this.message);
    }}
  
@style('red')
class Octavia extends Car {
  constructor(protected message: string, private model: string) {
    super(message);
    console.log(this.model);
  }
}

const car1: Car = new Car('BMW')
const car2: Octavia = new Octavia('Octavia A8', '2018')


function style(value: string) {
    console.log(value);
   
    return function (target: any) {
     
    };
  }