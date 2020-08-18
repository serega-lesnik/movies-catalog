import React from 'react';

import './pagination.css';

const Pagination = ({
	page,
	totalPages,
	handleChangePage,
}) => {
	const isFirst = page <= 1;
	const isLast = page >= totalPages;
	const baseClassBtn = 'pagination-button';
	const disableClass = 'disabled';

	const incrementPage = () => {
		handleChangePage(page + 1);
	};

	const decrementPage = () => {
		handleChangePage(page - 1);
	};

	return (
		<div className='pagination'>
				<span
					className={isFirst ? `${baseClassBtn} ${disableClass}` : baseClassBtn}
					onClick={isFirst ? null : decrementPage}
				>
					PREVIOUS page
				</span>
				<span>
					Page: {page} of {totalPages} pages
				</span>
				<span
					className={isLast ? `${baseClassBtn} ${disableClass}` : baseClassBtn}
					onClick={isLast ? null : incrementPage}
				>
					NEXT page
				</span>
		</div>
	)
};

export default Pagination;