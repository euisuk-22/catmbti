import React from "react";
// css-in-js
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import swImage from "../assets/mbti_image/homeScreen.png";

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/question");
  };

  return (
    <Wrapper>
      <Header>환경 MBTI</Header>
      <Contents>
        <Title>
          내 환경 MBTI와 <br />
          어울리는 재활용품은?
        </Title>
        <LogoImage>
          <img
            alt="로고 이미지"
            src={swImage}
            className="rounded"
            width={350}
            height={495}
          />
        </LogoImage>
        <Desc>
          나의 MBTI와 어울리는 <br />
          재활용품이 무엇인지 알아보자!
        </Desc>
        <Button
          style={{ fontFamily: "Lee", width: 200, height: 50, fontSize: 20 }}
          onClick={handleClickButton}
        >
          테스트 시작하기
        </Button>
        <Paragra>유형별 MBTI가 궁금하다면 grew__dku</Paragra>
      </Contents>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Header = styled.div`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lee";
  background-color: rgb(3, 207, 91);
  margin: auto;
  color: white;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 30pt;
  margin-top: 10px;
  font-family: "Lee";
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
`;

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 10px;
  margin-bottom: 20px;
  font-family: "Lee";
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
`;

const Paragra = styled.div`
  font-size: 15px;
  font-family: "Lee";
  margin-top: 10px;
`;
