import { UserContext } from "@/context/userContext";
import { useContext } from "react";

export const Dashboard = () => {
    const data = useContext(UserContext);
    return (
        <main className="flex flex-1 bg-white p-2 ml-4 h-full">
            <div className="text-black text-2xl">
                Welcome Back, {data.username}
            </div>
        </main>
    );
};
