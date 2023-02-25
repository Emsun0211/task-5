import Image from "next/image";
import React from "react";
import HeroCard from "./HeroCard";

const Hero = () => {
	return (
		// <div className='mt-10  w-[100%] sm:w-4/5 m-auto '>
		<div className='w-4/5 m-auto mt-10 flex flex-col'>
			<h2 className='text-l font-semibold'>Featured Products</h2>
			<div className=' md:flex-row flex-col flex md:justify-between justify-center gap-x-10'>
				<HeroCard />
			</div>
		</div>
	);
};

export default Hero;
