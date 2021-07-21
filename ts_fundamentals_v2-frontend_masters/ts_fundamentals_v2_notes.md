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
-   How would you provide information about types
-   What is a .d.ts file?
-   What is a js.map file?
-   Is strict as true a good idea? Why?
-   What is an implicit 'any'? Should we allow it?
-   Is it possible to check .js files?

### variables

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
