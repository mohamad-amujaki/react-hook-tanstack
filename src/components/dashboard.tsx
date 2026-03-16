interface DashboardProps {
    username: string;
}

export const Dashboard = ({ username }: DashboardProps) => {
    return (
        <main className="flex flex-1 bg-white p-2 ml-4 h-full">
            <div className="text-black text-2xl">Welcome Back, {username}</div>
        </main>
    );
};
