import AlertBanner from "../../components/reset/alert";

const EmailSent = () => {
  return (
    <AlertBanner
      title="Password reset email sent."
      image={"/assets/images/email-imag.svg"}
      sub="A reset link has been sent to your mailbox. Check and click the link to reset password."
      emailSent={true}
    />
  );
};

export default EmailSent;
