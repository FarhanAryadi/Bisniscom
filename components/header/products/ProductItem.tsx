import { Product } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product }: { product: Product }) {
	return (
		<div className="card shadow-xl mb-4 bg-navybig">
			{/* figure to hold the product image (start) */}
			<figure>
				<Link href={`/products/${product.slug}`}>
					<Image
						src={product.image}
						alt={product.name}
						width={300}
						height={300}
						className="object-hover h-64 w-full"
					/>
				</Link>
			</figure>
			{/* figure to hold the product image (end) */}

			{/* Product card */}
			<div className="card-body bg-navybig">
				<Link href={`/products/${product.slug}`}>
					<h2 className="card-title font-bold text-whitebig">{product.name}</h2>
				</Link>
				<p className="mb-2">{product.description}</p>
				<div className="card-actions flex items-center justify-between">
					<Link href={`/products/${product.slug}`} className="btn btn-info">
						More Details
					</Link>
				</div>
			</div>
			{/* end */}
		</div>
	);
}
