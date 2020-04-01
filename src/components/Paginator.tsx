import React, { FC } from "react";
import { Link } from "gatsby";

type Props = {
  slugBase: string;
  numPages: number;
  currentPage: number;
};

const Paginator: FC<Props> = ({ slugBase, numPages, currentPage }) => {
  const renderFirstButton = () => {
    return (
      <Link className="button pagination-link" to={slugBase}>
        1
      </Link>
    );
  };

  const renderPreviousButton = (className: string, label?: string) => {
    const previousPage = currentPage - 1;
    let to = slugBase;
    if (previousPage > 1) {
      to = slugBase + previousPage + "/";
    }

    const props: any = {};

    let classes = className;
    if (currentPage <= 1) {
      classes += " is-disabled";
      props.onClick = (e) => e.preventDefault();
    }

    return (
      <Link {...props} className={classes} to={to}>
        {label ? label : previousPage.toString()}
      </Link>
    );
  };

  const renderNextButton = (className: string, label?: string) => {
    let nextPage = currentPage + 1;

    const props: any = {};

    let classes = className;
    if (currentPage + 1 > numPages) {
      nextPage = currentPage;
      classes += " is-disabled";
      props.onClick = (e) => e.preventDefault();
    }


    return (
      <Link {...props} className={classes} to={slugBase + nextPage + "/"}>
        {label ? label : nextPage.toString()}
      </Link>
    );
  };

  const renderLastButton = () => {
    return (
      <Link className="pagination-link" to={slugBase + numPages + "/"}>
        {numPages}
      </Link>
    );
  };

  const separator = () => {
    return <span className="pagination-ellipsis">&hellip;</span>;
  };

  const renderCurrentPage = (page: number) => {
    return (
      <button className="pagination-link is-current" disabled={true}>
        {page}
      </button>
    );
  };

  const pageLinks = () => {
    const links = [];
    if (currentPage > 1) {
      links.push(renderFirstButton());
    }
    if (currentPage > 3) {
      links.push(separator());
    }
    if (currentPage > 2) {
      links.push(renderPreviousButton("pagination-link"));
    }

    links.push(renderCurrentPage(currentPage));

    if (currentPage + 1 < numPages) {
      links.push(renderNextButton("pagination-link"));
    }
    if (currentPage + 2 < numPages) {
      links.push(separator());
    }
    //if there exists pages between next and last
    if (currentPage < numPages) {
      links.push(renderLastButton());
    }
    return links;
  };

  return (
    <nav className="pagination is-centered" aria-label="pagination">
      {renderPreviousButton("pagination-previous", "Previous")}
      <ul className="pagination-list">
        {pageLinks().map((link, index) => {
          return <li key={index}>{link}</li>;
        })}
      </ul>
      {renderNextButton("pagination-next", "Next")}
    </nav>
  );
};

export default Paginator;
