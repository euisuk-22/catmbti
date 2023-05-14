import YogurtBottle from "../mbti_image/yogurtBottle.png";
import Game from "../mbti_image/game.png";
import PaperCup from "../mbti_image/paperCup.png";
import Battery from "../mbti_image/battery.png";
import EnergyCan from "../mbti_image/energyCan.png";
import Pet from "../mbti_image/pet.png";
import ChocoMilk from "../mbti_image/chocoMilk.png";
import Cloth from "../mbti_image/cloth.png";
import Robot from "../mbti_image/robot.png";
import Bond from "../mbti_image/bond.png";
import WrappingPaper from "../mbti_image/wrappingPaper.png";
import Paper from "../mbti_image/paper.png";
import IcePack from "../mbti_image/icePack.png";
import GlassBottle from "../mbti_image/glassBottle.png";
import Box from "../mbti_image/box.png";
import HotPack from "../mbti_image/hotPack.png";
// 아이디어를 바꿔야 되는게 꽃으로만 하면 단순하게 끝날 수가 있고, 어울리는 환경 활동들을 알려주는 게 좀 더 취지에 맞는 것 같은데 .. 근데 그러면 사진을 어떻게 사용하지

export const ResultData = [
  {
    id: 1,
    name: "'가정 내 환경 보호 계획 수립'",
    best: "ESTJ",
    desc: "ESTJ 유형은 체계적이고 효율적인 조직을 선호한다. 일상에서 가정 내 환경 보호 계획을 수립하고 실행하여 에너지 절약, 물 절약 등의 환경 보호 목표를 달성할 수 있다.",
    image: `${Game}`,
  },
  {
    id: 2,
    name: "'지역 환경 보호 행사 참여'",
    best: "ESTP",
    desc: "ESTP 유형은 적응력이 강하고 기회를 발견하는 데 뛰어나다. 일상에서 지역의 환경 보호 행사에 참여하거나 자발적인 환경 정화 활동에 참여하여 환경 보호에 기여할 수 있다.",
    image: `${YogurtBottle}`,
  },
  {
    id: 3,
    name: "'친환경 쇼핑 및 지속 가능한 소비 습관 도입'",
    best: "ESFJ",
    desc: "ESFJ 유형은 사회적이고 협동적인 성격으로, 친환경 쇼핑 및 지속 가능한 소비 습관을 도입하고 주변 사람들에게도 전파할 수 있다. ESFJ은 친환경 제품을 구매하고, 제품의 생산 과정에서 환경에 미치는 영향을 고려하여 소비자로서의 책임을 다하는 것을 중요하게 생각한다.",
    image: `${PaperCup}`,
  },
  {
    id: 4,
    name: "'환경 보호 이벤트 참석 및 소셜 미디어 홍보'",
    best: "ESFP",
    desc: "ESFP 유형은 사교적이고 긍정적인 에너지를 지니고 있다. 일상에서 환경 보호 이벤트에 참석하거나, 소셜 미디어를 통해 환경 보호 활동을 홍보하며 다른 사람들의 참여를 독려할 수 있다.",
    image: `${Battery}`,
  },
  {
    id: 5,
    name: "'친환경 제품 및 서비스의 효과적 홍보'",
    best: "ENTJ",
    desc: "ENTJ 유형은 전략적인 사고와 강한 리더십 능력을 가지고 있다. 일상에서 친환경 제품 및 서비스를 사용하고 효과적으로 홍보하여 다른 사람들의 관심과 참여를 이끌어 낼 수 있다.",
    image: `${EnergyCan}`,
  },
  {
    id: 6,
    name: "'환경 보호를 위한 토론 및 정보 교환'",
    best: "ENTP",
    desc: "ENTP 유형은 논리적이고 장기적인 시각을 가지고 있다. 일상에서 환경 보호를 위한 토론을 통해 다양한 의견을 수렴하고 정보를 교환하여 지속 가능한 방안을 찾아낼 수 있다.",
    image: `${Pet}`,
  },
  {
    id: 7,
    name: "'지역 사회 환경 보호 교육 및 활동 참여'",
    best: "ENFJ",
    desc: "ENFJ 유형은 탁월한 의사소통 능력과 사람들을 이끌어가는 힘을 지녔다. 일상에서 지역 사회 환경 보호 교육 및 활동에 참여하여 환경 보호 인식을 높이고 주변 사람들과 협력할 수 있다.",
    image: `${ChocoMilk}`,
  },
  {
    id: 8,
    name: "'주변인들과 함께 환경 보호 모임 만들기'",
    best: "ENFP",
    desc: "ENFP 유형은 열정적이고 창의적이며 다양한 사람들과 협력하는 것을 즐긴다. 일상에서 주변인들과 함께 환경 보호 모임을 만들어 서로의 아이디어를 공유하고 실천하는 데 도움을 줄 수 있다.",
    image: `${Cloth}`,
  },
  {
    id: 9,
    name: "'생활 패턴 개선'",
    best: "ISTJ",
    desc: "ISTJ 유형은 체계적이고 꼼꼼하다. 일상 생활에서 에너지 절약, 물 절약, 재활용 등의 생활 패턴을 개선하며 환경 보호에 기여할 수 있다.",
    image: `${Robot}`,
  },
  {
    id: 10,
    name: "'DIY 환경 보호 아이디어 적용'",
    best: "ISTP",
    desc: "ISTP 유형은 실용적이고 문제 해결 능력이 뛰어나다. 일상 생활에서 DIY 환경 보호 아이디어를 적용하여 재활용품을 활용하거나, 에너지 절약 방법을 찾아낼 수 있다.",
    image: `${HotPack}`,
  },
  {
    id: 11,
    name: "'가족과 친구들에게 환경 보호 인식 확산'",
    best: "ISFJ",
    desc: "ISFJ 유형은 주변 사람들을 돌보는 것을 좋아한다. 일상에서 가족과 친구들에게 환경 보호의 중요성을 알리고, 함께 실천하는 방법을 공유할 수 있다.",
    image: `${Box}`,
  },
  {
    id: 12,
    name: "'친환경적인 예술 활동 참여'",
    best: "ISFP",
    desc: "ISFP 유형은 예술적이고 감성적인 성향을 가지고 있다. 일상에서 친환경적인 예술 활동에 참여하거나, 재활용 물품으로 예술 작품을 만들어 환경 보호에 대한 인식을 높일 수 있다.",
    image: `${GlassBottle}`,
  },
  {
    id: 13,
    name: "'에너지 효율적인 가전제품 사용'",
    best: "INTJ",
    desc: "INTJ 유형은 전략적이고 혁신적인 사고를 지니고 있다. 일상에서 에너지 효율적인 가전제품을 사용하거나 스마트 홈 기술을 도입하여 에너지 소비를 줄일 수 있다.",
    image: `${IcePack}`,
  },
  {
    id: 14,
    name: "'친환경 제품 사용 및 추천'",
    best: "INTP",
    desc: "INTP 유형은 탐구심이 높고 분석적인 사고를 가지고 있다. 일상에서 친환경 제품을 사용하거나 연구하여 주변 사람들에게 추천할 수 있다.",
    image: `${Paper}`,
  },
  {
    id: 15,
    name: "'환경 이슈에 대한 소셜 미디어 활용'",
    best: "INFJ",
    desc: "INFJ 유형은 이상주의적이며 사회 변화에 관심이 있다. 소셜 미디어를 통해 환경 이슈에 대한 인식을 높이고, 팔로워들에게 환경 보호를 위한 작은 실천 방법을 제안할 수 있다.",
    image: `${WrappingPaper}`,
  },
  {
    id: 16,
    name: "'환경 보호 관련 자료 읽기 및 공유'",
    best: "INFP",
    desc: "INFP 유형은 이야기를 통해 가치를 전달하는 데 능숙하다. 일상에서 환경 보호 관련 도서나 기사를 읽고 주변 사람들과 지식을 공유하여 환경 보호 인식을 높일 수 있다.",
    image: `${Bond}`,
  },
];
