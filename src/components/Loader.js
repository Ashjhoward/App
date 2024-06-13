import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import React from "react";

const Loader = () => {

    return (
        <Col md={"12"} className={"text-center py-5"}>
            <Spinner animation="border" />
        </Col>
    );
};

export default Loader;