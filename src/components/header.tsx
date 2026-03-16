import { useAtomValue } from "jotai";
import { Avatar } from "./ui/avatar";
import { userAtom } from "@/atoms/userAtom";

export const Header = () => {
    const userData = useAtomValue(userAtom);
    return (
        <header className="flex justify-between">
            <div className="m-4">Logo</div>
            <div className="m-4 flex gap-2 items-center">
                {userData.username}
                <Avatar username={userData.username} />
            </div>
        </header>
    );
};
