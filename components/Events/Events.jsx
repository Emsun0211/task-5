import EventsCards from "./EventsCards";
import React, { useState, useEffect } from "react";

const Events = () => {
	return (
		<div className='mt-10 w-4/5 m-auto pb-10'>
			<h2 className='text-l font-semibold'>All Products</h2>
			<div className='flex justify-between gap-x-2 flex-wrap'>
				<EventsCards />
			</div>
		</div>
	);
};

export default Events;
