// app/(auth)/login/page.tsx
import { Metadata } from "next";
import LoginForm from "@/components/LoginForm";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Вход в систему",
  description: "Страница авторизации",
};

export default function LoginPage() {
  return (
    <div className={styles.loginForm}>
      <h1>Login</h1>
      <br />
      <LoginForm />
    </div>
  );
}
