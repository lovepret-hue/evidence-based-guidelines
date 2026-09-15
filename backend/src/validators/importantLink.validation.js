
import { z } from "zod";


// ==========================================
// CREATE IMPORTANT LINK VALIDATION
// ==========================================

export const createImportantLinkSchema = z
  .object({
    title: z
      .string()
      .trim()
      .min(1, "Title is required"),

    sub_title: z
      .string()
      .trim()
      .min(1, "Sub title is required"),

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
      .min(1, "Icon is required"),

    status: z
      .union([z.boolean(), z.string()])
      .transform((value) => {
        if (typeof value === "boolean") return value;

        return value === "true";
      })
      .default(true),
  })

  // Either PDF OR external link is required
  .refine(
    (data) => {
      const hasExternalLink = !!data.external_link;
      const hasPdf = !!data.pdf;

      return hasExternalLink || hasPdf;
    },
    {
      message: "Either external link or PDF is required",
      path: ["external_link"],
    }
  )

  // Both are NOT allowed
  .refine(
    (data) => {
      const hasExternalLink = !!data.external_link;
      const hasPdf = !!data.pdf;

      return !(hasExternalLink && hasPdf);
    },
    {
      message: "Provide either external link or PDF, not both",
      path: ["external_link"],
    }
  );


// ==========================================
// UPDATE IMPORTANT LINK VALIDATION
// ==========================================

