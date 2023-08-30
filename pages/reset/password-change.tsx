import AlertBanner from "../../components/reset/alert";

const PasswordChanged = () => {
  return (
    <AlertBanner
      title="Password changed"
      image={"/assets/images/passwordchange.svg"}
      sub="Your password has been updated successfully. Use your new password to Log in"
      emailSent={false}
    />
  );
};

export default PasswordChanged;
