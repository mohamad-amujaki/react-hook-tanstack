import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Dashboard } from "@/components/dashboard";

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
        <div className="flex flex-col">
            <Header username={data.username} />
            <div className="flex h-screen">
                <Sidebar username={data.username} />
                <Dashboard username={data.username} />
            </div>
        </div>
    );
}
