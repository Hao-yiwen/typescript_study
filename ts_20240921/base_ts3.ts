interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

type Example2 = RegExp extends Animal ? number : string;

declare function stringOrNum(x: string): number;
declare function stringOrNum(x: string | number): string | number;
declare function stringOrNum(x: number): string;

type T1 = ReturnType<typeof stringOrNum>;

type EventConfig<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (event: E) => void;
};

type SquareEvent = { kind: "square"; x: number; y: number };
type CircleEvent = { kind: "circle"; radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>;

interface aa {
  a: string;
  b: number;
}

interface bb {
  c: string;
}

type cc = aa | bb;

const c1: cc = { a: "a", b: 1, c: "c" };

const map1 = new Map<string, number>();

map1.set("foo", 123);

type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

type PropEventSource<Type> = {
  on<Key extends string & keyof Type>(
    eventName: `${Key}Changed`,
    callback: (newValue: Type[Key]) => void
  ): void;
};

/// Create a "watched object" with an `on` method
/// so that you can watch for changes to properties.
declare function makeWatchedObject<Type>(
  obj: Type
): Type & PropEventSource<Type>;

const person1 = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
});

person1.on("firstNameChanged", (v) => {
  console.log(`firstName was changed to ${v.toUpperCase()}`);
});

type Greeting = "hello" | "goodbye";

type ShoutGreeting = Uppercase<Greeting>;

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`;

type MainID = ASCIICacheKey<"main">;

type LowercaseGreeting = "hello, world";
type Greeting1 = Capitalize<LowercaseGreeting>;

class Base {
  k = 4;
}

class Derived extends Base {
  constructor() {
    super();
    // Prints a wrong value in ES5; throws exception in ES6
    console.log(this.k);
  }
}
