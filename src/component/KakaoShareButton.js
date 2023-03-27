import React from "react";
import Button from "react-bootstrap/Button";

const KakaoShareButton = () => {
  const url = "https://environment-mbti.netlify.app/";
  const resultUrl = window.location.href;

  console.log("ddd", resultUrl, url);

  React.useEffect(() => {
    const initKakao = async () => {
      const { Kakao } = window;
      if (!Kakao.isInitialized()) {
        await Kakao.init("4379a84a07b9f359d9da634fe0b5aedc");
      }
    };
    initKakao();
  }, []);

  const shareKakao = () => {
    const { Kakao } = window;
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "나의 환경 MBTI 결과",
        description: "나에게 어울리는 환경 보호 활동은 분리수거입니다.",
        imageUrl:
          "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: url,
          },
        },
      ],
    });
  };

  return (
    <Button
      style={{ fontFamily: "Lee", width: 170, marginLeft: "20px" }}
      onClick={shareKakao}
    >
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoShareButton;
