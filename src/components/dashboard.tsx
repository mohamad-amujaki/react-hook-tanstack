import { userAtom } from "@/atoms/userAtom";
import { useAtomValue } from "jotai";

export const Dashboard = () => {
    const userData = useAtomValue(userAtom);
    return (
        <main className="flex flex-1 bg-white p-2 ml-4 h-full">
            <div className="text-black text-2xl">
                Welcome Back, {userData.username}
            </div>
        </main>
    );
};
