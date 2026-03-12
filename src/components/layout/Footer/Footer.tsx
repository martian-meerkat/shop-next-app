"use client";

import { useAuthStore } from "@/store/authStore";
import { useIsUserHydrated } from "@/hooks/useHydration";
import styles from "./Footer.module.scss";

const Footer = () => {
  const { user } = useAuthStore();
  const isUserHydrated = useIsUserHydrated();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {isUserHydrated && (
          <>
            <p>{new Date().getFullYear()}</p>
            {user?.email && <p>Logged in as {user.email}</p>}
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
