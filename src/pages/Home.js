import React from "react";
// css-in-js
import styled from "styled-components";
import swImage from "../assets/flower/start-window.jpg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/question");
  };

  return (
    <Wrapper>
      <Header>환경 MBTI</Header>
      <Contents>
        <Title>나랑 어울리는 꽃은?</Title>
        <LogoImage>
          <img
            src={swImage}
            className="rounded-circle"
            width={500}
            height={350}
          />
        </LogoImage>
        <Desc>나의 환경 MBTI와 어울리는 꽃을 알아보자!</Desc>
        <Button
          style={{ fontFamily: "DungGeunMo" }}
          onClick={handleClickButton}
        >
          테스트 시작하기
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Header = styled.div`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "DungGeunMo";
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
  font-family: "DungGeunMo";
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "DungGeunMo";
`;
