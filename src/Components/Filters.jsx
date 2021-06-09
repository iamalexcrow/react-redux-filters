import React from "react";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'
import { connect } from 'react-redux';
import { getUniqueValues } from '../utils/helpers';
import { updateFilters, clearFilters } from '../redux/reducer.js';

const Filters = ({ all_products, min_price, max_price, price, text, gender, type, updateFilters, clearFilters }) => {

  const genders = getUniqueValues(all_products, 'gender');
  const types = getUniqueValues(all_products, 'type');

  return (
    <div>
      <h1>Фильтры</h1>
      <Form>
        <FormGroup>
          <Label for="name">Искать по названию</Label>
          <Input type="text"
            name="text"
            id="text"
            placeholder="Что ищем?"
            value={text}
            onChange={updateFilters}
          />
        </FormGroup>

        <FormGroup>
          <Label for="gender">Какая стрижка?</Label>
          <Input type="select" name="gender" id="gender" onChange={updateFilters} value={gender}>
            {genders.map((o, index) => {
              return <option
                key={index}
                value={o}
                name="gender"
              >{o}</option>
            })}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="type">Тип стрижки</Label>
          <Input type="select" name="type" id="type" onChange={updateFilters} value={type}>
            {types.map((o) => {
              return (
                <option key={o}>{o}</option>
              )
            })}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="price">Цена:</Label>
          <div>
            <p>{price} рублей</p>
            <Input type="range"
              name="price" id="price"
              min={min_price}
              max={max_price}
              onChange={updateFilters}
              value={price}
            />
          </div>
        </FormGroup>
        <FormGroup>
          <Button color="danger" onClick={clearFilters}>Убрать фильтры</Button>
        </FormGroup>
      </Form>
    </div>

  )
}

const MapStateToProps = (state) => {
  return {
    all_products: state.all_products,
    text: state.filters.text,
    min_price: state.filters.min_price,
    max_price: state.filters.max_price,
    price: state.filters.price,
    gender: state.filters.gender,
    type: state.filters.type,
  }
}

export default connect(MapStateToProps, { updateFilters, clearFilters })(Filters);