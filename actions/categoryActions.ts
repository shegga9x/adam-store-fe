"use server";

import { saveFile } from "@/lib/saveFile";
import { z } from "zod";
import { getMeAction } from "./authActions";
import { USER_ROLE } from "@/enums";
import { TUser } from "@/types";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/png", "image/webp"];

const schema = z.object({
  title: z.string().min(4).max(25),
  image: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .png and .webp formats are supported.",
    ),
});

export async function addCategoryAction(formData: FormData) {
  return;
}

export async function deleteCategoryAction(categoryId: string) {
  return;
}

export async function getAllCategoriesAction() {
  return;
}
