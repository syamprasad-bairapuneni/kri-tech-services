export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  message: string;
};

export type FormStatus = "idle" | "submitting" | "success" | "error";
