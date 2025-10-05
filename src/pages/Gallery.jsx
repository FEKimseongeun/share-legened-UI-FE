import React from 'react';

const MasonryCards = () => {
  // 카드 데이터 배열
  const cardData = [
    {
      id: 1,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002502.png",
      text: "피카츄 : 거다이맥스의 모습",
      linkText: "출처 : 포켓몬코리아",
    },
    {
      id: 2,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001801.png",
      text: "피죤투",
      linkText: "출처 : 포켓몬코리아",
    },
    {
      id: 3,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005102.png",
      text: "닥트리오",
    },
    {
      id: 4,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005401.png",
      text: "고라파덕 : 항상 두통에 시달리고 있다",
    },
    {
      id: 5,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005801.png",
      text: "가디 : 용감하고 믿음직스런 성격이다.",
    },
    {
      id: 6,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/007701.png",
      text: "포니타 : 태어나서 1시간이 지나면 멋진 모습이 된다.",
    },
    {
      id: 7,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/008001.png",
      text: "야도란 : 먹이를 잡으러 갔다가 셀러에게 꼬리를 물려 야도란됨",
    },
    {
      id: 8,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/009401.png",
      text: "팬텀 : ㄹㅇ 말 안 듣게 생김",
    },
    {
      id: 9,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/010401.png",
      text: "탕구리 ",
    },
    {
      id: 10,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000601.png",
      text: "어니부기 : 길고 탐스러운 꼬리는 장수의 상징이다. ",
    },
    {
      id: 11,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/012401.png",
      text: "루주라 : 저기 누구 셰프 마누라임",
    },
    {
      id: 12,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013103.png",
      text: "라프라스 : 바다 위를 헤엄쳐 다니며 태워 준다.",
    },
    {
      id: 13,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013201.png",
      text: "메타몽 : 다른 포켓몬으로 변신하는 능력이 있다.",
    },
    {
      id: 14,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013301.png",
      text: "이브이 : 진화의 다양성은 포켓몬 중 최고다.",
    },
    {
      id: 15,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/014301.png",
      text: "잠만보 : 잠만 자는 포켓몬 (내 최애임)",

    },
    {
      id: 16,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/015101.png",
      text: "뮤 : 그냥 근본",

    },
    {
      id: 17,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/019701.png",
      text: "블래키 : 이브이의 어둠진화 포켓몬",

    },
    {
      id: 18,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/024901.png",
      text: "루기아 : 전설의 포켓몬",

    },
    {
      id: 19,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/028201.png",
      text: "가디안 : 아름다운 외모와...",

    },
    {
      id: 20,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/031101.png",
      text: "플러시 : 몸에서 스파크를 일으켜서 동료를 응원한다.",
    },
    {
      id: 21,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/038001.png",
      text: "라티아스 : 조 아 라 티 아 스",
    },
    {
      id: 22,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/038101.png",
      text: "라티오스 : 라 티 오 스 도 조 아",
    },
    {
      id: 23,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/040301.png",
      text: "꼬링크 : 카 와 이 이",
    },
    {
      id: 24,
      image: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/048301.png",
      text: "디아루가 : 시공을 관장하는 포켓몬 (근 본)",
    }
  ];

  return (
    <>
      <style>{`
        @import "https://unpkg.com/open-props" layer(design.system);
        @import "https://unpkg.com/open-props/normalize.min.css" layer(demo.support);

        @keyframes slide-in {
        from {
            scale: .85;
            rotate: calc((var(--side, 1) * (5deg * var(--amp, 1))));
        }
        }

        @layer demo {
        .card-animation-layer {
            @media (prefers-reduced-motion: no-preference) {
            @supports (animation-timeline: view()) {
                animation: slide-in linear both;
                animation-timeline: view();
                animation-range: cover 0% contain 15%;
            }
            }
        } 
        }

        @layer demo.support {
        body {
            background: #dcdee7ff;
            display: grid;
            place-content: end center;
            padding: var(--size-5);
            gap: var(--size-5);
        } 
        
        main {
            --cols: 2;
            display: grid;
            grid-template-columns: repeat(var(--cols), minmax(0, var(--size-content-1)));
            gap: var(--size-5);
            padding-inline: var(--size-5);
            padding-block: 70svh 30svh;
            place-items: start;
            
            @media (width >= 720px)  { --cols: 4 }
            @media (width >= 1200px) { --cols: 6 }
            @media (width >= 1920px) { --cols: 8 }
            
            & > .card-animation-layer {
            display: grid;
            gap: var(--size-0);
            
            &:nth-of-type(2n + 1) { transform-origin: 25vw 100%; --side: -1; }
            &:nth-of-type(2n)     { transform-origin: -25vw 100%; --side: 1; }
            
            @media (width >= 720px) {
                &:nth-of-type(4n + 1) { transform-origin: 50vw 100%; --side: -1; --amp: 2; }
                &:nth-of-type(4n + 2) { transform-origin: 25vw 100%; --side: -1; }
                &:nth-of-type(4n + 3) { transform-origin: -25vw 100%; --side: 1 }
                &:nth-of-type(4n)     { transform-origin: -50vw 100%; --side: 1; --amp: 2; }
            }
            
            @media (width >= 1200px) {
                &:nth-of-type(6n + 1) { transform-origin: 75vw 100%; --side: -1; --amp: 3; }
                &:nth-of-type(6n + 2) { transform-origin: 50vw 100%; --side: -1; --amp: 2; }
                &:nth-of-type(6n + 3) { transform-origin: 25vw 100%; --side: -1; }
                &:nth-of-type(6n + 4) { transform-origin: -25vw 100%; --side: 1; }
                &:nth-of-type(6n + 5) { transform-origin: -50vw 100%; --side: 1; --amp: 2; }
                &:nth-of-type(6n)     { transform-origin: -75vw 100%; --side: 1; --amp: 3; }
            }
            
            @media (width >= 1920px) {
                &:nth-of-type(8n + 1) { transform-origin: 100vw 100%; --side: -1; --amp: 4; }
                &:nth-of-type(8n + 2) { transform-origin: 75vw 100%; --side: -1; --amp: 3; }
                &:nth-of-type(8n + 3) { transform-origin: 50vw 100%; --side: -1; --amp: 2; }
                &:nth-of-type(8n + 4) { transform-origin: 25vw 100%; --side: -1; }
                &:nth-of-type(8n + 5) { transform-origin: -25vw 100%; --side: 1; }
                &:nth-of-type(8n + 6) { transform-origin: -50vw 100%; --side: 1; --amp: 2; }
                &:nth-of-type(8n + 7) { transform-origin: -75vw 100%; --side: 1; --amp: 3; }
                &:nth-of-type(8n)     { transform-origin: -100vw 100%; --side: 1; --amp: 4; }
            }
            }
        }
        article.card {
            padding : 1em !important;
            }
        .card {
            background: var(--surface-2);
            border: 1px solid color-mix(in srgb, var(--surface-4), #0000 50%);
            border-radius: var(--radius-4);
            box-shadow: var(--shadow-4);
            &.landscape img { aspect-ratio: var(--ratio-landscape) }
            &.portrait img { aspect-ratio: var(--ratio-portrait) }
            &.square img { aspect-ratio: var(--ratio-square) }
            & > p {
            color: var(--text-3);
            line-clamp: 2;
            }
            
            & > :is(a, p) {
            font-size: 12px;
            line-height: 1.25;
            }
            
            img {
            background-color: #edeff8ff;
            border-radius: var(--radius-3);
            margin-block-end: 12px;
            box-shadow: var(--shadow-4) inset;
            }
            
            @media (prefers-color-scheme: light) {
            background: white;
            }
        }
        
        h5 {
            max-inline-size: 100%;
            text-align: center;
        }
        }
      `}</style>
      
      <main>
        {cardData.map((card) => (
          <div key={card.id} className="card-animation-layer">
            <article className="card">
              <img 
                src={card.image} 
                alt="placeholder-hand-drawn-vector" 
                height="500px" 
                width="500px"
              />
              <p>{card.text}</p>
              <a href="https://blush.design/collections/i6aPXTYbSUdZEveWhgik/transhumans">
                {card.linkText}
              </a>
            </article>
          </div>
        ))}
      </main>
    </>
  );
};

export default MasonryCards;