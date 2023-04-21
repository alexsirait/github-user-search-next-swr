import React from 'react';

const getData = async (params: string) => {
	const req = await fetch(`https://api.github.com/users/${params}`);
	const res = await req.json();
	return res;
};

export default async function Detail({ params }: { params: { slug: string } }) {
	const data = await getData(params.slug);
	return (
		<>
			<div>Name = {params.slug}</div>
			<div>Login = {data.login}</div>
			<div>ID ={data.id}</div>
			<img src={data.avatar_url} alt={`avatar-${data.login}`} width={50} />
			<div>Name = {data.name}</div>
			<div>Blog = {data.blog}</div>
			<div>Location ={data.location}</div>
			<div>Bio = {data.bio}</div>
		</>
	);
}
