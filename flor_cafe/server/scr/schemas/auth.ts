import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Insira um email' })
    .email('Email inválido'),
  senha: z.string({ required_error: 'Insira uma senha' }),
});
