//?---------------------------------------------

//! object

interface Person {
    //[key:string]:string,\
    name: string;
    email: string;
  }
  
  const myObj: Person = {
    name: "wefg",
    email: "wew@ejk.com",
  };
  
  const getPersonData = (key: keyof Person): string => {
    return myObj[key];
  };
  console.log(getPersonData("email"));
  
  let key = "name";
  myObj[key as keyof Person];
  myObj[key as keyof typeof myObj];
  
  //?---------------------------------------------
  
  //! Type  Utility
  type User = {
    name?: string;
    email: string;
  };
  
  //? #1 Partial<Type> -- its make rwquired to optional
  type User2 = Partial<User>;
  const User2: Partial<User> = {};
  
  //? #2 Required<Type> -- opposite of partial
  const User3: Required<User> = {
    name: "dev",
    email: "er",
  };
  
  //? #3 Readinly<Type> -- makes every property readonly
  const user: Readonly<User> = {
    name: "dev",
    email: "wdefrt",
  };
  
  //? #4 Record<Type>
  type User3 = Record<"name" | "email", string>;
  
  //? #5 Pick<Type,Keys> -- pick the keys of type
  interface orderInfo {
    readonly id: string;
    user: string;
    city: string;
    state: string;
    status: string;
  }
  type shipingInfo = Pick<orderInfo, "city" | "state">;
  
  //? #6 Omit<Type,keys> -- leave the keys of type
  interface shipingInfoInterface {
    city: string;
    state: string;
  }
  type Random = Omit<shipingInfoInterface, "city">;
  
  //? #7 Exclude<Type, ExcludedUnion> -- remove given datatype from union
  type MyUnion = string | number | boolean;
  type union = Exclude<MyUnion, number>;
  
  //? #8  Extract<Type,Union> -- include only given datatype
  type MyUnion1 = string | number | boolean;
  type union1 = Extract<MyUnion, number>;
  
  //? #9 NonNullable<Type>
  type MyUnion2 = string | number | boolean | null | undefined;
  type union3 = NonNullable<MyUnion2>;
  
  //? #10  Parameters<Type> -- return parameters of a function in array
  const myFunction = (a: number, b: number): number => {
    console.log(a + b);
    return a + b;
  };
  type ParaType = Parameters<typeof myFunction>;
  
  //? #11 ConstructorParameters<Type> -- it returns constructr paramerters as an array
  class smapleClass {
    constructor(public s: string, public t: string) {}
  }
  type constructorPara = ConstructorParameters<typeof smapleClass>;
  
  //? #12 ReturnType<Type>
  type myFunctionReturnType = ReturnType<typeof myFunction>;
  
  //? #13 InstanceType<Type>
  type smapleClassInstatnsType = InstanceType<typeof smapleClass>;
  const userrr: smapleClassInstatnsType = {
    s: "fg",
    t: "df",
  };