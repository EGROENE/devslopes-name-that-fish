import { Images } from "./assets/Images";

// Must be in order of trout, salmon, tuna, shark
export const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export const allFishNames = initialFishes.map((fish) => fish.name);
