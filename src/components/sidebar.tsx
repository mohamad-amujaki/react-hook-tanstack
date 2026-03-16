import { userAtom } from "@/atoms/userAtom";
import { useAtomValue } from "jotai";

export const Sidebar = () => {
    const userData = useAtomValue(userAtom);
    return (
        <div className="flex flex-col h-full bg-blue-600 text-white p-2 w-75">
            <div className="p-2">Dashboard</div>
            <div className="p-2">Course</div>
            <div className="p-2">Setting {userData.username}</div>
        </div>
    );
};
