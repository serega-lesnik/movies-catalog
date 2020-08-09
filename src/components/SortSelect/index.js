import React from 'react';

const SortSelect = ({
	label,
	selected,
	sortList,
	handleSortChange,
	addNone = false,
}) => {
	const onChange = event => {
		handleSortChange(event.target.value)
	};

	return (
		<div>
			<span> {label}</span>
			<select value={selected} onChange={onChange}>
				{addNone && <option value={0} key={'none'}>None</option>}
				{sortList.map(item => (
					<option value={item.id} key={item.id}>{item.name}</option>
				))}
			</select>
		</div>
	)
};

export default SortSelect;