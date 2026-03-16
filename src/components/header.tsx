interface HeaderProps {
    username: string;
}

export const Header = ({ username }: HeaderProps) => {
    return (
        <header className="flex justify-between">
            <div className="m-4">Logo</div>
            <div className="m-4 flex gap-2 items-center">
                {username}
                <span className="bg-blue-600 text-white size-8 rounded-full text-2xl flex justify-center">
                    {username.charAt(0)}
                </span>
            </div>
        </header>
    );
};
