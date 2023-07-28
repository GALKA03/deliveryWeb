import { createContext, useState } from "react";
import { useRouter } from "next/navigation";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  const registerUser = async ({ name, email, password }) => {
    try {
      const response = await fetch(`${process.env.API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/");
        alert("Registration successful");
      } else {
        setError(data?.message || "Registration failed. Try again.");
      }
    } catch (error) {
      setError("An error occurred during registration. Try again.");
    }
  };

  const addNewAddress = async (address) => {
    try {
      const response = await fetch(`${process.env.API_URL}/api/address`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(address),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/");
      } else {
        setError(data?.message || "Address creation failed. Try again.");
      }
    } catch (error) {
      setError("An error occurred while adding the address. Try again.");
    }
  };

  const clearErrors = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        setUser,
        registerUser,
        clearErrors,
        addNewAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;


