import { z } from "zod";

export const productZodType = z.object({
  name: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.string(),
  images: z.string(),
  size: z.string(),
});
