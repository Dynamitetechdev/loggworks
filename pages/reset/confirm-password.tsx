import ResetForm from "../../components/reset/form";

const ConfirmNewPassword = () => {
  return (
    <ResetForm
      title="Reset Password"
      sub={"Please enter your new password for login"}
      newPassword={true}
    />
  );
};

export default ConfirmNewPassword;
