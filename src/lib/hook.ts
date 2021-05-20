// Hoàng Minh Tân 20194367
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useURL(req: string) {
  const [state, setState] = useState(false);
  const redir = useLocation();
  useEffect(() => {
    if (redir.pathname !== "/") {
      setState(true);
    } else {
      setState(false);
    }
  }, [redir.pathname]);

  return state;
}
