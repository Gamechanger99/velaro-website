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

const speisekarte = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/speisekarte" }),
  schema: z.object({
    kategorie: z.string(),
    label: z.string(),
    items: z.array(z.object({
      label: z.string(),
      subs: z.array(z.string()).nullable().optional(),
      default: z.boolean().optional(),
      badge: z.string().optional(),
      cascade: z.array(z.object({
        question: z.string(),
        options: z.array(z.string()),
      })).optional(),
    })),
  }),
});

export const collections = { maerkte, speisekarte };
