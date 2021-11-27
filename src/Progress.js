import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Progress = (props) => {
  const lists = useSelector((state) => state.dictionary.list);
  return (
    <ProgressStick>
      <HighLight width={lists.length + "%"} />
      <Dot />
    </ProgressStick>
  );
};

const ProgressStick = styled.div`
  width: 80%;
  margin: 20px auto;
  background: #eee;
  //   width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const HighLight = styled.div`
  background: #df402c88;
  height: 20px;
  width: ${(props) => props.width};
  transition: width 1s;
  border-radius: 10px;
`;

const Dot = styled.div`
  background: #fff;
  border: 5px solid #df402c88;
  box-sizing: border-box;
  margin: 0px 0px 0px -10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export default Progress;
