import { z } from "zod";

export const FormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "入力が必須の項目です" })
    .max(50, { message: "文字数が多すぎます" }),
  email: z
    .string()
    .min(1, { message: "入力が必須の項目です" })
    .max(50, { message: "文字数が多すぎます" })
    .email({ message: "メールアドレスの形式で入力してください" }),
  message: z
    .string()
    .min(1, { message: "入力が必須の項目です" })
    .max(3000, { message: "文字数が多すぎます" }),
});

export type FormType = z.infer<typeof FormSchema>;
