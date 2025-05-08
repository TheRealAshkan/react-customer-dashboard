// src/components/RegisterForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { registerSchema } from '@/utils/validation';

type RegisterFormData = {
  password: string;
  confirmPassword: string;
};

const RegisterForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log(data)
    alert('ثبت‌نام موفقیت‌آمیز بود!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input placeholder="رمز عبور" type="password" {...register('password')} />
      <Input placeholder="تکرار رمز عبور" type="password" {...register('confirmPassword')} />
      {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
      <Button type="submit" className="w-full">
        ثبت‌نام
      </Button>
    </form>
  );
};

export default RegisterForm;
