import "react-phone-input-2/lib/style.css";
import ReactPhoneInput from "react-phone-input-2";
import AuthForm from "../../components/auth/authForm";
const Login = () => {
  return <AuthForm title="Log In" login={true} route={"/verify"} />;
};
export default Login;
