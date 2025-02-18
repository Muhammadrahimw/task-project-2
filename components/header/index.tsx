import {AddFlowerComponent} from "../adding";
import {RoleSelect} from "../roleSelect";
import {Input} from "../ui/input";

export const HeaderComponent = () => {
	return (
		<header className="flex items-center justify-between gap-4">
			<nav>
				<Input placeholder="Search" className="pl-3 w-[20em]" />
			</nav>
			<nav className="flex items-center gap-4">
				<AddFlowerComponent />
				<RoleSelect />
			</nav>
		</header>
	);
};
