interface Avatarprops {
    username: string;
}
export const Avatar = ({ username }: Avatarprops) => {
    return (
        <div className="flex size-8 font-medium bg-blue-700 text-white rounded-full justify-center items-center">
            <div>{username.charAt(0).toUpperCase()}</div>
        </div>
    );
};
