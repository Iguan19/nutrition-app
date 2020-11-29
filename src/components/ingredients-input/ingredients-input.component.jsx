import React from 'react';
import { Button, Label, Input, Container, Row, Col } from 'reactstrap';

const IngredientsInput = ({ onInputChange, onButtonSubmit }) => {
    return (
        <Container>
            <Row className='p-3 m-3'>
                <Col>
                    <Label for="ingredients">Ingredients, one per line</Label>
                    <Input onChange={onInputChange} className='h-250' type="textarea" name="ingredients" id="ingredients" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={onButtonSubmit} className='m-3' color="primary">Analize</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default IngredientsInput;

<textarea name="" id="demoAnalysis" cols="30" rows="10" class="form-control">1 cup rice,
10 oz chickpeas</textarea>