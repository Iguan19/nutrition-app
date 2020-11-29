import React from 'react'
import { Table, Container } from 'reactstrap';

const OutputTable = ({ data }) => {
    console.log('data', data);
    if(data[0] === undefined) {
        return ""
    } else {
        return (
            <Container>
                <Table className='table-striped table-bordered table-hover'>
                    <thead>
                        <tr>
                        <th>Qty</th>
                        <th>Unit</th>
                        <th>Food</th>
                        <th>Calories</th>
                        <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(element => {
                                return(
                                    <tr key={element.uri}>
                                    <td>{element.ingredients[0].parsed[0].quantity}</td>
                                    <td>{element.ingredients[0].parsed[0].measure}</td>
                                    <td>{element.ingredients[0].parsed[0].food}</td>
                                    <td>{element.calories + ` kcal`}</td>
                                    <td>{Math.round(element.totalWeight) + ` g`} </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
            
        )
    }  
}

export default OutputTable;
