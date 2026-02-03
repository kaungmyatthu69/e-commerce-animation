"use server";

import { z } from "zod";
import { api } from "@/services/api";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

export type LoginState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[] | undefined>;
  data?: {
    accessToken: string;
    refreshToken: string;
    user: any;
  } | null;
};

export async function loginAction(
  prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = formData.get("email");
  const password = formData.get("password");

  // Validate form data
  const result = loginSchema.safeParse({ email, password });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
      message: "Invalid input",
    };
  }

  try {
    const { access_token, refresh_token } = await api.login({
      email: email as string,
      password: password as string,
    });

    const userProfile = await api.getProfile(access_token);

    return {
      success: true,
      message: "Login successful",
      data: {
        accessToken: access_token,
        refreshToken: refresh_token,
        user: userProfile,
      },
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Something went wrong. Please try again.",
    };
  }
}
