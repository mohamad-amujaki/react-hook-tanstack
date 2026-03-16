import { UserContext } from "@/context/userContext";
import { useContext } from "react";

export const Sidebar = () => {
    const data = useContext(UserContext);
    return (
        <div className="flex flex-col h-full bg-blue-600 text-white p-2 w-75">
            <div className="p-2">Dashboard</div>
            <div className="p-2">Course</div>
            <div className="p-2">Setting {data.username}</div>
        </div>
    );
};
