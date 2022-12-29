import { useEffect, useState } from "react";
import "./ExploreContainer.css";
import axios from "axios";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [data, setData] = useState([]);

  const getData = async (sort: string = "", search: string = "") => {
    await axios.get(`http://172.31.109.58:8000/students/`).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="container-table">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Address</th>
              <th>Avatar</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td id="avatar">
                  <img src={item.avatar} alt="" />
                </td>
                <td>{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExploreContainer;
