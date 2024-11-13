"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const login = async () => {
        await gitHubSignIn();
    };

    const logout = async () => {
        await firebaseSignOut();
    };

    useEffect(() => {
        if (user) {
            // Redirect to the shopping list page after login
            window.location.href = "/week-10/shopping-list";
        }
    }, [user]);

    return (
        <div className="bg-gray-200 min-h-screen flex p-4 space-x-4">
            <div>
                {user ? (
                    <div>
                        <p>Welcome, {user.displayName}!</p>
                        <button onClick={logout}>Sign Out</button>
                        <Link href="/week-10/shopping-list" className="text-blue-500 underline">
                            Go to Shopping List
                        </Link>
                    </div>
                ) : (
                    <button onClick={login}>Sign In</button>
                )}
            </div>
        </div>
    );
}