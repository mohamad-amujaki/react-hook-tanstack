interface SidebarProps {
    username: string;
}
export const Sidebar = ({ username }: SidebarProps) => {
    return (
        <div className="flex flex-col h-full bg-blue-600 text-white p-2 w-75">
            <div className="p-2">Dashboard</div>
            <div className="p-2">Course</div>
            <div className="p-2">Setting {username}</div>
        </div>
    );
};
