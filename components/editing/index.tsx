"use client";

import {flowerType} from "@/@types";
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

type flowerFCType = {
	flower: flowerType;
};

export const EditFlowerComponent: React.FC<flowerFCType> = ({flower}) => {
	const axios = useFetchFunc();
	const [isOpen, setIsopen] = useState<boolean>(false);
	const nameRef = useRef<HTMLInputElement>(null);
	const familyRef = useRef<HTMLInputElement>(null);
	const originRef = useRef<HTMLInputElement>(null);
	const lifespanRef = useRef<HTMLInputElement>(null);
	const descriptionRef = useRef<HTMLInputElement>(null);

	const editFlowerFunc = () => {
		setIsopen(false);
		const role = localStorage.getItem(`role`);

		console.log(lifespanRef.current?.value);

		axios({
			url: `/${role === `admin` ? `1` : `2`}/flowers/${flower.id}`,
			method: "PUT",
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
			<DialogTrigger asChild className="w-full">
				<Button variant="outline">Edit</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit Flower</DialogTitle>
					<DialogDescription>
						Don't forget to check if you have permission
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Name
						</Label>
						<Input
							defaultValue={flower.name}
							ref={nameRef}
							id="name"
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="family" className="text-right">
							Family
						</Label>
						<Input
							defaultValue={flower.family}
							ref={familyRef}
							id="family"
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="origin" className="text-right">
							Origin
						</Label>
						<Input
							defaultValue={flower.origin}
							ref={originRef}
							id="origin"
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="lifespan" className="text-right">
							Lifespan
						</Label>
						<Input
							defaultValue={flower.lifespan}
							ref={lifespanRef}
							id="lifespan"
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="description" className="text-right">
							Description
						</Label>
						<Input
							defaultValue={flower.description}
							ref={descriptionRef}
							id="description"
							className="col-span-3"
						/>
					</div>
				</div>
				<DialogFooter>
					<Button onClick={editFlowerFunc} type="submit">
						Edit Flower
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
