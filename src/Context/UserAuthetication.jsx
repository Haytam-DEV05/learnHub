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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getUser();
    // HADXI MAZAL MAFHAMTOUCH MAZYANNE =>
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      },
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
    console.log(error);
    if (error) return { data, error };

    if (data?.user) {
      await supabase.from("profiles").insert({
        id: data.user.id,
        name: metadata.firstName + " " + metadata.lastName,
        role: metadata.role,
        speciality: metadata.speciality || null,
      });
    }
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
