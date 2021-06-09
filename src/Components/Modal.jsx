import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { hideModal } from '../redux/reducer';
const ModalWindow = ({ isModalOpen, hideModal }) => {
    return (
        <div>
            <Modal isOpen={isModalOpen} toggle={hideModal}>
                <ModalHeader toggle={hideModal}>Записаться на стрижку</ModalHeader>
                <ModalBody>
                <p>Остались вопросы или хотите записаться на стрижку? Оставьте свои контактные данные и с Вами обязательно свяжутся!</p>
                    <Form>
                    <FormGroup>
                        <Label for="clientName">Имя</Label>
                        <Input type="email" name="clientName" id="clientName" placeholder="Ваше имя" required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="ClientPhone">Телефон</Label>
                        <Input type="number" name="clientPhone" id="clientPhone" placeholder="Ваш телефон" required/>
                    </FormGroup>
                </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={hideModal}>Записаться!</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isModalOpen: state.isModalOpen
    }
}
export default connect(mapStateToProps, { hideModal })(ModalWindow);