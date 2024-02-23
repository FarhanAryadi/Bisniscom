import productService from '@/app/services/productService';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default async function Carousel() {
	// Fetch the featured products
	const featuredProducts = await productService.getFeatured();
	return (
		<>
			{/* Carousel Start */}
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<div className="max-w-5xl carousel rounded-box mt-4 mx-auto">
					{/* Map through the featured products and display it */}
					{featuredProducts.map((product, index) => (
						<div
							key={product.id}
							id={`slide-${index}`}
							className="carousel-item relative rounded-box"
						>
							{/* Link to the product detail page */}
							<Link href={`/product/${product.slug}`}>
								{/* Display the selected product image */}
								<Image
									width={900}
									height={400}
									src={product.banner || ''}
									className="w-full"
									alt={product.name}
								/>
							</Link>

							{/* Carousel navigation button (start) */}
							<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
								<a
									href={`#slide-${
										index === 0 ? featuredProducts.length - 1 : index - 1
									}`}
									className="btn btn-circle"
								>
									❮
								</a>
								<a
									href={`#slide-${
										index === featuredProducts.length - 1 ? 0 : index + 1
									}`}
									className="btn btn-circle"
								>
									❯
								</a>
							</div>
							{/* Carousel navigation button (end) */}
						</div>
					))}
				</div>
			</div>
			{/* Carousel End */}
		</>
	);
}
