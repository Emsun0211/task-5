import Image from "next/image";
import React, { useEffect, useState } from "react";
import { formatter } from "@/utils/utils";
import { ImPriceTag } from "react-icons/im";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";

const EventsCards = () => {
	const [products, setproducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(
					"https://fakestoreapi.com/products?limit=8"
				);

				console.log(res.data);
				setproducts(res.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);
	return (
		<>
			{products.map((product) => {
				// console.log(product);
				let newTitle = " ";
				product.title.split(" ").forEach((el, i) => {
					if (i <= 2) {
						newTitle += el;
					}
				});

				return (
					<div
						key={product.id}
						className='mt-8 w-[280px] h-[320px] bg-white rounded-[8px] border-[#FFFFFF] p-5 mb-8 '>
						{/* <Image
							src={product.image}
							alt='product'
							width={100}
							height={50}
							className='cursor-pointer sm:w-[200px] sm:h-[100px]'
						/> */}
						<div className='img-div mb-4'>
							<img src={product.image} alt='product' className='img-style' />
						</div>

						<div>
							<p className=''>{newTitle.split("")}</p>
						</div>

						<div className='flex justify-between  flex-col gap-3 mb-3 text-[#6C757D] mt-3'>
							<div className='flex  items-center gap-3'>
								<ImPriceTag />
								<p>{formatter.format(product.price)}</p>
							</div>

							<div className='flex justify-left items-center gap-3'>
								<AiFillStar />
								<p>
									{product.rating.rate}
									<span className='text-[#372AA4] text-l'>
										({product.rating.count})
									</span>
								</p>
							</div>

							<div className='text-[#372AA4]'>
								<button className=' flex items-center justify-between gap-2 text-sm border-2 border-[#372AA4] py-1 px-3 rounded-[8px]'>
									<AiOutlineShoppingCart />
									Cart
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default EventsCards;
