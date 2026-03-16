import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Dashboard } from "@/components/dashboard";
import { useSetAtom } from "jotai";
import { userAtom } from "@/atoms/userAtom";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
    component: App,
    loader: () => {
        // Ambil data dari API
        return {
            username: "mohamad-amujaki",
        };
    },
});

function App() {
    const data = Route.useLoaderData();
    const setUserData = useSetAtom(userAtom);

    useEffect(() => {
        setUserData({ username: data.username });
    }, [data, setUserData]);

    return (
        <div className="flex flex-col">
            <Header />
            <div className="flex h-screen">
                <Sidebar />
                <Dashboard />
            </div>
        </div>
    );
}
