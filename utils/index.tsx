"use client";

import {HeaderComponent} from "@/components/header";
import {useEffect, useState} from "react";

export const getRoleFunc = (props: string) => {
	const [role, setRole] = useState<string>("2");
	setRole(localStorage.getItem(`${props}`) || "2");
	useEffect(() => {}, []);
	return;
};
