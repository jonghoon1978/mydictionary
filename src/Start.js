import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faArrowAltCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadDictionaryFB } from "./redux/modules/dictionary";

import Progress from "./Progress";

const Start = (props) => {
  const myWords = props.words;
  const history = useHistory();
  const my_lists = useSelector((state) => state.dictionary.list);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadDictionaryFB());
  }, []);

  return (
    <Wrap>
      <Title>My Dictionary  단어카드 100개 만들기</Title>
      <Progress />
      {my_lists.map((word, idx) => {
        return (
          <Card key={idx}>
            <WrapLines>
              <Contents>단어</Contents>
              <InputWord>{word.title}</InputWord>
            </WrapLines>
            <WrapLines>
              <Contents>설명</Contents>
              <InputWord>{word.desc} </InputWord>
            </WrapLines>
            <WrapLines>
              <Contents>예시</Contents>
              <InputExam>{word.exam}</InputExam>
            </WrapLines>
          </Card>
        );
      })}
      <FontAwesomeIcon
        onClick={() => {
          history.push("/addword");
        }}
        icon={faPlusCircle}
        style={{
          fontSize: "70px",
          color: "blue",
          position: "fixed",
          margin: "600px 0 0 580px",
        }}
      />
      <FontAwesomeIcon
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        icon={faArrowAltCircleUp}
        style={{
          fontSize: "70px",
          color: "blue",
          position: "fixed",
          margin: "600px 0 0 650px",
        }}
      />
     
    </Wrap>
  );
};

export default Start;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justifycontents: center;
  alignitems: center;
  height: 100%;
  width: 800px;
  margin: 30px auto;
  border: 5px solid gray;
  border-radius: 5px;
  background: aliceblue;
  padding: 5px;
`;

const Title = styled.p`
  font-size: 30px;

  text-align: left;
`;

const Card = styled.div`
  width: 320px;
  height: 250px;
  margin: 3px auto 10px;
  background: white;
`;

const WrapLines = styled.div`
  text-align: left;
  margin: 0 10px 3px 10px;
`;

const Contents = styled.p`
  text-decoration: underline;
  text-align: left;
  margin: 8px;
`;

const InputWord = styled.span`
  font-size: 20px;
`;

const InputExam = styled.span`
  color: blue;
  font-size: 20px;
`;
