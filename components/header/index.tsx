"use client";

import {AddFlowerComponent} from "../adding";
import {RoleSelect} from "../roleSelect";
import {Input} from "../ui/input";
import {useSearchStore} from "../store/searchStore";

export const HeaderComponent = () => {
	const setSearchText = useSearchStore((state) => state.setSearchText);

	return (
		<header className="flex items-center justify-between gap-4">
			<nav>
				<Input
					onChange={(e) => setSearchText(e.target.value)}
					placeholder="Search"
					className="pl-3 w-[20em]"
				/>
			</nav>
			<nav className="flex items-center gap-4">
				<AddFlowerComponent />
				<RoleSelect />
			</nav>
		</header>
	);
};
