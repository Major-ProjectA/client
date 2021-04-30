import React from 'react';

import './styles.css';

// const Pagination = ({ jobsPerPage, totalJobs, paginate }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <ul className="pagination">
//       {pageNumbers.map((number) => (
//         <li key={number}>
//           <a onClick={() => paginate(number)}>{number}</a>
//         </li>
//       ))}
//     </ul>
//   );
// };

const Pagination = ({ page, pages, changePage }) => {
  let middlePagination;

  if (pages <= 3) {
    middlePagination = [...Array(pages)].map((_, idx) => (
      <a key={idx + 1} onClick={() => changePage(idx + 1)} disabled={page === idx + 1}>
        {idx + 1}
      </a>
    ));
  } else {
    const startValue = Math.floor((page - 1) / 3) * 3;

    middlePagination = (
      <>
        {[...Array(3)].map((_, idx) => (
          <a
            key={startValue + idx + 1}
            disabled={page === startValue + idx + 1}
            onClick={() => changePage(startValue + idx + 1)}
          >
            {startValue + idx + 1}
          </a>
        ))}

        <a>...</a>
        <a onClick={() => changePage(pages)}>{pages}</a>
      </>
    );

    if (page > 3) {
      if (pages - page >= 3) {
        middlePagination = (
          <>
            <a onClick={() => changePage(1)}>1</a>
            <a>...</a>
            <a onClick={() => changePage(startValue)}>{startValue}</a>
            {[...Array(3)].map((_, idx) => (
              <a
                key={startValue + idx + 1}
                disabled={page === startValue + idx + 1}
                onClick={() => changePage(startValue + idx + 1)}
              >
                {startValue + idx + 1}
              </a>
            ))}

            <a>...</a>
            <a onClick={() => changePage(pages)}>{pages}</a>
          </>
        );
      } else {
        let amountLeft = pages - page + 3;
        middlePagination = (
          <>
            <a onClick={() => changePage(1)}>1</a>
            <a>...</a>
            <a onClick={() => changePage(startValue)}>{startValue}</a>
            {[...Array(amountLeft)].map((_, idx) => (
              <a
                key={startValue + idx + 1}
                disabled={page === startValue + idx + 1}
                style={pages < startValue + idx + 1 ? { display: 'none' } : null}
                onClick={() => changePage(startValue + idx + 1)}
              >
                {startValue + idx + 1}
              </a>
            ))}
          </>
        );
      }
    }
  }

  return (
    pages > 1 && (
      <ul className="pagination">
        <li>
          <a onClick={() => changePage((page) => page - 1)} disabled={page === 1}>
            &laquo;
          </a>
        </li>

        <li>{middlePagination}</li>

        <li>
          <a onClick={() => changePage((page) => page + 1)} disabled={page === pages}>
            &raquo;
          </a>
        </li>
      </ul>
    )
  );
};

export default Pagination;
