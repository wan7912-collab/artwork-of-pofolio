import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 後台沒填的欄位可能是空字串或 null，一律視為「沒有」
const optional = z.string().nullish();

const artworks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artworks' }),
  schema: z.object({
    title_zh: z.string(),
    title_en: optional,
    year: z.coerce.number(),
    series: optional,
    medium_zh: optional,
    medium_en: optional,
    size: optional,
    images: z.array(z.string()).min(1),
    description_zh: optional,
    description_en: optional,
  }),
});

const series = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/series' }),
  schema: z.object({
    title_zh: z.string(),
    title_en: optional,
    description_zh: optional,
    description_en: optional,
    order: z.coerce.number().default(999),
  }),
});

export const collections = { artworks, series };
