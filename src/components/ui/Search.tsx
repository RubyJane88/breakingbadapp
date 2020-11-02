import React, { useState } from "react";

type Props = {
  getQuery: (q: string) => Promise<any>;
};

const Search = (props: Props) => {
  const { getQuery } = props;
  const [text, setText] = useState("");

  const onChange = async (q: string) => {
    setText(q); // For UI
    await getQuery(q); // fetching from the API
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          onChange={({ target }) => onChange(target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};
export default Search;
