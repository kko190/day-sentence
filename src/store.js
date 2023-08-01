import { configureStore, createSlice } from "@reduxjs/toolkit";

let conversation = createSlice({
  name: "conversation",
  initialState: [
    {
      sentence: "How are you dealing with that?",
      interpretation: "어떻게 대처해?",
    },
    {
      sentence: "I don't get the point ~",
      interpretation: "왜 ~해야 하는지 모르겠어.",
    },
    {
      sentence: "What do you guys want to study?",
      interpretation: "너희들은 뭐 배우고 싶어?",
    },
    {
      sentence: "Never say never",
      interpretation: "불가능은 없죠 / 좌절하지 마세요.",
    },
    {
      sentence: "What's poppin?",
      interpretation: "뭐해? 잘지내?",
    },
    {
      sentence: "Talk to the hand.",
      interpretation: "듣기 싫어요.",
    },
    {
      sentence: "You have my word.",
      interpretation: "약속할게요.",
    },
    {
      sentence: "I've had it up to here.",
      interpretation: "정말 더 이상은 못 참겠어.",
    },
    {
      sentence: "I feel ravenous.",
      interpretation: "난 배가 엄청 고파.",
    },
    {
      sentence: "Fight fire with fire.",
      interpretation: "눈에는 눈 이에는 이",
    },
    {
      sentence: "Go for it.",
      interpretation: "한 번 해봐요.",
    },
    {
      sentence: "Not a chance.",
      interpretation: "어림도 없지.",
    },
    {
      sentence: "What are you up to?",
      interpretation: "너는 뭐 할거야?(예정이야)",
    },
    {
      sentence: "You don't say...",
      interpretation: "설마...",
    },
    {
      sentence: "check it out!",
      interpretation: "이것좀 봐봐!",
    },
    {
      sentence: "Get the picture?",
      interpretation: "이해했죠?",
    },
    {
      sentence: "Out of the blue.",
      interpretation: "뜻밖이에요.",
    },
    {
      sentence: "As far as I know",
      interpretation: "내가 아는 한",
    },
    {
      sentence: "Why bother?",
      interpretation: "뭐하러 그래?(굳이? 왜?)",
    },
    {
      sentence: "I guess that explains it.",
      interpretation: "그래서 그랬군요.",
    },
    {
      sentence: "You had me at hello.",
      interpretation: "첫눈에 반했어요.",
    },
    {
      sentence: "Time to face the music.",
      interpretation: "책임질 시간이야.",
    },
    {
      sentence: "Don't play dumb with me.",
      interpretation: "나 갖고 놀지마.",
    },
    {
      sentence: "I'm the guy you tell.",
      interpretation: "저한테 말해주세요.",
    },
    {
      sentence: "First impressions last.",
      interpretation: "첫 인상이 끝까지 가.",
    },
    {
      sentence: "Get it through your head.",
      interpretation: "잘 생각해봐.",
    },
    {
      sentence: "But I swamped and I don't have time.",
      interpretation: "근데 바빠서 그럴 시간이 없네요.",
    },
    {
      sentence: "Don't make me remind you that you owe me one.",
      interpretation: "나한테 빚진거 있잖아요.",
    },
    {
      sentence: "He's gotten himself into really bad stuff.",
      interpretation: "그가 정말 나쁜 일에 빠졌어요.",
    },
    {
      sentence: "I've been under so much pressure.",
      interpretation: "나도 너무 힘들어.",
    },
    {
      sentence: "Screw sin-myeong-ho",
      interpretation: "신명호는 내버려둬.",
    },
    {
      sentence: "Buts that kid is an anchor.",
      interpretation: "그녀석은 변하지 않아.",
    },
    {
      sentence: "You need to cut him loose.",
      interpretation: "끊어버려야 해(손절쳐야함).",
    },
    {
      sentence: "I need a word in private.",
      interpretation: "조용하게 저랑 얘기 좀 해요.",
    },
    {
      sentence: "I never said you were my prom queen.",
      interpretation: "당신이 좋아서가 아닙니다.",
    },
    {
      sentence: "Why should? never gonna get it.",
      interpretation: "왜요? 어차피 소용없을텐데요.",
    },
    {
      sentence: "Can I ask you something?",
      interpretation: "뭐 하나만 물어봐도 될까요?",
    },
    {
      sentence: "So what made you change your mind?",
      interpretation: "왜 마음이 바뀐거에요?",
    },
    {
      sentence: "Taketh me to ~",
      interpretation: "~로 가주세요.(ex.택시)",
    },
    {
      sentence: "Can we talk for a minutes?",
      interpretation: "잠깐 얘기 좀 할까?",
    },
    {
      sentence: "Is that what you came here to tell me?",
      interpretation: "그말 하러 왔어?",
    },
    {
      sentence: "I'm psyched!",
      interpretation: "너무 신나! 흥분돼!",
    },
    {
      sentence: "Hop in~",
      interpretation: "(차에) 타~",
    },
    {
      sentence: "Don't rock the boat!",
      interpretation: "말썽 피우지마.",
    },
    {
      sentence: "Don't be naive.",
      interpretation: "순진하긴.",
    },
    {
      sentence: "What a day!",
      interpretation: "기분 좋은 날이다! / 끔찍한 날이네!",
    },
    {
      sentence: "Walk me out.",
      interpretation: "좀 걷자.",
    },
    {
      sentence: "I'm on it",
      interpretation: "내가 하는 중이야.",
    },
    {
      sentence: "I'm not trying to twist your arm.",
      interpretation: "강요하려는 건 아냐.",
    },
    {
      sentence: "Oh! for God's sake!",
      interpretation: "제발 쫌!",
    },
    {
      sentence: "Don't go there",
      interpretation: "그 얘기 꺼내지마 / 거기 가지마",
    },
    {
      sentence: "For your information.",
      interpretation: "참고로 말하자면",
    },
    {
      sentence: "No kidding",
      interpretation: "장난아니야. 진짜야.",
    },
    {
      sentence: "Stay close",
      interpretation: "어디가지말고 있어",
    },
    {
      sentence: "Where have you been?",
      interpretation: "어디 있었어?",
    },
    {
      sentence: "Guess what?",
      interpretation: "그거 알아? / 있잖아",
    },
    {
      sentence: "Just making chitchat.",
      interpretation: "수다떠는 중이야",
    },
    {
      sentence: "Nature calls~",
      interpretation: "화장실 좀~",
    },
    {
      sentence: "Tell me about it.",
      interpretation: "내 말이 (누가 아니래)",
    },
    {
      sentence: "Here's the deal.",
      interpretation: "자 이렇게 하자.",
    },
    {
      sentence: "A word?",
      interpretation: "잠깐 얘기 좀 할까?",
    },
    {
      sentence: "Don't get me a wrong",
      interpretation: "오해하지마.",
    },
    {
      sentence: "I owe you big",
      interpretation: "네게 크게 신세졌어.",
    },
    {
      sentence: "I'll see what I can do.",
      interpretation: "내가 할 수 있는게 있는지 알아볼게",
    },
    {
      sentence: "You have my word.",
      interpretation: "약속할게.",
    },
    {
      sentence: "No offense",
      interpretation: "기분나쁘게 듣지 마.",
    },
    {
      sentence: "I'll take my chances.",
      interpretation: "운에 맡겨 볼래 / 일단 해볼게.",
    },
    {
      sentence: "I feel like I let you down.",
      interpretation: "널 실망시킨 것 같아.",
    },
    {
      sentence: "You bet!",
      interpretation: "물론이지!",
    },
    {
      sentence: "I'll hold down the fort.",
      interpretation: "내가 대신 (자리/일)을 봐줄게",
    },
    {
      sentence: "Thank you for the heads-up.",
      interpretation: "주의해줘서 고마워.",
    },
    {
      sentence: "You wanna drink?",
      interpretation: "한 잔 할래?",
    },
    {
      sentence: "It's crap!",
      interpretation: "헛소리야!",
    },
    {
      sentence: "We're good to go!",
      interpretation: "준비됐어! / 가는거야!",
    },
    {
      sentence: "He dropped the ball.",
      interpretation: "그가 (책임지고 있는 일을) 실수했어.",
    },
    {
      sentence: "Forget it!",
      interpretation: "신경쓰지마 / 잊어버려",
    },
    {
      sentence: "Let's get back to work.",
      interpretation: "자 다시 일하죠.",
    },
    {
      sentence: "I had lot of fun!",
      interpretation: "진짜 재밌었어!",
    },
    {
      sentence: "I'm still on the clock.",
      interpretation: "나 아직 근무중이야.",
    },
    {
      sentence: "Do the math!",
      interpretation: "잘 생각해봐!",
    },
    {
      sentence: "I need you to be honest.",
      interpretation: "솔직해주길 바래.",
    },
    {
      sentence: "Bring it on!",
      interpretation: "덤벼봐.",
    },
    {
      sentence: "It's lame.",
      interpretation: "시시해. 별로야.",
    },
    {
      sentence: "I don't feel like it.",
      interpretation: "그럴 기분 아냐 / 귀찮아",
    },
    {
      sentence: "Wanna take a look?",
      interpretation: "한번 봐 볼래?",
    },
    {
      sentence: "That's enough!",
      interpretation: "적당히 좀 해!",
    },
    {
      sentence: "I'm not blowing you off!",
      interpretation: "나 너 무시하는거 아니야!",
    },
    {
      sentence: "Don't mess with me.",
      interpretation: "까불지마.",
    },
    {
      sentence: "No offense",
      interpretation: "기분 나쁘게 듣지 마.",
    },

    {
      sentence: "I'm just exaggeration a bit.",
      interpretation: "말이 그렇다는 것이죠.",
    },
    {
      sentence: "Nothing can excuse this.",
      interpretation: "변명의 여지가 없습니다.",
    },
    {
      sentence: "This is a foolproof plan!",
      interpretation: "이건 아주 쉬워!",
    },
    {
      sentence: "Does it ring a bell?",
      interpretation: "그거 기억 나?",
    },
    {
      sentence: "I have a lot on my plate.",
      interpretation: "할 일이 산더미 처럼 많아.",
    },
    {
      sentence: "I'm gonna have to take a rain check.",
      interpretation: "다음으로 미뤄야만 할 것 같아요.",
    },
    {
      sentence: "It's rings a bell.",
      interpretation: "기억이 날 듯 말 듯해.",
    },
    {
      sentence: "I'll have to sleep on it.",
      interpretation: "내가 좀 더 생각해 볼게.",
    },
    {
      sentence: "I'm don't feel well.",
      interpretation: "컨디션이 좋지 않네요.",
    },
    {
      sentence: "You're on the right track.",
      interpretation: "잘 하고 있어(칭찬, 격려).",
    },
    {
      sentence: "Stop acting coy.",
      interpretation: "내숭 좀 그만 떨어.",
    },
    {
      sentence: "That's my affair!.",
      interpretation: "네 알바 아냐!",
    },
    {
      sentence: "That's much better.",
      interpretation: "이제 좀 살 것 같아요.",
    },
    {
      sentence: "That's no bottle.",
      interpretation: "그건 쓸 데 없는 짓이다.",
    },
    {
      sentence: "You bet I do!",
      interpretation: "내 말이!",
    },
    {
      sentence: "Your butt is on fire.",
      interpretation: "발등에 불 떨어졌구나.",
    },
    {
      sentence: "I think I like it better that way.",
      interpretation: "난 저 방식이 더 좋은 것 같아.",
    },
  ],
});

let recommend = createSlice({
  name: "recommend",
  initialState: [
    {
      title: "모던 패밀리",
      season: "시즌1~11",
      platform: "디즈니+",
    },
    {
      title: "글리",
      season: "시즌1~6",
      platform: "디즈니+",
    },
    {
      title: "더 오피스",
      season: "시즌1~9",
      platform: "왓챠",
    },
    {
      title: "빅뱅 이론",
      season: "시즌1~12",
      platform: "쿠팡플레이",
    },
    {
      title: "슈츠",
      season: "시즌1~9",
      platform: "넷플릭스",
    },
    {
      title: "그레이스 앤 프랭키",
      season: "시즌1~7",
      platform: "넷플릭스",
    },
    {
      title: "가십걸",
      season: "시즌1~6",
      platform: "넷플릭스&쿠플",
    },
    {
      title: "위기의 주부들",
      season: "시즌1~8",
      platform: "디즈니+",
    },
    {
      title: "브루클린 99",
      season: "시즌1~8",
      platform: "넷플릭스",
    },
    {
      title: "너의 모든 것",
      season: "시즌1~3",
      platform: "넷플릭스",
    },
    {
      title: "굿 플레이스",
      season: "시즌1~4",
      platform: "넷플릭스",
    },
    {
      title: "애나 만들기",
      season: "총 9부작",
      platform: "넷플릭스",
    },
  ],
});

export default configureStore({
  reducer: {
    conversation: conversation.reducer,
    recommend: recommend.reducer,
  },
});
