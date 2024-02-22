'use client';
import { User } from '@prisma/client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PricingPage = () => {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5600';
	const [users, setUsers] = useState<User[]>([]);

	// fetch products
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await axios.get(`${apiUrl}/api/users`);
				setUsers(response.data.reverse());
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchUsers();
	});
	return (
		<>
			<div className="overflow-x-auto my-5">
				<table className="table table-zebra w-1/2 mx-auto">
					{/* head */}
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Job</th>
							<th>Favorite Color</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr className="bg-base-200">
							<th>1</th>
							<td>Cy Ganderton</td>
							<td>Quality Control Specialist</td>
							<td>Blue</td>
						</tr>
						{/* row 2 */}
						<tr>
							<th>2</th>
							<td>Hart Hagerty</td>
							<td>Desktop Support Technician</td>
							<td>Purple</td>
						</tr>
						{/* row 3 */}
						<tr>
							<th>3</th>
							<td>Brice Swyre</td>
							<td>Tax Accountant</td>
							<td>Red</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="overflow-x-auto py-4">
				<table className="table table-pin-cols w-1/2 mx-auto">
					<thead>
						<tr>
							<th>No</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>User Name</th>
							<th>User Name</th>
							<th>User Name</th>
						</tr>
					</thead>
					{users.map((user, index) => (
						<tbody key={user.id}>
							<tr>
								<td>{index + 1}</td>
								<td>{user.firtName}</td>
								<td>{user.lastName}</td>
								<td>{user.name}</td>
								<td>{user.name}</td>
								<td>{user.name}</td>
							</tr>
						</tbody>
					))}
				</table>
			</div>
		</>
	);
};

export default PricingPage;
