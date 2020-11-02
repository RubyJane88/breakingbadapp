import React from "react";
import { CastModel } from "../models/cast-model";

type Props = {
  cast: CastModel;
  loading?: boolean;
  img: string;
};

const CastItem = (props: Props) => {
  // console.log(props);
  const { loading, img, cast } = props;

  return (
    <div>
      {/* {casts.map((c: CastModel) => (
        <h2> {c.name}</h2>
      ))}*/}

      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={cast.img} alt={""} />
          </div>
          <div className="card-back">
            <h1> {cast.name}</h1>
            <ul>
              <li>
                <strong>Actor Name:</strong> {cast.portrayed}
              </li>
              <li>
                <strong>Nickname:</strong> {cast.nickname}
              </li>
              <li>
                <strong>Birthday:</strong> {cast.birthday}
              </li>
              <li>
                <strong>Status:</strong>
                {cast.status}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastItem;
