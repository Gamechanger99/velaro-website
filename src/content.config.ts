import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const maerkte = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/maerkte" }),
  schema: z.object({
    name: z.string(),
    datum: z.string(),
    uhrzeit: z.string(),
    ort: z.string(),
    adresse: z.string(),
  }),
});

export const collections = { maerkte };
