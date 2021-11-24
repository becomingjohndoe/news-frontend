// create userContext
import { createContext, useState } from "react";

export const userContext = createContext();

export const UserProvider = (props) => {
	const [user, setUser] = useState("jessjelly");
	const isLoggedIn = () => {
		return user !== undefined;
	};

	const logOut = () => {
		setUser({});
	};

	return (
		<userContext.Provider value={{ user, setUser, isLoggedIn, logOut }}>
			{props.children}
		</userContext.Provider>
	);
};
