import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
  },
};

export const signIn = (
  email: string,
  password: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string) => void,
  router: AppRouterInstance
) => {
  if (email === null || password === null) {
    alert("email or password can not be empty");
    return;
  }

  setLoading(true);

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      router.push("../dashboard");
    })
    .catch((err) => {
      console.log(err);
      const errorCode = err.code;

      switch (errorCode) {
        case "auth/invalid-email":
          setError("Invalid email format.");
          break;
        case "auth/user-disabled":
          setError("This user account has been disabled.");
          break;
        case "auth/user-not-found":
          setError("No user found with this email.");
          break;
        case "auth/wrong-password":
          setError("Incorrect password.");
          break;
        case "auth/invalid-credential":
          setError("Invalid email or password.");
          break;
        case "auth/too-many-requests":
          setError("Too many failed attempts. Please try again later.");
          break;
        case "auth/network-request-failed":
          setError("Network error. Check your internet connection.");
          break;
        default:
          setError("An unexpected error occurred. Please try again.");
      }

      setLoading(false);
    });
};
