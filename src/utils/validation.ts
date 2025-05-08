import { z } from 'zod';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(\+98|0)?9\d{9}$/;

export const authSchema = z.object({
  emailOrPhone: z
    .string()
    .min(5, 'ایمیل یا موبایل معتبر نیست')
    .refine((value) => emailRegex.test(value) || phoneRegex.test(value), {
      message: 'ایمیل یا موبایل معتبر نیست',
    }),
});
export const loginSchema = z.object({
  password: z.string().min(6, 'رمز عبور باید حداقل 6 کاراکتر باشد'),
});

export const registerSchema = loginSchema.extend({
  confirmPassword: z.string().min(6, 'تکرار رمز عبور الزامی است'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'رمز عبور و تکرار آن یکسان نیستند',
  path: ['confirmPassword'],
});
