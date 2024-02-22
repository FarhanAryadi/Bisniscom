import { Product } from '@prisma/client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function ProductItem({ product }: { product: Product }) {
	return (
		<div className="card bg-base-300 shadow-xl mb-4">
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
			<div className="card-body">
				<Link href={`/products/${product.slug}`}>
					<h2 className="card-title font-normal">{product.name}</h2>
				</Link>
				<p className="mb-2">{product.description}</p>
				<div className="card-actions flex items-center justify-between">
					<Link href={`/products/${product.slug}`} className="btn btn-info">
						More Details
					</Link>
				</div>
			</div>
		</div>
	);
}
