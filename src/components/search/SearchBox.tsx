// @ts-ignore
import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus }) => (
    <form className={classNames(className, "mb-4")}>
      <div className="field">
        <p className="control has-icons-left">
          <span className="icon is-left">
            <FontAwesomeIcon icon={faSearch} fixedWidth={true} />
          </span>
          <input
            className="input"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={e => refine(e.target.value)}
            value={currentRefinement}
            onFocus={onFocus}
          />
        </p>
      </div>
    </form>
  )
);
