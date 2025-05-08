import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { loginSchema } from '@/utils/validation';

type LoginFormData = {
  password: string;
};

const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data)
    alert('ورود موفقیت‌آمیز بود!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input placeholder="رمز عبور" type="password" {...register('password')} />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      <Button type="submit" className="w-full">
        ورود
      </Button>
    </form>
  );
};

export default LoginForm;
