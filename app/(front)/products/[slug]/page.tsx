import productService from '@/app/services/productService';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductDetails({
	params,
}: {
	params: { slug: string };
}) {
	// Fetch the product details using the provided slug
	const product = await productService.getBySlug(params.slug);
	if (!product) {
		return <div>Product not found</div>;
	}
	{
		// Render the product details
		return (
			<>
				<div className="flex items-center justify-center min-h-screen">
					<div className="flex flex-col space-y-3">
						<div className="my-2">
							<Link href="/">Back to Home</Link>
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								height: '100vh',
							}}
						>
							<Image
								key={product.slug}
								src={product.image}
								alt={product.name}
								width={640}
								height={640}
								sizes="100vw"
								style={{
									width: '300',
									height: '200',
								}}
							/>
						</div>
						<div className="flex items-center justify-center">
							<ul key={product.slug} className="flex flex-col items-center">
								<li>
									<h1 className="text-xl">{product.name}</h1>
								</li>
								<li>
									<p>{product.brand}</p>
								</li>
								<li>{product.price}</li>
								<li>
									<p>{product.description}</p>
								</li>
							</ul>
						</div>
						<div>
							<ul>
								<li>
									<p>Editor: {product.category}</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</>
		);
	}
}
