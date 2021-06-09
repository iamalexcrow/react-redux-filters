import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {showModal, showInfoModal} from '../redux/reducer';

import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';



const Results = ({data,page,showModal, showInfoModal}) => {
    let showGoods = data.slice(0,page).flat()
    return (
        <Wrapper>
            <h1>Найдено результатов: {data.flat().length}</h1>
            <Flex> 
            {showGoods && showGoods.map((h, index)=> {
                return (
                        <CardWrapper key={index}>
                            <Card >
                                <CardBody>
                                    <CardTitle tag="h5">{h.name}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{h.gender}</CardSubtitle>
                                </CardBody>
                                <Img width="100%" src={h.img} alt={h.name} />
                                <CardBody>
                                    <CardText>{h.description}</CardText>
                                    <CardText>{h.price} рублей</CardText>
                                    <Button color="primary" onClick={showModal}>Записаться</Button>{' '}
                                    <Button color="secondary" onClick={()=>showInfoModal(h)}>Узнать побольше</Button>
                                </CardBody>
                            </Card>
                        </CardWrapper>
                )
            })}
            </Flex>
        </Wrapper>
    )
}

const MapStateToProps = (store) => {
    return {
    data:store.filtered_products,
    page: store.page
    }
} 


export default connect(MapStateToProps, {showModal, showInfoModal})(Results);

const Wrapper = styled.div`
text-align: center;
`
const Flex = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
margin: 10px auto`

const CardWrapper = styled.div`
width: 320px;
height: 695px;
padding: 2px;
`

const Img = styled.img`
border: 1px solid lightgrey;
box-sizing: border-box;
width: 100%;
height:400px;
object-fit: cover;`