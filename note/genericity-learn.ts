function identity1(arg: number): number{
  return arg
}

function identity2(arg: any): any{
  return arg
}

function identity3<T>(arg: T): T {
  return arg
}

let output = identity3<string>('string')

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

let myIdentity: <U>(arg: U) => U = identity3


interface GenericIdentityFn {
  <T>(arg: T) : T
}

function identity4<T>(arg: T): T {
  return arg
}

let myIdentity2: GenericIdentityFn = identity4

interface GenericIdentityFn2<T> {
  (arg: T): T
}

function identity5<T>(arg: T): T {
  return arg
}

let myIdentity3: GenericIdentityFn2<'number'> = identity5

class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()

myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x,y){
  return x + y
}

interface LengthWise {
  length: number
}

function logginIdentity<T extends LengthWise>(arg: T): T {
  console.log(arg.length)
  return arg
}

logginIdentity({
  length:10,
  value:3
})

type Person = {
  name: string;
  age: number;
  gender: "male" | "female" | "non-binary";
};

type PersonKeys = keyof Person;

const personkeys: PersonKeys = 'age'

type Point = { x: number; y: number };
type P = keyof Point;

const xiaoP: P = 'y'

let s = "hello";
let n: typeof s;

n ='s'
