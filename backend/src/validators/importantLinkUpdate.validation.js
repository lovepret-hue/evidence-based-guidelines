
import { z } from "zod";

export const updateImportantLinkValidation = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title cannot be empty")
    .optional(),

  sub_title: z
    .string()
    .trim()
    .min(1, "Sub title cannot be empty")
    .optional(),

  external_link: z.preprocess(
    (value) => {
      if (value === "") {
        return null;
      }

      return value;
    },
    z
      .string()
      .trim()
      .url("External link must be a valid URL")
      .optional()
      .nullable()
  ),

  pdf: z
    .string()
    .optional()
    .nullable(),

  icon: z
    .string()
    .trim()
    .min(1, "Icon cannot be empty")
    .optional(),

  status: z
    .union([z.boolean(), z.string()])
    .transform((value) => {
      if (typeof value === "boolean") return value;

      return value === "true";
    })
    .optional(),
});

