import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import { Row } from "reactstrap";

const Cards = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const result = await axios("https://jsonplaceholder.typicode.com/users");

    setData(result.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="m-2">
      <Row className="gx-5">
        {data &&
          data.map((user, index) => {
            return (
              <UserCard
                data={{ user }}
                setData={setData}
                allData={data}
                index={index}
              />
            );
          })}
      </Row>
    </div>
  );
};

export default Cards;
