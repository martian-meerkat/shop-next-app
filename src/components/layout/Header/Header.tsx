"use client";

import { type FC } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useIsUserHydrated } from "@/hooks/useHydration";
import styles from "./Header.module.scss";

const Header: FC = () => {
  const { user, logout } = useAuthStore();
  const pathname = usePathname();
  const router = useRouter();
  const isUserHydrated = useIsUserHydrated();

  const getHeaderContent = () => {
    if (user) {
      return (
        <>
          <a onClick={logout}>Logout</a>
          <div>
            <span className={styles.label}>{user.firstName}</span>
            <span className={styles.label}>{user.lastName}</span>
          </div>
        </>
      );
    }

    if (pathname === "/login") {
      return (
        <>
          <nav className={styles.label}>
            <a onClick={() => router.back()}>Back</a>
          </nav>
        </>
      );
    }

    return (
      <>
        <nav className={styles.label}>
          <Link href="/login">Login</Link>
        </nav>
      </>
    );
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {isUserHydrated ? getHeaderContent() : null}
      </div>
    </header>
  );
};

export default Header;
