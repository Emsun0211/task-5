import Image from "next/image";
import React from "react";

const Network = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='text-center mb-10'>
				<h2 className='mb-5 text-4xl font-bold'>
					Huge Global Network of Fast VPN
				</h2>
				<p className='text-[18px] tracking-wide '>
					See LaslesVPN everywhere to make it easier for you when you move
					locations.
				</p>
			</div>
			<div className='mt-10'>
				<Image src={"/Huge.svg"} width={1000} height={500} />
			</div>

			<div className='mt-10'>
				<Image src={"/Sponsored.svg"} width={1000} height={250} />
			</div>
		</div>
	);
};

export default Network;
