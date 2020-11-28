import React from 'react'
import { Button, Label, Input, Container, Row, Col } from 'reactstrap'

const IngredientsInput = () => {
    return (
        <Container>
            <Row className='p-3 m-3'>
                <Col>
                    <Label for="ingredients">Ingredients</Label>
                    <Input className='h-250' type="textarea" name="ingredients" id="ingredients" />
                </Col>
                <Col>
                    <h1>Output</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className='m-3' color="primary">Analize</Button>
                    <Button className='m-3' color="secondary">Reset</Button>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default IngredientsInput;

<textarea name="" id="demoAnalysis" cols="30" rows="10" class="form-control">1 cup rice,
10 oz chickpeas</textarea>