import { FC, useState, ChangeEvent } from "react";

// enum for multivalued variable
export enum HairColor {
  Blonde = "Your hair is blonde.",
  Brown = "Your hair is brown.",
  Black = "Your hair is black.",
}

// interface for Prop Types
interface IPersonProps {
  name: string;
  age: number;
  email: string;
  hairColor: HairColor;
  // getName: (name: string) => string;
}

// declaring type of react componenet and the props interface the component uses
export const Person: FC<IPersonProps> = ({ name, age, email, hairColor }) => {
  // state of null or string type only
  const [country, setCountry] = useState<string | null>(null);

  // using type to declare NameType
  // Values are now restricted to Muhammad or Furqan
  // similar to enum
  type NameType = "Muhammad" | "Furqan";
  const nameForType: NameType = "Muhammad";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <h1>Person Component</h1>
      <br />
      <h1>{name}</h1>
      <br />
      <h1>{age}</h1>
      <br />
      <h1>{email}</h1>
      <br />
      {/* <input
        placeholder="Write Down your Country"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setCountry(e.target.value);
        }}
      /> */}
      <input placeholder="Write Down your Country" onChange={handleChange} />
      <br />
      <h2>{country}</h2>
      <h2>{hairColor}</h2>
    </div>
  );
};
