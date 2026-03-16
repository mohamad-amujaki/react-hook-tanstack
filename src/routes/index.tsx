import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: App });

function App() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("");
    const [loginData, setLoginData] = useState({
        username: "",
        password: ",",
    });
    const [isAdmin, setIsAdmin] = useState(false);

    // useEffect adalah jenis React Hook untuk menjalankan sebuah fungsi sebagai efek samping dari sebuah perubahan dependency
    useEffect(() => {
        console.log("Hello from useEffect", loginData.username, counter);
        if (loginData.username === "admin" && loginData.password === "admin") {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, [loginData.username, loginData.password]);
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-75">
                <h2 className="text-4xl text-center">Counter {counter}</h2>
                <button
                    type="button"
                    onClick={() => setCounter(counter + 1)}
                    className="bg-blue-600 rounded-2xl text-white p-2 m-4 w-full"
                >
                    Increment
                </button>
                <button
                    type="button"
                    onClick={
                        () => setCounter((currentCounter) => currentCounter - 1) // Lebih disarankan
                    }
                    className="bg-amber-700 rounded-2xl text-white p-2 m-4 w-full"
                >
                    Decrement
                </button>

                <div>
                    <h2>Hello {name} </h2>
                    <input
                        onChange={(event) => setName(event.target.value)}
                        className="m-4 p-2 border-amber-50"
                    />
                </div>
                <div>
                    <input
                        className="border rounded-2xl border-white m-4 p-2 w-full"
                        onChange={(event) =>
                            setLoginData({
                                ...loginData,
                                username: event.target.value,
                            })
                        }
                    />
                    <input
                        className="border rounded-2xl border-white m-4 p-2 w-full"
                        type="password"
                        onChange={(event) =>
                            setLoginData({
                                ...loginData,
                                password: event.target.value,
                            })
                        }
                    />
                    <h2>Username : {loginData.username} </h2>
                    <h2>Password : {loginData.password} </h2>
                </div>
                <div>
                    <h2 className="text-4xl">
                        {isAdmin ? "Welcome Admin" : "Welcome Guest"}
                    </h2>
                </div>
            </div>
        </div>
    );
}
