import Table from "react-bootstrap/Table";
import useApi from "../utilities/http";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { Container } from "react-bootstrap";

const DispatchFormPage = () => {
    const { getItem } = useLocalStorage();
    const token = getItem("token");
    const api = useApi(token);
    const [DispatchForm, setDispatchForms] = useState([]);
    const [user, _] = useState(JSON.parse(getItem("user") || null));

    useEffect(() => {
      getDispatchForms();
      return () => {};
    }, []);

    async function getDispatchForms() {
      try {
        const { data } = await api.get("/dispatchforms");
        setDispatchForms(data);
      } catch (error) {
        console.error("Error fetching dispatch form:", error);
      }
    }

  return (
    <div>
      <Container className="mt-5 mb-5">
        <Button
          variant="success justify-content-center"
          as={Link}
          to="/dispatchform"
          className="mb-3 mt-3"
        >
          Add Dispatch Form
        </Button>

        <Table responsive striped bordered hover>
          <thead>
            <tr>
            <th>Date Dispatched</th>
            <th>Location</th>
            <th>Dispatch AM</th>
            <th>Dispatch PM</th>
            <th>Lumpia</th>
            <th>Inasal</th>
            <th>Lechon Manok</th>
            <th>Vinegar 1.5L</th>
            <th>Paper bag #1</th>
            <th>Paper bag #2</th>
            <th>Paper bag #3</th>
            <th>Paper bag #4</th>
            <th>10x14</th>
            <th>Patok</th>
            <th>Manila Paper</th>
            <th>LPG 50kgs</th>
            <th>LPG 11kgs</th>
            <th>Oil in Can</th>
            <th>Oil in Litres</th>
            <th>Dishwashing 1.5L</th>
            <th>Dishwashing 1L</th>
            <th>Flour</th>
            <th>Free Flour</th>
            <th>Free 10x14</th>
            <th>Free Paper Bag</th>
            <th>Free Patok</th>
            <th>Free Vinegar 1.5L</th>
            </tr>
        </thead>
        <tbody>
          {DispatchForm.map((dispatchform) => (
            <tr key={dispatchform.id}>
              <td>{dispatchform.date_dispatched}</td>
              <td>{dispatchform.location}</td>
              <td>{dispatchform.dispatch_AM}</td>
              <td>{dispatchform.dispatch_PM}</td>
              <td>{dispatchform.lumpia}</td>
              <td>{dispatchform.inasal}</td>
              <td>{dispatchform.lechon_manok}</td>
              <td>{dispatchform.vinegar1_5L}</td>
              <td>{dispatchform.paper_bag_1}</td>
              <td>{dispatchform.paper_bag_2}</td>
              <td>{dispatchform.paper_bag_3}</td>
              <td>{dispatchform.paper_bag_4}</td>
              <td>{dispatchform.cellophane_10x14}</td>
              <td>{dispatchform.patok}</td>
              <td>{dispatchform.manila_paper}</td>
              <td>{dispatchform.lpg_50kgs}</td>
              <td>{dispatchform.lpg_11kgs}</td>
              <td>{dispatchform.oil_can}</td>
              <td>{dispatchform.oil_litres}</td>
              <td>{dispatchform.dishwashing1_5L}</td>
              <td>{dispatchform.dishwashing_1L}</td>
              <td>{dispatchform.flour}</td>
              <td>{dispatchform.free_flour}</td>
              <td>{dispatchform.free_10x14}</td>
              <td>{dispatchform.free_paper_bag}</td>
              <td>{dispatchform.free_patok}</td>
              <td>{dispatchform.free_vinegar1_5L}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  </div>

  )
}

export default DispatchFormPage