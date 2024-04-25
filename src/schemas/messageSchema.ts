import { z } from "zod";

export const contentValidation = z
  .string()
  .min(10, "Content must be at least 10 characters")
  .max(300, "Content must be at most 300 characters");

export const messageSchema = z.object({
  content: contentValidation,
});
