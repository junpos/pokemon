export type Pokemon = {
  id: number;
  name: string;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  cries?: string; // Optional, since it doesn't appear in the API data
  height: number;
  sprites: {
    front_default: string;
    front_shiny: string;
    other: {
      [key: string]: {
        front_default: string;
        front_shiny: string;
      };
    };
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
};
