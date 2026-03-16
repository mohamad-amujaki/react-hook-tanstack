import { useContext } from "react";
import { Avatar } from "./ui/avatar";
import { UserContext } from "@/context/userContext";

export const Header = () => {
    const data = useContext(UserContext);

    return (
        <header className="flex justify-between">
            <div className="m-4">Logo</div>
            <div className="m-4 flex gap-2 items-center">
                {data.username}
                <Avatar username={data.username} />
            </div>
        </header>
    );
};
