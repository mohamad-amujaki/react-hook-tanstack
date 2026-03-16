import { createFileRoute } from "@tanstack/react-router";
import { useHydrateAtoms } from "jotai/utils";
import { userAtom } from "@/atoms/userAtom";
import { Dashboard } from "@/components/dashboard";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

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

	// Dijalankan atau diset pada saat hydration
	useHydrateAtoms([[userAtom, { username: data.username }]]);

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
