import {Button, Col, Container, Form, Row} from "react-bootstrap";
import UserList from "./UserList";

const EditCalculatorOverview = (data) => {
    const details = data.details;
    const users = data.users;
    console.log(`here`,details)
    return (
        <div>
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
                <UserList details = {details} users = {users}/>
            </Form>
        </div>
    )
}

export default EditCalculatorOverview;