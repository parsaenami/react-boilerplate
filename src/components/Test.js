import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { exampleAction } from "../reactRedux/Actions/exampleAction";

const Test = props => {
  const dispatch = useDispatch()
  const add = () => dispatch(exampleAction())
  const x = useSelector(state => state.reducer.x)

  return (
      <div>
        What a nice ReactJS boilerplate by Parsa!
        <button onClick={add}>add 1 to {x}</button>
      </div>
  );
};

Test.propTypes = {

};

export default Test;