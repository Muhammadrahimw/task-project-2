"use client";

import {Button} from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useFetchFunc} from "@/hooks/useAxios";
import {useRef, useState} from "react";

export const AddFlowerComponent = () => {
	const axios = useFetchFunc();
	const [isOpen, setIsopen] = useState<boolean>(false);
	const nameRef = useRef<HTMLInputElement>(null);
	const familyRef = useRef<HTMLInputElement>(null);
	const originRef = useRef<HTMLInputElement>(null);
	const lifespanRef = useRef<HTMLInputElement>(null);
	const descriptionRef = useRef<HTMLInputElement>(null);

	const addFlowerFunc = () => {
		setIsopen(false);
		const role = localStorage.getItem(`role`);
		axios({
			url: `/${role === `admin` ? `1` : `2`}/flowers`,
			method: "POST",
			body: JSON.stringify({
				name: nameRef.current?.value,
				family: familyRef.current?.value,
				origin: originRef.current?.value,
				lifespan: lifespanRef.current?.value,
				description: descriptionRef.current?.value,
			}),
		})
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	};

	return (
		<Dialog onOpenChange={setIsopen} open={isOpen}>
			<DialogTrigger asChild className="w-[10em]">
				<Button variant="outline">Add flower</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add Flower</DialogTitle>
					<DialogDescription>
						Don't forget to check if you have permission
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Name
						</Label>
						<Input ref={nameRef} id="name" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="family" className="text-right">
							Family
						</Label>
						<Input ref={familyRef} id="family" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="origin" className="text-right">
							Origin
						</Label>
						<Input ref={originRef} id="origin" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="lifespan" className="text-right">
							Lifespan
						</Label>
						<Input ref={lifespanRef} id="lifespan" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="description" className="text-right">
							Description
						</Label>
						<Input
							ref={descriptionRef}
							id="description"
							className="col-span-3"
						/>
					</div>
				</div>
				<DialogFooter>
					<Button onClick={addFlowerFunc} type="submit">
						Add Flower
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
