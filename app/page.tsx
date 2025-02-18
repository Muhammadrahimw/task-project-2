import {FlowersComponent} from "@/components/flowers";
import {HeaderComponent} from "@/components/header";

const Home = () => {
	return (
		<section className="w-[95%] mx-auto py-5">
			<HeaderComponent />
			<FlowersComponent />
		</section>
	);
};

export default Home;
