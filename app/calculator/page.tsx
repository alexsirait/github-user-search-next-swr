'use client';
import React, { useState } from 'react';

export default function Calculator() {
	const [hasil, setHasil] = useState(0);
	function onSubmit(e: any) {
		e.preventDefault();
		const { data1, data2 } = e.target.elements;
		const count = Number(data1.value) + Number(data2.value);
		setHasil(count);
	}
	return (
		<div>
			<span>Calculator - January NextJS</span>
			<div>
				<form onSubmit={onSubmit}>
					<input name={'data1'} />
					<input name={'data2'} />
					<button>+</button>
				</form>
				<span>{hasil}</span>
			</div>
		</div>
	);
}
