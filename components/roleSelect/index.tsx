"use client";

import {useEffect, useState} from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function RoleSelect() {
	const [selected, setSelected] = useState<string>(`user`);

	useEffect(() => {
		localStorage.setItem(`role`, localStorage.getItem(`role`) || `${selected}`);
		setSelected(localStorage.getItem(`role`) || selected);
	}, []);
	useEffect(() => {
		localStorage.setItem(`role`, `${selected}`);
	}, [selected]);

	return (
		<Select
			onValueChange={(value) => {
				setSelected(value);
			}}
			value={selected}>
			<SelectTrigger className="w-[15em]">
				<SelectValue placeholder="Choose a role" defaultValue={selected} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Roles</SelectLabel>
					<SelectItem value="user">User</SelectItem>
					<SelectItem value="admin">Admin</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
