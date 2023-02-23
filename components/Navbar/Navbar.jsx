import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
	return (
		<div className='w-4/5 m-auto mt-10 flex flex-col'>
			<div className='flex justify-between items-center gap-10 mb-20  '>
				<Link href={"/"} className='flex items-center'>
					<h1 className='text-4xl font-bold'>Events</h1>
				</Link>

				<div className='flex justify-between items-center gap-3'>
					<Link
						href={"/"}
						className=' text-sm  flex items-center justify-between gap-3'>
						<Image src={"/userimg.png"} width={40} height={40} />
						<p className='font-bold text-xl'>Bernice</p>
					</Link>
					<div className=' flex items-center justify-center text-center bg-[#EAEDF7] border-2 rounded-[8px] w-[30px] h-[30px]'>
						<BsChevronDown />
					</div>
				</div>
			</div>
			<div className='relative'>
				<input
					className='border-[#EAEDF7] border-2 w-96 py-2 px-10 rounded-[8px] '
					type='text'
					placeholder='search'></input>
				<CiSearch className='absolute top-3 left-5 w-[20px] h-[20px]' />
			</div>
		</div>
	);
};

export default Navbar;
