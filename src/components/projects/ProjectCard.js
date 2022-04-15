import React from "react";
import '../../App.css';
import {Button, Card} from "react-bootstrap";

class ProjectCard extends React.Component {
    render() {
        return (
            <div>
                <Card style={{width: '18rem'}}>
                    <Card.Body>
                        <span className="card-tag">RouNet</span>
                        <Card.Title className="my-2 text-muted">Projecto Teste</Card.Title>
                        <Card.Subtitle className={"location"}><span>Maputo • MZ</span></Card.Subtitle>
                        <Card.Text className="card-description my-2">Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                            Accusamus amet architecto asperiores debitis dolor doloremque, eaque eius enim eos, facere,
                            inventore magnam mollitia obcaecati possimus quae quibusdam sunt voluptate. Officia.
                        </Card.Text>
                        <div className="block-space-between"><span>Aprovado</span> <span className={"amount"}>R$ 100.000.00</span>
                        </div>
                        <div className="block-space-between"><span>Captado</span> <span className={"amount"}>R$ 500.000.00</span>
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <div className="d-grid gap-2">
                            <Button variant="primary" disabled>
                                Adicionar
                            </Button>{' '}</div>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}

export default ProjectCard