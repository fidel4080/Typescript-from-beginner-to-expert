// more examples
type vague1 = "Hi" extends string ? true : false; // true

type vague2 = "Hi" extends any ? true : false; // true

type vague3 = "Hi" extends number ? true : false; // false

type vague4 = string extends "Hi" ? true : false; // false

type vague5 = 13 extends number ? true : false; // true

type vague6 = number extends 13 ? true : false; // false

type vague7 = number extends any ? true : false; // true

type vague8 = unknown extends any ? true : false; //true

type vague9 = never extends any ? true : false; //true

type vague10 = any extends any ? true : false; // true

type vague11 = void extends any ? true : false; // true

type vague12 = undefined extends void ? true : false; // true
