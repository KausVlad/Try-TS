type TypeUser = {
  readonly id: number; //! readonly property
  name: string;
  email: string;
  password: string;
  age: number;
};

type TypeNewUserData = Pick<TypeUser, 'name' | 'email' | 'age' | 'password'>; //! It includes only the properties name, email, age, and password.
type TypeNewUserData2 = Omit<TypeUser, 'id'>; //! the Omit utility type to create a new type that is the same as TypeUser, but without the id property.

const userX: TypeNewUserData = {
  name: 'KausGold',
  email: 'KausGold@me.com',
  password: 'KausGold@me.com',
  age: 30,
};

const userX2: TypeNewUserData2 = {
  name: 'KausGold',
  email: 'KausGold@me.com',
  password: 'KausGold@me.com',
  age: 30,
};

const newUser: TypeUser = {
  ...userX,
  id: 1,
};

type ConstantUser = Readonly<TypeUser>; //! This code snippet defines a new type called ConstantUser, which is a read-only version of the TypeUser type.

const userX3: ConstantUser = {
  id: 1,
  name: 'KausGold',
  email: 'KausGold@me.com',
  password: 'KausGold@me.com',
  age: 30,
};

// userX3.name = 'KausGold2'; // Cannot assign to 'name' because it is a read-only property.

type TypePartialUser = Partial<TypeUser>; //!The Partial utility type in TypeScript creates a new type with all properties of the original type set as optional. So TypePartialUser will have the same properties as TypeUser, but each property can be either defined or undefined.

const userX4: TypePartialUser = {
  name: 'KausGold',
  email: 'KausGold@me.com',
};
