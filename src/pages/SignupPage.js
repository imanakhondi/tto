import SignupForm from "../../components/signup/SignupForm";
import styles from "./signupPage.module.css";
const SignupPage = () => {
  return (
    <main className={styles.container}>
      <SignupForm />
    </main>
  );
};

export default SignupPage;
