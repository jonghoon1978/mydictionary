import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBDictionaryFB } from "./redux/modules/dictionary";

const AddWord = (props) => {
  const history = useHistory();
  const textWord = React.useRef(null);
  const textDesc = React.useRef(null);
  const textExam = React.useRef(null);
  
  const dispatch = useDispatch()
 
  
  const addWordList = () => {
    dispatch(
      addBDictionaryFB({
        title: textWord.current.value,
        desc: textDesc.current.value,
        exam: textExam.current.value,
      })
    );
  };
 
  return (
    <Wrap>
      <Title> 단어 추가하기 </Title>
      <Contanier>
         
          <InputWord>
            <Wording>단어</Wording>
            <InputWording ref={textWord} />
          </InputWord>
          <InputDesc>
            <Wording>설명</Wording>
            <InputWording ref={textDesc} />
          </InputDesc>
          <InputExam>
            <Wording>예시</Wording>
            <InputWording ref={textExam} />
          </InputExam>
      

        <Button
          onClick={() => {
            addWordList();
            history.goBack();
          }}
          style={{ marginTop: "10px", height: "50px" }}
          variant="contained">
          <p style={{ fontSize: "25px" }}>추가하기</p>
        </Button>
      </Contanier>
    </Wrap>
  );
};

export default AddWord;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justifycontents: center;
  alignitems: center;
  height: 100vh;
  width: 340px;
  margin: 30px auto;
  border: 5px solid gray;
  border-radius: 5px;
  background: rgb(89, 255, 233);
  padding: 10px;
`;

const Title = styled.p`
  font-size: 30px;
  margin: 10px 0 0 10px;
  text-align: left;
`;

const Contanier = styled.div`
  height: 500px;
  width: 330px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justifycontents: center;
  alignitems: center;
`;

const InputWord = styled.div`
  width: 100%;
  height: 100px;
  background: white;
  padding: 1px;
  margin: 10px auto;
  box-sizing: border-box;
  border-radius: 5px;
`;
const InputDesc = styled.div`
  width: 100%;
  height: 100px;
  background: white;
  padding: 1px;
  margin: 10px auto;
  box-sizing: border-box;
  border-radius: 5px;
`;

const InputExam = styled.div`
  width: 100%;
  height: 100px;
  background: white;
  padding: 1px;
  margin: 10px auto;
  box-sizing: border-box;
  border-radius: 5px;
`;
const Wording = styled.p`
  text-decoration: underline;
  text-align: left;
  margin: 10px;
`;

const InputWording = styled.input`
  height: 40px;
  width: 295px;
  margin: 1px 0 1px 0;
  border-radius: 5px;
`;
