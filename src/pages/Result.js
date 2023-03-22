import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/resultdata";

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  // 최종적으로 도출한 결과 객체
  const [resultData, setResultData] = React.useState({});

  React.useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  console.log(resultData);

  return (
    <Wrapper>
      <Header>환경 보호 스타일 MBTI</Header>
      <Contents>
        <Title>결과 보기</Title>
        <LogoImage>
          <img
            alt="결과 이미지"
            src={resultData.image}
            className="rounded-circle"
            width={500}
            height={350}
          />
        </LogoImage>
        <Desc>나의 환경 MBTI는 {resultData.best}입니다.</Desc>
        <Desc>나의 환경 MBTI와 찰떡궁합인 꽃은 {resultData.name}입니다.</Desc>
        <Button
          style={{ fontFamily: "DungGeunMo" }}
          onClick={() => navigate("/")}
        >
          테스트 다시하기
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;

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
  margin-bottom: 10px;
  font-family: "DungGeunMo";
`;
