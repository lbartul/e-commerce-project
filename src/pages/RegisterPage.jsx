import { useForm } from "react-hook-form";
import { Link } from "react-router";

export default function RegisterPage() {
  const { 
    register, 
    handleSubmit, 
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      role_id: "customer"
    },
    mode: "all"
  });

  const selectedRole = watch("role_id");

  const onSubmit = (data) => {
    console.log("Form Başarıyla Doğrulandı, Veriler:", data);
    alert("Validasyon başarılı! Konsola bakabilirsin.");
  };

  return (
    <div className="flex items-center justify-center pt-30 pb-50">
      
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Sign Up</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account? <Link to="/login" className="text-blue-600 cursor-pointer hover:underline">Login</Link>
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              {...register("name", { 
                required: "İsim alanı zorunludur", 
                minLength: { value: 3, message: "İsim en az 3 karakter olmalı" } 
              })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Full Name" 
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              {...register("email", { 
                required: "Email zorunludur",
                pattern: { 
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
                  message: "Geçerli bir email adresi giriniz" 
                }
              })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ornek@email.com" 
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              {...register("password", { 
                required: "Şifre zorunludur",
                minLength: { value: 8, message: "Şifre en az 8 karakter olmalı" },
                pattern: { 
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/, 
                    message: "Şifre sayı, büyük/küçük harf ve özel karakter içermelidir" 
                }
              })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********" 
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input 
              type="password" 
              {...register("confirmPassword", { 
                required: "Şifre tekrarı zorunludur",
                validate: (val) => {
                    if (watch('password') !== val) {
                        return "Şifreler eşleşmiyor";
                    }
                }
              })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********" 
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Rol Seçiniz</label>
            <select 
              {...register("role_id")}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="customer">Customer</option>
              <option value="store">Store</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {selectedRole === "store" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Store Name</label>
                <input 
                  type="text" 
                  {...register("store_name", { 
                    required: "Mağaza adı zorunludur", 
                    minLength: { value: 3, message: "Mağaza adı en az 3 karakter olmalı" } 
                  })}
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Store Name" 
                />
                {errors.store_name && <p className="text-red-500 text-xs mt-1">{errors.store_name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Store Phone</label>
                <input 
                  type="tel" 
                  {...register("store_phone", { 
                    required: "Telefon zorunludur",
                    pattern: { 
                      value: /^(\+90|0)?5\d{9}$/, 
                      message: "Geçerli bir TR numarası giriniz (+90 5...)" 
                    }
                  })}
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+90 5xx xxx xx xx" 
                />
                {errors.store_phone && <p className="text-red-500 text-xs mt-1">{errors.store_phone.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Store Tax ID</label>
                <input 
                  type="text" 
                  {...register("store_tax_no", { 
                    required: "Vergi no zorunludur",
                    pattern: { 
                      value: /^T\d{4}V\d{6}$/, 
                      message: "Format T1234V123456 şeklinde olmalı" 
                    } 
                  })}
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="T1234V123456" 
                />
                {errors.store_tax_no && <p className="text-red-500 text-xs mt-1">{errors.store_tax_no.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Store Bank Account (IBAN)</label>
                <input 
                  type="text" 
                  {...register("store_bank_account", { 
                    required: "IBAN zorunludur", 
                    minLength: { value: 15, message: "Geçerli bir IBAN giriniz" }
                  })}
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="TR___________________________" 
                />
                {errors.store_bank_account && <p className="text-red-500 text-xs mt-1">{errors.store_bank_account.message}</p>}
              </div>
            </>
          )}

          <button 
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>

        </form>
      </div>
    </div>
  );
}