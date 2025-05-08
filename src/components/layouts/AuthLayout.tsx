interface AuthLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, description, children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        {description && <p className="text-sm text-gray-500">{description}</p>}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
