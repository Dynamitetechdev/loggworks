import AlertBanner from "../../components/reset/alert";

const EmailSent = () => {
  return (
    <AlertBanner
      title="Password reset email sent."
      sub="A reset link has been sent to your mailbox. Check and click the link to reset password."
    />
  );
};

export default EmailSent;
