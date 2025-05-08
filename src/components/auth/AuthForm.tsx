import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/store/authStore';
import { authSchema } from '@/utils/validation';

type AuthFormData = {
  emailOrPhone: string;
};

const AuthForm: React.FC = () => {
  const { setEmailOrPhone, setCustomerExists ,setAuthLevel } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (data: AuthFormData) => {
    setEmailOrPhone(data.emailOrPhone);

    // شبیه‌سازی چک کردن از سرور
    const exists = await checkCustomerExists(data.emailOrPhone);
   
    setCustomerExists(exists);
    if(exists) {
      setAuthLevel('login')
    } else {
      setAuthLevel('register')
    }
  };

  // تابع شبیه‌سازی درخواست به سرور
  const checkCustomerExists = async (emailOrPhone: string) => {
    // اینجا می‌تونی درخواست واقعی به API بزنی
    return emailOrPhone === 'test@example.com'; // فرضاً کاربر وجود دارد
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        placeholder="ایمیل یا موبایل"
        {...register('emailOrPhone')}
        className="w-full"
      />
      {errors.emailOrPhone && (
        <p className="text-red-500">{errors.emailOrPhone.message}</p>
      )}
      <Button type="submit" className="w-full">
        ادامه
      </Button>
    </form>
  );
};

export default AuthForm;
