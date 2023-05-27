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
      <Header>환경 MBTI</Header>
      <Contents>
        <Title>결과 보기</Title>
        <LogoImage>
          <img
            alt="결과 이미지"
            src={resultData.image}
            className="rounded"
            width={400}
            height={1200}
          />
        </LogoImage>

        <Paragra>
          결과 유형별 어떤 MBTI인지 궁금하다면 <br />
          인스타에서 "grew__dku"를 검색해주세요.
        </Paragra>

        <ButtonGroup>
          <Button
            style={{ fontFamily: "Lee", width: 170 }}
            onClick={() => navigate("/")}
          >
            테스트 다시하기
          </Button>
        </ButtonGroup>
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
  font-family: "Lee";
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
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;

const Paragra = styled.div`
  font-size: 20px;
  font-family: "Lee";
  margin-top: 10px;
  text-align: center;
`;
