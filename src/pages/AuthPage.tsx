import AuthForm from "@/components/auth/AuthForm";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import AuthLayout from "@/components/layouts/AuthLayout";
import { useAuthStore } from "@/store/authStore";

export default function AuthPage() {
  
  return (
    <AuthLayout
    title="ورود و ثبت نام"
    children={<CheckAuthLevel />}
    />
  )
}


function CheckAuthLevel() {
  const { authLevel } = useAuthStore();

  switch(authLevel) {
    case 'auth':
      return <AuthForm />
    case 'login':
      return <LoginForm />
    case 'register':
      return <RegisterForm />
  }
}