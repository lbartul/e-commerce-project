import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

export default function LoginPage() {
  const navigate = useNavigate();

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Login Denemesi:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Giriş Başarılı! Ana sayfaya yönlendiriliyorsunuz.");
    navigate("/"); 
  };

  return (
    <div className="flex items-center justify-center pt-30 pb-50">
      
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Login</h2>
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account? <Link to="/signup" className="text-blue-600 cursor-pointer hover:underline">Sign up here</Link>
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              {...register("email", { required: "Email zorunludur" })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ornek@email.com" 
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              {...register("password", { required: "Şifre zorunludur" })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********" 
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <label className="ml-2 text-gray-600">Remember me</label>
            </div>
            <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200 disabled:bg-gray-400"
          >
            {isSubmitting ? "Giriş Yapılıyor..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
}