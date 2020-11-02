import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Header from "../ui/Header";
import { getCastsAxios, searchCastsAxios } from "../../utils/cast-axios";
import CastGrid from "./Cast-Grid";
import "../../App.css";
import Search from "../ui/Search";

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCasts = async () => {
    const { data } = await getCastsAxios();
    setCasts(data);
    setLoading(false);
  };

  const searchCasts = async (q: string) => {
    setLoading(true);
    const { data } = await searchCastsAxios(q);
    setCasts(data);
    setLoading(false);
  };

  useEffect(() => {
    getCasts().then();
  }, []);

  return (
    <>
      <Container className="container">
        <Header />
        <Search
          getQuery={async (q) => {
            await searchCasts(q);
          }}
        />
        <CastGrid casts={casts} loading={loading} />
      </Container>
    </>
  );
};

export default Cast;
