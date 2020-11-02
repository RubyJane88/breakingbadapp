import React from "react";
import { CastModel } from "../models/cast-model";
import CastItem from "./Cast-Item";
import Spinner from "../ui/Spinner";

type Props = {
  casts: CastModel[];
  loading?: boolean;
};

const CastGrid = (props: Props) => {
  const { casts, loading } = props;

  return loading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {casts.map((cast) => (
        <CastItem key={cast.char_id} cast={cast} img={""} />
      ))}
    </section>
  );
};

export default CastGrid;
