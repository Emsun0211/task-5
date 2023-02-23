import Image from "next/image";
import React, { useState, useEffect } from "react";
// import { CiLocationOn } from "react-icons/ci";
import { BsCalendar3 } from "react-icons/bs";
import { TiFlashOutline } from "react-icons/ti";
import { formatter } from "@/utils/utils";
import { ImPriceTag } from "react-icons/im";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";

const HeroCard = () => {
	const [products, setproducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(
					"https://fakestoreapi.com/products?limit=2"
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
				{
					/* // console.log(product); */
				}
				return (
					<div className='mt-8 w-[540px] h-[350px] bg-white rounded-[8px] border-[#FFFFFF] p-5'>
						<div className='hero-img-div mb-5'>
							<img src={product.image} className='img-style' />
						</div>
						<div>
							<h2 className='text-l font-semibold'>{product.title}</h2>
						</div>
						<div className='flex justify-between items-center mt-5'>
							<div className='flex justify-between flex-col text-[#6C757D]'>
								<div className='flex justify-between items-center gap-5 mb-3 '>
									<div className='flex  items-center gap-3'>
										<ImPriceTag />
										<p>{formatter.format(product.price)}</p>
									</div>

									<div className='flex  items-center gap-3'>
										<BsCalendar3 />
										<p></p>
									</div>
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
							</div>
							<div className='text-[#372AA4]'>
								{/* <button className='border-2 border-[#372AA4] py-2 px-6 rounded-[8px]'>
									Buy Ticket
								</button> */}
								<button className=' flex items-center justify-between gap-2 text-xl border-2 border-[#372AA4] py-2 px-6 rounded-[8px]'>
									<AiOutlineShoppingCart className='w-[24px] h-[24px]' />
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

export default HeroCard;