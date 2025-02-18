"use client";

import {createContext, useContext, useState} from "react";

interface AppContextType {
	user: string;
	setUser: (user: string) => void;
}

// Default qiymat
const AppContext = createContext<AppContextType | null>(null);

// Provider komponent
export function AppProvider({children}: {children: React.ReactNode}) {
	const [user, setUser] = useState("Guest");

	return (
		<AppContext.Provider value={{user, setUser}}>
			{children}
		</AppContext.Provider>
	);
}

// Contextdan foydalanish uchun hook
export function useAppContext() {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppContext must be used within an AppProvider");
	}
	return context;
}
