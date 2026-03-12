import { useSyncExternalStore } from "react";
import { useAuthStore } from "@/store/authStore";

export const useIsUserHydrated = () => {
  return useSyncExternalStore(
    (onStoreChange) => {
      const unsub = useAuthStore.persist?.onFinishHydration(onStoreChange);
      return () => unsub?.();
    },
    () => useAuthStore.persist?.hasHydrated() ?? false,
    () => false,
  );
};
