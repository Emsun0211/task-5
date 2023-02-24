import EventsCards from "./EventsCards";
import React, { useState, useEffect } from "react";

const Events = () => {
	return (
		<div className='mt-10 w-4/5 m-auto pb-10'>
			<h2 className='text-l font-semibold'>All Products</h2>
			<div className='w-[100%] flex md:justify-between justify-center items-center gap-x-2 flex-wrap'>
				<EventsCards />
			</div>
		</div>
	);
};

export default Events;
