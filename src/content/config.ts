import { defineCollection, z } from "astro:content";

const maerkte = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    datum: z.string(), // ISO-Format: "2026-06-14"
    uhrzeit: z.string(), // z.B. "08:00 - 14:00 Uhr"
    ort: z.string(), // Kurzname
    adresse: z.string(), // Vollständige Adresse für Google Maps
  }),
});

export const collections = { maerkte };
