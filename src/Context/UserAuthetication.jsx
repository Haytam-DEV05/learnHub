import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../util/supabase";

const UserContext = createContext();

// custom hook
// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // get user session
  const getUser = async () => {
    const { data } = await supabase.auth.getUser();
    setUser(data?.user || null);
    setLoading(false);
  };

  useEffect(() => {
    getUser();
    // HADXI MAZAL MAFHAMTOUCH MAZYANNE =>
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // login
  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return { data, error };
  };

  // signup
  const signUp = async (email, password, metadata) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata,
      },
    });

    return { data, error };
  };

  // logout
  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};