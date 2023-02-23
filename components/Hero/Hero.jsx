import Image from "next/image";
import React from "react";
import HeroCard from "./HeroCard";

const Hero = () => {
	return (
		<div className='mt-10 w-4/5 m-auto '>
			<h2 className='text-l font-semibold'>Featured Products</h2>
			<div className='flex justify-between gap-x-10'>
				<HeroCard />
			</div>
		</div>
	);
};

export default Hero;
