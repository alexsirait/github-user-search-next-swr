'use client';
import React, { useState } from 'react';
import useSWR from 'swr';
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Search() {
	const [dataUser, setDataUser] = useState('Tidak ada Data');
	const { data, error, isLoading } = useSWR(
		`https://api.github.com/search/users?q=${dataUser}`,
		fetcher
	);
	const onSubmit = (e: any) => {
		e.preventDefault();
		const { dataUser1 } = e.target.elements;
		setDataUser(dataUser1.value);
	};
	console.log(data);

	return (
		<div>
			<span>Search - January NextJS</span>
			<div>
				<form onSubmit={onSubmit}>
					<input name={'dataUser1'} />
					<button>+</button>
				</form>
				{dataUser ? <span>{dataUser}</span> : <span>---</span>}
				{isLoading && <>Loading . . . .</>}
				{data != null && (
					<>
						{data.items.map((a: any, i: number) => (
							<li key={i}>
								<a href={`search/${a.login}`}>{a.login}</a> -
								<a href={a.avatar_url} target="_blank">
									Avatar
								</a>
							</li>
						))}
					</>
				)}
			</div>
		</div>
	);
}
