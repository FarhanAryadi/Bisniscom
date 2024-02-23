import Carousel from '@/components/carousel/Carousel';
import ProductItem from '@/components/header/products/ProductItem';
import { convertDocToObj } from '@/lib/utils';
import productService from '../services/productService';

export default async function Home() {
	// Fetch the latest and featured products
	const latestProducts = await productService.getLatest();

	// Render the home page
	return (
		<>
			<Carousel />
			{/* {/* Grid layout for the latest products */}
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 py-8">
				{latestProducts.map((product) => (
					<ProductItem key={product.slug} product={convertDocToObj(product)} />
				))}
			</div>
		</>
	);
}
