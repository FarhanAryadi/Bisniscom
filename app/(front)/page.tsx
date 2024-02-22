import ProductItem from '@/components/header/products/ProductItem';
import { convertDocToObj } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import productService from '../services/productService';

export default async function Home() {
	// Fetch the latest and featured products
	const latestProducts = await productService.getLatest();
	const featuredProducts = await productService.getFeatured();

	// Render the home page
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

			{/* {/* Grid layout for the latest products */}
			<h2 className="text-2xl py-2">Latest Products</h2>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
				{latestProducts.map((product) => (
					<ProductItem key={product.slug} product={convertDocToObj(product)} />
				))}
			</div>
		</>
	);
}
