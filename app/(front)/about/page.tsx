import Map from '@/components/map/Map';
import { User } from '@prisma/client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AboutPage = () => {
	return (
		<>
			<div className="flex items-center justify-center w-full">
				<form className="form-control w-full max-w-2xl">
					<div className="label">
						<span className="label-text">Email Address</span>
					</div>
					<input
						type="text"
						placeholder="Enter your email address"
						className="input input-bordered w-full"
					/>
					<div className="label">
						<span className="label-text-alt text-gray-500">
							We&lsquo;ll never share your email to anyone else
						</span>
					</div>

					<div className="label">
						<span className="label-text">Password</span>
					</div>
					<input
						type="text"
						placeholder="Passsword"
						className="input input-bordered w-full"
					/>
					<textarea
						className="textarea textarea-bordered my-6 h-48 mt-14"
						placeholder="Text dari sini"
					></textarea>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
					<Map />
				</form>
			</div>
		</>
	);
};

export default AboutPage;