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
