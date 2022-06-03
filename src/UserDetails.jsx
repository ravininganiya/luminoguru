import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();

  console.log(params.id, "location");
  const [resData, setResData] = useState();

  useEffect(async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users/${params.id}`);
      console.log(res.data.data);
      if (res.status == 200) {
        setResData(res.data.data);
      }
    } catch {
      (err) => console.log(err);
    }
  }, []);
  return (
    <>
      <ul>
        <li>id:{resData?.id}</li>
        <li>name:{resData?.first_name}</li>
        <li>last_name:{resData?.last_name}</li>
      </ul>
    </>
  );
};

export default UserDetails;
