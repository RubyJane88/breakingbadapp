import React, { useEffect, useState } from "react";
import { Button, Container } from "@material-ui/core";
import Header from "../ui/Header";
import { getCastsAxios } from "../../utils/cast-axios";
import { CastModel } from "../models/cast-model";

const CastSample = () => {
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCasts = async () => {
    const { data } = await getCastsAxios();
    setCasts(data);
    setLoading(false);
  };

  useEffect(() => {
    // getCasts().then();
  }, []);

  return (
    <>
      <Container className="container">
        <Header />
        <Button
          variant={"contained"}
          color={"secondary"}
          onClick={() => {
            getCasts().then();
          }}
        >
          <h2> Click Me</h2>
        </Button>
        {casts.map((c: CastModel) => (
          <h2> {c.name}</h2>
        ))}
      </Container>
    </>
  );
};

export default CastSample;
