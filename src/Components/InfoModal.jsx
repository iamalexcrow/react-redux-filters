import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { hideInfoModal } from '../redux/reducer';
import styled from 'styled-components';

const InfoModal = ({item, isInfoModalOpen, hideInfoModal}) => {

    return (
<div>
      
      <Modal isOpen={isInfoModalOpen} toggle={hideInfoModal}>
      <ModalHeader toggle={hideInfoModal}>{item.name}</ModalHeader>
        <ModalBody>
          <Wrapper>
            <Img src={item.img}/>
            <div>
                <div><b>Тип:</b> {item.gender} / {item.type}</div>
                <div><b>Цена:</b> {item.price} рублей</div>
                <div><b>Описание:</b> {item.description}</div>
            </div>
          </Wrapper>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={hideInfoModal}>Понятно!</Button>
        </ModalFooter>
      </Modal>

    </div>
    )
}
const mapStateToProps = (state) => {
    return {
        item: state.item,
        isInfoModalOpen: state.isInfoModalOpen
    }
}
export default connect(mapStateToProps, {hideInfoModal})(InfoModal);

const Wrapper = styled.div`
display: grid;
grid-template-columns: 3fr 3fr;
`

const Img = styled.img`
object-fit: contain;
width:200px;
height: 200px`