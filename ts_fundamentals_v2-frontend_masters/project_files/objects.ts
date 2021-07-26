/* Direct type delcaration */
const person: { firstName: string; lastName: string; age } = {
    firstName: "Hobbit",
    lastName: "Troll",
    age: 56,
};

/* Type alias declaration */
type TPerson = {
    firstName: string;
    lastName: string;
    age: number;
};

const person2: TPerson = {
    firstName: "Hobbit",
    lastName: "Troll",
    age: 56,
};

/* Interface declaration */
interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
}

const person3: IPerson = {
    firstName: "Hobbit",
    lastName: "Troll",
    age: 56,
};
/* Optional Property declaration */

interface IDog {
    name: string;
    age?: number;
}

const dog: IDog = {
    name: "Chuck",
};

/* avoiding possible undefined error */

interface IShortPerson {
    firstName?: string;
    lastName: string;
}

const sperson: IShortPerson = {
    lastName: "Troll",
};

function personToLower(person: IShortPerson): IShortPerson {
    const personCpy = { ...person };
    personCpy.firstName?.toLowerCase(); // this will throw an error as first name is possibly undefined so use --> ?. syntax
    personCpy.lastName.toLowerCase();
    return personCpy;
}

const loweredSPerson = personToLower(sperson);
