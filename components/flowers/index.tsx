"use client";

import {flowerType} from "@/@types";
import {useFetchFunc} from "@/hooks/useAxios";
import {useEffect, useState} from "react";
import {Button} from "../ui/button";
import {EditFlowerComponent} from "../editing";
import {useSearchStore} from "../store/searchStore";

export const FlowersComponent = () => {
	const axios = useFetchFunc();
	const [data, setData] = useState<flowerType[]>([]);
	const searchText = useSearchStore((state) => state.searchText);
	const [filteredData, setFilteredData] = useState<flowerType[]>([]);

	useEffect(() => {
		const role = localStorage.getItem(`role`);
		axios({url: `/${role === `admin` ? `1` : `2`}/flowers`})
			.then((allData) => setData(allData))
			.catch((error) => console.log(error));
	}, []);

	const deleteFunc = (id: number) => {
		const role = localStorage.getItem(`role`);
		axios({
			url: `/${role === `admin` ? `1` : `2`}/flowers/${id}`,
			method: "DELETE",
		})
			.then((info) => {
				console.log(info);
				const newData = data.filter((flower: flowerType) => flower.id !== id);
				setData(newData);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		if (searchText.length > 0) {
			setFilteredData(
				data.filter((flower: flowerType) => flower.name.includes(searchText))
			);
		} else {
			setFilteredData(data);
		}
	}, [searchText, data]);

	return (
		<section className="grid grid-cols-4 gap-4 mt-4">
			{filteredData
				? filteredData.map((flower) => (
						<div
							className="w-full rounded-md border px-6 py-4 flex flex-col justify-between"
							key={flower.id}>
							<strong className="text-2xl">{flower.name}</strong>
							<p className="text-base mt-3">
								<span className="text-xl">{flower.family}</span> oilasidan
							</p>
							<p className="text-base mt-2">
								<span className="text-xl">{flower.origin}</span> da mavjud
							</p>
							<p className="text-base mt-2">
								<span className="text-xl">{flower.lifespan}</span> muddat yashay
								oladi
							</p>
							<p className="text-base mt-2">{flower.description}</p>
							<div className="flex items-center justify-between gap-2 mt-5">
								<Button
									onClick={() => deleteFunc(flower.id)}
									className="w-full"
									variant={"outline"}>
									Delete
								</Button>
								<EditFlowerComponent flower={flower} />
							</div>
						</div>
				  ))
				: ""}
			<div></div>
		</section>
	);
};
