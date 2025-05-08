import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  mobile: z.string().min(11, "شماره موبایل باید 11 رقم باشد").regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
});

type FormData = z.infer<typeof schema>;

const AuthForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("شماره موبایل:", data.mobile);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto mt-20 p-4 border rounded-md shadow-md">
      <h2 className="text-2xl mb-4 text-center">ورود با شماره موبایل</h2>

      <input
        {...register("mobile")}
        type="text"
        placeholder="شماره موبایل"
        className="w-full p-2 mb-2 border rounded-md"
      />
      {errors.mobile && (
        <p className="text-red-500 text-sm">{errors.mobile.message}</p>
      )}

      <button
        type="submit"
        className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        تایید
      </button>
    </form>
  );
};

export default AuthForm;
