import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Dashboard } from "@/components/dashboard";
import { UserContext } from "@/context/userContext";

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
    return (
        <UserContext.Provider value={{ username: data.username }}>
            <div className="flex flex-col">
                <Header />
                <div className="flex h-screen">
                    <Sidebar />
                    <Dashboard />
                </div>
            </div>
        </UserContext.Provider>
    );
}
