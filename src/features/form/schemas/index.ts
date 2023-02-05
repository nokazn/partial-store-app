import { z } from 'zod';

export const formSchema = z.object({
  familyName: z.string(),
  givenName: z.string(),
  sex: z.union([z.literal('male'), z.literal('female'), z.literal('none'), z.literal(null)], {
    errorMap: () => {
      return { message: '性別を選択してください' };
    },
  }),
  email: z.string().email({ message: 'メールアドレスの形式が正しくありません' }),
});

export type FormSchema = z.infer<typeof formSchema>;
