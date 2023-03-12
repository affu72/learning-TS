type Cat = {
  name: string;
  purrs: boolean;
  color: string;
};

type Dog = {
  name: string;
  barks: boolean;
  color: string;
};

type HybridAnimal = Dog & Cat;

//common -> name,color | unique properties -> barks, purrs

const hybridAnimal: HybridAnimal = {
  name: "Max",
  color: "White",
  barks: true,
  purrs: false,
};
