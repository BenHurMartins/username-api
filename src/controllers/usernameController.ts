import { Request, Response, NextFunction } from "express";
import { adjectives } from "../repositories/adjectives";
import { nouns } from "../repositories/nouns";

function getRandomIndex(array: any[]) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
}

async function getUsername(req: Request, res: Response, next: NextFunction) {
  const firstAdjectiveIndex = getRandomIndex(adjectives);
  const secondAdjectiveIndex = getRandomIndex(adjectives);
  const nounIndex = getRandomIndex(nouns);

  const [firstIx, secIx] = [firstAdjectiveIndex, secondAdjectiveIndex].sort();

  const firstAdjective =
    adjectives[firstIx][getRandomIndex(adjectives[firstIx])];
  const secondAdjective = adjectives[secIx][getRandomIndex(adjectives[secIx])];
  const noun = nouns[nounIndex][getRandomIndex(nouns[nounIndex])];

  const result = `${firstAdjective}${secondAdjective}${noun}`.replace(" ", "");

  return res.json({ username: result });
  // if (customer)
  //     res.json(customer);
  // else
  //     res.sendStatus(404);
}

export default { getUsername };
