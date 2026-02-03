"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[] | undefined>;
};

export async function submitContactForm(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Validate form data
  const result = contactSchema.safeParse({ name, email, message });

  if (!result.success) {
    return {
      success: false,
      message: "Please fix the errors below",
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Simulate success
  return {
    success: true,
    message: "Message sent successfully!",
  };
}
