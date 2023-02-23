import Image from "next/image";
import Link from "next/link";
import React from "react";

const Plans = () => {
	return (
		<div className='mt-20 '>
			<div className='text-center '>
				<h2 className='mb-5 text-4xl font-bold'>Choose Your Plan</h2>
				<p className='text-[18px] tracking-wide '>
					Let's choose the package that is best for you and explore it happily
					and cheerfully.
				</p>
			</div>

			<div className='flex justify-center items-center gap-x-20 mt-20 mb-40'>
				<div className='border border-[#EOEOEO] pt-16 px-10 pb-10 gap-10 rounded h-[44rem]'>
					<div className='flex items-center flex-col  mb-10'>
						<Image src={"/Free.png"} width={100} height={100} />
						<p className='font-semibold text-[20px] text-[20px]'>Free Plan</p>
					</div>
					<div className=''>
						<p className='flex gap-5 mb-5 text-[#4F5665]'>
							<Image src={"/Group1223.png"} width={24} height={12} /> Unlimited
							Bandwitch
						</p>
						<p className='flex gap-5 mb-5 text-[#4F5665]'>
							<Image src={"/Group1223.png"} width={24} height={12} /> Encrypted
							Connection
						</p>
						<p className='flex gap-5 mb-5 text-[#4F5665]'>
							<Image src={"/Group1223.png"} width={24} height={12} /> No Traffic
							Logs
						</p>
						<p className='flex gap-5 mb-5 text-[#4F5665]'>
							<Image src={"/Group1223.png"} width={24} height={12} /> Works on
							All Devices
						</p>
					</div>

					<div className='flex items-center justify-center flex-col'>
						<p className='font-semibold text-[20px] text-[24px] mb-5'>Free</p>
						<Link
							href={"/"}
							className='py-1 px-6 text-[#F53855] text-sm rounded-full border border-[#F53855]'>
							Select
						</Link>
					</div>
				</div>
				<div className='border border-[#EOEOEO] pt-16 px-10 pb-10 gap-10 rounded h-[44rem]'>
					<div className='flex items-center flex-col gap-5 mb-10'>
						<Image src={"/Free.png"} width={100} height={100} />
						<p className='font-semibold text-[20px] text-[20px]'>
							Standard Plan
						</p>
					</div>
					<div className=''>
						<p className='flex gap-5 mb-5 text-[#4F5665]'>
							<Image src={"/Group1223.png"} width={24} height={12} /> Unlimited
							Bandwitch
						</p>
						<p className='flex gap-5 mb-5 text-[#4F5665]'>
							<Image src={"/Group1223.png"} width={24} height={12} /> Encrypted
							Connection
						</p>
						<p className='flex gap-5 mb-5 text-[#4F5665]'>
							<Image src={"/Group1223.png"} width={24} height={12} /> Yes
							Traffic Logs
						</p>
						<p className='flex gap-5 mb-5 text-[#4F5665]'>
							<Image src={"/Group1223.png"} width={24} height={12} /> Works on
							All Devices
						</p>
						<p className='flex gap-5 mb-5 text-[#4F5665]'>
							<Image src={"/Group1223.png"} width={24} height={12} /> Works on
							Connect Anywhere
						</p>
					</div>

					<div className='flex items-center justify-center flex-col'>
						<p className='font-semibold text-[20px] text-[24px] mb-5'>$9/mo</p>
						<Link
							href={"/"}
							className='py-1 px-6 text-[#F53855] text-sm rounded-full border border-[#F53855]'>
							Select
						</Link>
					</div>
				</div>
				<div className='border border-[#EOEOEO] pt-16 px-10 pb-10 gap-10 rounded h-[44rem]'>
					<div className='flex items-center flex-col gap-5 mb-10'>
						<Image src={"/Free.png"} width={100} height={100} />
						<p className='font-semibold text-[20px] text-[20px]'>
							Premium Plan
						</p>
					</div>
					<div className=' '>
						<p className='flex gap-5 mb-5 text-[#4F5665]'>
							<Image src={"/Group1223.png"} width={24} height={12} /> Unlimited
							Bandwitch
						</p>
						<p className='flex gap-5 mb-5 text-[#4F5665]'>
							<Image src={"/Group1223.png"} width={24} height={12} /> Encrypted
							Connection
						</p>
						<p className='flex gap-5 mb-5 text-[#4F5665]'>
							<Image src={"/Group1223.png"} width={24} height={12} /> Yes
							Traffic Logs
						</p>
						<p className='flex gap-5 mb-5 text-[#4F5665]'>
							<Image src={"/Group1223.png"} width={24} height={12} /> Works on
							All Devices
						</p>
						<p className='flex gap-5 mb-5 text-[#4F5665]'>
							<Image src={"/Group1223.png"} width={24} height={12} /> Works on
							Connect Anywhere
						</p>
						<p className='flex gap-5 mb-5 text-[#4F5665]'>
							<Image src={"/Group1223.png"} width={24} height={12} /> Works on
							Get New Features
						</p>
					</div>

					<div className='flex items-center justify-center flex-col'>
						<p className='font-semibold text-[20px] text-[24px] mb-5 flex-end'>
							$12/mo
						</p>
						<Link
							href={"/"}
							className='py-1 px-6 text-[#F53855] text-sm rounded-full border border-[#F53855]'>
							Select
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Plans;
