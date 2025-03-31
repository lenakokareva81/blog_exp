import { useEffect } from "react";
import { useStore } from "react-redux";

export const useResetStore = (reset) => {
  const store = useStore();
  useEffect(() => {
    let currentWasLogout = store.getState().app.waslogout;
    return store.subscribe(() => {
      let prevWasLogout = currentWasLogout;
      prevWasLogout = store.getState().app.waslogout;

      if (currentWasLogout !== prevWasLogout) {
        reset();
      }
    });
  }, [reset, store]);
};
