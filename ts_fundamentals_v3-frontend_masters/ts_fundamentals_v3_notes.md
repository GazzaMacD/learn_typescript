# TypeScript Fundamentals

## Introduction

### Introduction

-   Is typescript a separate language from Javascript? Explain!
-   What language does TS compile to?
-   Is it run time type checking?
-   It comes in three parts, what are they?

### Rationale

-   What does TS force the developer to encode?
-   What kind of mistakes does it eliminate?
-   Are errors caught at runtime or compile time with TS?
-   Subjective but does it provide a better Developer Experience? Why would you say so?

### Flags

-   What is the command line command to compile a .ts file into .js?
-   What version of js does ts compile to by default?
-   If you wanted to comile to ES2015, how would you do that on the command line?
-   What flag would you use to compile to Node js code?
-   What flag would you use to constantly compile on change of ts file?
-   Are flags the only way to vary the output?

### Configure Typescript

-   How can we configure typescript?
-   How do you define files as input?
-   Where do you put the configuration for the compiler?
-   How would you provide information about types after compliation?
-   What is a .d.ts file?
-   What is a js.map file?
-   Is strict as true a good idea? Why?
-   What is an implicit 'any'? Should we allow it?
-   Is it possible to check .js files?

### Variables

-   Is it a good idea to type every type on every variable? If not, why not?
-   What will happen in ts with the following code? Where is the ts error?

```ts
let x = "Bob";
x = "Tony";
x = 43;
```

-   What is the difference between the following variables?

```ts
let a = "Tony";
const b = "Tony";
```

-   Can you explain what can and can't change in terms of assignment in the code below?

```ts
const myObj = {
    a: "Bob",
};
```

-   What is the following type declaration? What can it hold?
-   Should `any` be completely avoided?

```ts
let x: any;
```

-   What is ts's top type?

### Arrays

-   What is ts's bottom type?
-   What is the type of the following?

```ts
const ar = [];
```

-   How could we make it an array that accepts, strings only?
-   There are two ways to specify the type for above array of strings. What are they?
-   How could we make it an array that accepts strings or numbers?
-   How could we make it an array that accepts any value?

### Tuples

-   Do we need to state the type of a tuple explicilty
-   How would you state the type for the following `let car = ["Honda", 2002, "CRV"]`?
-   IMPORTANT, can you use push, pop to this 'tupple' in TS or will it warn you against it?

### Objects

-   What three ways could you use to declare the types for the following object

```ts
const person = {
    firstName: "Hobbit",
    lastName: "Troll",
    age: 56,
};
```

### Union Types

-   Would you relate union types to AND or OR operators?
-   Could you draw two circles to show a Union Type in set theory?
-   What operator would you use to create a union type in TS?
-   Which of these t

### Intersection Types

-   Would you relate union types to AND or OR operators?
-   Could you draw two circles to show a Intersection Type in set theory?
-   How would one make an intersection type between these two types below?
-   Which of the two types, Union or Intersection are more common?

```ts
type TDog = {
    name: string;
    furType: string;
};
type TFish = {
    name: string;
    freshWater: boolean;
};
```

-   In the above, if you made an intersection type, say TPet, which property would be accesible? Which properties would not be accesible? Why?
-   How would one make a Union type of the following types?

```ts
type TDog = {
    name: string;
    furType: string;
};
type TCat = {
    name: string;
    species: string;
    hasVet: boolean;
};
```

-   If you make a union type of the above two types, do the objects using this type need all properties of the union type?
-   What are those properties?

### Type Aliases and Interfaces

-   Are types and interfaces for objects largley interchangeable?
-   In terms of namespacing, which of type aliases or interfaces, can have two of the same name? (althouth let's be honest, it's a bad idea)
-   Are properties required?
-   How would you make a property optional?
-   With a property being optional, how would you avoid a ts error in the following code?

```ts
interface IPerson {
    firstName?: string;
    lastName: string;
}

function personToLower(person: IPerson): IPerson {
    const personCpy = { ...person };
    personCpy.firstName.toLowerCase(); // this will throw an error as first name is possibly null
    personCpy.lastName.toLowerCase();
    return personCpy;
}
const person = {
    firstName: "Hobbit",
    lastName: "Troll",
};
```

-   What is an 'excess property error'?
-   If you had two types, say `MyCar` and `MyTrailer` and you wanted to make a special car, trailer combination, how could you achieve this in code to produce the type `MyCarWithTrailer`?
-   Is this a little similar to the `extends` keyword with classes in Javascript?
-   Can you explain how to use the `implements` keyword with classes and interfaces?
-   What is augmenting an interface?
-   Can you give an example in code of augmenting an interface?
-   Can you augment a type alias in the same way as an interface?
-   If you augment an interface, where is that augmentation available? Across the app? Only below the augmentation? Local only?
-   When is augmenting an interface useful?

### Type Systems and Type equivalence

-   Is Typescript static or dynamic?
-   Are the type systems of Java and TypeScript the same?
-   What are the two type systems used by these two languages and can you explain the differences between the two?
-   What is the concept of wider and narrower in Typescript?
-   Can you give 6 concrete examples of the range of widest to narrowest?

### Functions

-   How would you give the function below, type annotations

```js
const john = {
    name: "John",
    email: "john@yahoo.co.jp",
};
function createLoanEmail(to) {
    return {
        recipient: `${to.name} <${to.email}`,
        body: `Dear ${to.name}, \nYou are qualified for a loan! Please contact us at spam@load.co.jp.`,
    };
}

send(sendLoadEmail(john));
```

-   How would you do the arrow function equivalent in TS of the above
-   Can return types be inferred?
-   Why does Mike suggest that creating type annotations for the return type might be preferable?
-   rest params would be annotated how?
-   Is TS a replacement for unit tests?
-   If the function return type is unimportant and should be ignored, what is the return type that should be used?
-   Are `undefined` and `void` the same as return types? Explain!
-   What is function overloading?
-   Is function overloading possible in Javascript?
-   Can we write overload signatures in Typescript?
