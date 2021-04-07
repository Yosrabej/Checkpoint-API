import React from "react";
import { Card, Button } from "react-bootstrap";
import { CardFooter } from "reactstrap";

function UserCard({ user }) {
    return (
        <div>
            <Card
                style={{
                    width: "18rem",
                    marginBottom: "80px",
                    marginLeft: "30px",
                    backgroundColor: "#E69A8DFF",
                    borderRadius: "30px",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                    fontFamily: "cursive",
                }}
            >
                <Card.Title
                    style={{
                        textAlign: "center",
                        textDecoration: "#5F4B8BFF wavy underline",
                    }}
                >
                    {user.name}
                </Card.Title>
                <Card.Body>
                    <Card.Text>
                        Email: {user.email} <br />
                        Company: {user.company.name}
                        <br />
                        Website: {user.website}
                    </Card.Text>
                </Card.Body>
                <CardFooter
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <Button variant="primary">Contact</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default UserCard;
