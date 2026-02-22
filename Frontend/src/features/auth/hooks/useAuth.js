import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import { Login } from "../services/api.auth.jsx";
import { Register } from "../services/api.auth.jsx";

export const useAuth = () => {
    const { User, setUser, Loading, setLoading } = useContext(AuthContext);

    const handlelogin = async (username, password) => {
        try {
            setLoading(true);
            const response = await Login(username, password);
            // response is { user, token }
            setUser(response.user ?? response);
        } catch (error) {
            console.error("Login error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleregister = async (username, email, password) => {
        try {
            setLoading(true);
            const response = await Register(username, email, password);
            // response is just user object (not wrapped in { user })
            setUser(response.user);
        } catch (error) {
            console.error("Register error:", error);
        } finally {
            setLoading(false);
        }
    };

    return { User, setUser, Loading, setLoading, handlelogin, handleregister };
}