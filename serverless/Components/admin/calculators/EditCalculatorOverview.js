import {Button, Col, Container, Form, Row} from "react-bootstrap";
import UserList from "./UserList";
import CalculatorCategory from "./CalculatorCategory";
import {useState} from "react";

const EditCalculatorOverview = (data) => {
    const details = data.details;
    const users = data.users;
    const categories = data.categories;
    const inputs = data.inputs
    const [overviewShowing, setOverviewShowing] = useState(true);
    const [showCategory, setShowCategory] = useState(false);

    function handleEdit(){
        setOverviewShowing(false)
        setShowCategory(true)
    }

    return (
        <div>
            { overviewShowing === true && (
                <Form>
                    <Form.Group controlId="form.Name">
                        <Form.Label>Calculator Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value={details.name}/>
                    </Form.Group>
                    <Form.Group controlId="form.Visibility">
                        <Form.Label>Calculator Visibility</Form.Label>
                        <div key={`default-radio`} className="mb-3">
                            <Form.Check
                                type="radio"
                                id={`public`}
                                label={`Public`}
                                checked={details.public}
                                name="visibility"
                            />
                            <Form.Check
                                type="radio"
                                id="private"
                                label="Private"
                                checked={!details.public}
                                name="visibility"
                            />
                        </div>
                    </Form.Group>
                    <UserList details={details} users={users}/>
                    <Button
                        style={{ width: "125px", marginTop: "40px" }}
                        variant="secondary"
                        size="lg"
                        type="submit"
                        data-testid="next_btn"
                        onClick={(e) => handleEdit()}
                    >
                        Next
                    </Button>
                </Form>
            )
            }
            { showCategory === true && (
            <CalculatorCategory type = {details} categories = {categories} inputs = {inputs}/>
            )}
        </div>
    )
}

export default EditCalculatorOverview;