import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { useState } from "react";
import useApi from "../utilities/http";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";


const DispatchForm = () => {
    const token = localStorage.getItem("token");
    const setItem = useLocalStorage();
    const api = useApi(token);
    const navigate = useNavigate();
    const [date_dispatched, setDateDispatched] = useState("");
    const [location, setLocation] = useState("");
    const [dispatch_AM, setDispatchAM] = useState("");
    const [dispatch_PM, setDispatchPM] = useState("");
    const [lumpia, setLumpia] = useState("");
    const [inasal, setInasal] = useState("");
    const [lechon_manok, setLechonManok] = useState("");
    const [vinegar1_5L, setVinegar15L] = useState("");
    const [paper_bag_1, setPaperBag1] = useState("");
    const [paper_bag_2, setPaperBag2] = useState("");
    const [paper_bag_3, setPaperBag3] = useState("");
    const [paper_bag_4, setPaperBag4] = useState("");
    const [cellophane_10x14, setCellophane10x14] = useState("");
    const [patok, setPatok] = useState("");
    const [manila_paper, setManilaPaper] = useState("");
    const [lpg_50kgs, setLpg50kgs] = useState("");
    const [lpg_11kgs, setLpg11kgs] = useState("");
    const [oil_can, setOilCan] = useState("");
    const [oil_litres, setOilLitres] = useState("");
    const [dishwashing1_5L, setDishwashing15L] = useState("");
    const [dishwashing_1L, setDishwashing1L] = useState("");
    const [flour, setFlour] = useState("");
    const [free_flour, setFreeFlour] = useState("");
    const [free_10x14, setFree10x14] = useState("");
    const [free_paper_bag, setFreePaperBag] = useState("");
    const [free_patok, setFreePatok] = useState("");
    const [free_vinegar1_5L, setFreeVinegar15L] = useState("");

    async function handleCreateDispatchForm(e) {
        e.preventDefault();
        try {
          const body = {
            date_dispatched,
            location,
            dispatch_AM,
            dispatch_PM,
            lumpia,
            inasal,
            lechon_manok,
            vinegar1_5L,
            paper_bag_1,
            paper_bag_2,
            paper_bag_3,
            paper_bag_4,
            cellophane_10x14,
            patok,
            manila_paper,
            lpg_50kgs,
            lpg_11kgs,
            oil_can,
            oil_litres,
            dishwashing1_5L,
            dishwashing_1L,
            flour,
            free_flour,
            free_10x14,
            free_paper_bag,
            free_patok,
            free_vinegar1_5L
          };
          const { data } = await api.post("/dispatchform", body);
          toast.success(data.message);
          navigate("/dispatchformpage");
        } catch (error) {
          if (error.response && error.response.data) {
            toast.error(error.response.data.message);
          } else {
            toast.error("An error occurred");
        }
        }
      }
  return (
    <>
    <ToastContainer />
    <Card
        className="mx-auto mt-5 mb-5"
        style={{ maxWidth: "600px", width: "100%", fontFamily: "serif" }}
      >
        <Card.Body>
          <Card.Title>
            <h3 className="text-center">Create Dispatch Form</h3>
          </Card.Title>
        <Form onSubmit={handleCreateDispatchForm}>
        <Form.Group className="mb-3" controlId="date_dispatched">
            <Form.Label>Date Dispatched</Form.Label>
            <Form.Control
            type="date"
            value={date_dispatched}
            onChange={(e) => setDateDispatched(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="location">    
            <Form.Label>Location</Form.Label>
            <Form.Control
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="dispatch_AM">
            <Form.Label>Dispatch AM</Form.Label>
            <Form.Control
            type="text"
            value={dispatch_AM}
            onChange={(e) => setDispatchAM(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="dispatch_PM">
            <Form.Label>Dispatch PM</Form.Label>
            <Form.Control
            type="text"
            value={dispatch_PM}
            onChange={(e) => setDispatchPM(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lumpia">
            <Form.Label>Lumpia</Form.Label>
            <Form.Control
            type="text"
            value={lumpia}
            onChange={(e) => setLumpia(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="inasal">
            <Form.Label>Inasal</Form.Label>
            <Form.Control
            type="text"
            value={inasal}
            onChange={(e) => setInasal(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lechon_manok">
            <Form.Label>Lechon Manok</Form.Label>
            <Form.Control
            type="text"
            value={lechon_manok}
            onChange={(e) => setLechonManok(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="vinegar_15L">
            <Form.Label>Vinegar 1.5L</Form.Label>
            <Form.Control
            type="text"
            value={vinegar1_5L}
            onChange={(e) => setVinegar15L(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="paper_bag_1">
            <Form.Label>Paper Bag 1</Form.Label>
            <Form.Control
            type="text"
            value={paper_bag_1}
            onChange={(e) => setPaperBag1(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="paper_bag_2">
            <Form.Label>Paper Bag 2</Form.Label>
            <Form.Control
            type="text"
            value={paper_bag_2}
            onChange={(e) => setPaperBag2(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="paper_bag_3">
            <Form.Label>Paper Bag 3</Form.Label>
            <Form.Control
            type="text"
            value={paper_bag_3}
            onChange={(e) => setPaperBag3(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="paper_bag_4">
            <Form.Label>Paper Bag 4</Form.Label>
            <Form.Control
            type="text"
            value={paper_bag_4}
            onChange={(e) => setPaperBag4(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cellophane_10x14">
            <Form.Label>Cellophane 10x14</Form.Label>
            <Form.Control
            type="text"
            value={cellophane_10x14}
            onChange={(e) => setCellophane10x14(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="patok">
            <Form.Label>Patok</Form.Label>
            <Form.Control
            type="text"
            value={patok}
            onChange={(e) => setPatok(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="manila_paper">
            <Form.Label>Manila Paper</Form.Label>
            <Form.Control
            type="text"
            value={manila_paper}
            onChange={(e) => setManilaPaper(e.target.value)}
            />
        </Form.Group>
        <Form.Group
            className="mb-3"
            controlId="lpg_50kgs"
            >
            <Form.Label>LPG 50Kgs</Form.Label>
            <Form.Control
            type="text"
            value={lpg_50kgs}
            onChange={(e) => setLpg50kgs(e.target.value)}
            />
        </Form.Group>
        <Form.Group
            className="mb-3"
            controlId="lpg_100kgs"
            >
            <Form.Label>LPG 11Kgs</Form.Label>
            <Form.Control
            type="text"
            value={lpg_11kgs}
            onChange={(e) => setLpg11kgs(e.target.value)}
            />
        </Form.Group>
        <Form.Group
            className="mb-3"
            controlId="oil_can"
            >
            <Form.Label>Oil in Can</Form.Label>
            <Form.Control
            type="text"
            value={oil_can}
            onChange={(e) => setOilCan(e.target.value)}
            />
        </Form.Group>
        <Form.Group
            className="mb-3"
            controlId="oil_bottle"
            >
            <Form.Label>Oil in Litres</Form.Label>
            <Form.Control
            type="text"
            value={oil_litres}
            onChange={(e) => setOilLitres(e.target.value)}
            />
        </Form.Group>
        <Form.Group
            className="mb-3"
            controlId="dishwashing_1.5L"
            >
            <Form.Label>Diswashing Liquid 1.5L</Form.Label>
            <Form.Control
            type="text"
            value={dishwashing1_5L}
            onChange={(e) => setDishwashing15L(e.target.value)}
            />
        </Form.Group>
        <Form.Group
            className="mb-3"
            controlId="dishwashing_1L"
            >
            <Form.Label>Diswashing Liquid 1L</Form.Label>
            <Form.Control
            type="text"
            value={dishwashing_1L}
            onChange={(e) => setDishwashing1L(e.target.value)}
            />
        </Form.Group>
        <Form.Group
            className="mb-3"
            controlId="flour"
            >
            <Form.Label>Flour</Form.Label>
            <Form.Control
            type="text"
            value={flour}
            onChange={(e) => setFlour(e.target.value)}
            />
        </Form.Group>
        <Form.Group
            className="mb-3"
            controlId="free_flour"
            >
            <Form.Label>Free Flour</Form.Label>
            <Form.Control
            type="text"
            value={free_flour}
            onChange={(e) => setFreeFlour(e.target.value)}
            />
        </Form.Group>
        <Form.Group
            className="mb-3"
            controlId="free_10x14"
            >
            <Form.Label>Free 10x14</Form.Label>
            <Form.Control
            type="text"
            value={free_10x14}
            onChange={(e) => setFree10x14(e.target.value)}
            />
        </Form.Group>
        <Form.Group
            className="mb-3"
            controlId="free_paper_bag"
            >
            <Form.Label>Free Paper Bag</Form.Label>
            <Form.Control
            type="text"
            value={free_paper_bag}
            onChange={(e) => setFreePaperBag(e.target.value)}
            />
        </Form.Group>
        <Form.Group
            className="mb-3"
            controlId="free_patok"
            >
            <Form.Label>Free Patok</Form.Label>
            <Form.Control
            type="text"
            value={free_patok}
            onChange={(e) => setFreePatok(e.target.value)}
            />
        </Form.Group>
        <Form.Group
            className="mb-3"
            controlId="free_vinegar_1.5L"
            >
            <Form.Label>Free Vinegar 1.5L</Form.Label>
            <Form.Control
            type="text"
            value={free_vinegar1_5L}
            onChange={(e) => setFreeVinegar15L(e.target.value)}
            />
        </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
    </Card.Body>
    </Card>
    </>
  );
};


export default DispatchForm