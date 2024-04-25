import { z } from "zod";

export const acceptMessageValidation = z.string();

export const acceptMessageSchema = z.object({
  acceptMessages: acceptMessageValidation,
});
