# 서체 라이선스 목록 (FONTS.md)

「88.3MHz 무월도」에 동봉된 서체 4종. 전부 **SIL Open Font License 1.1(OFL)** 이며, OFL 은 원본·수정본 모두 상업 소프트웨어(게임·모바일 앱 포함)에 번들·임베드·유료 판매를 허용한다(OFL FAQ 1.3·1.4). 조건은 (1) 서체만 단독 판매 금지, (2) 저작권 고지와 라이선스 전문 동봉, (3) **수정본은 Reserved Font Name(RFN)을 쓰지 못함** — 세 조건 모두 아래 표대로 충족한다. 각 폴더의 `OFL.txt`/`LICENSE.txt` 가 원본 배포처에서 그대로 받은 라이선스 전문이다. 확인일: 2026-09-23, 서브셋 적용·재확인: 2026-09-27.

**2026-09-27 M9 서체 감량:** 배포본은 전부 서브셋이다(원본은 `fonts-src/`, 빌드에 안 실림). 서브셋은 OFL 상 "수정본(Modified Version)"이므로 RFN 이 있는 서체는 **이름을 바꿨다** — D2Coding → **'Mudo Mono'**, Nanum Pen Script → **'Mudo Label'**. Noto Serif KR 은 RFN 이 없어 이름 유지, Pretendard 는 제작자 공식 조각을 무수정으로 두고 파일만 골라 배포(파일 삭제는 수정이 아님)하므로 이름 유지. 도구: fontTools 4.64 `pyftsubset`(MIT) + brotli; 재현: `npm run fonts:subset`, 검증: `npm run fonts:check`(`npm run check` 에 포함).

## 서체별 출처·라이선스·동봉본

| 서체 | 게임 내 용도 | 출처(원본 저장소·배포처) | 버전 | 라이선스 | RFN | 동봉 파일(`public/fonts/…`) | 동봉본의 성격 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Noto Serif KR | 본문(`--font-body`), 400·700 | 원본 <https://github.com/notofonts/noto-cjk> (Serif/LICENSE) · 배포 <https://github.com/google/fonts/tree/main/ofl/notoserifkr> (OFL.txt, METADATA.pb "copyright: (c) 2017-2024 Adobe") · 웹폰트 패키지 <https://www.npmjs.com/package/@fontsource/noto-serif-kr> 5.3.0 | Version 2.003 (Google Fonts v31 빌드, Fontsource 5.3.0) | OFL 1.1 | **없음**(원본 LICENSE·google/fonts OFL.txt 어디에도 RFN 선언 없음 — 2026-09-27 재확인) | `noto-serif-kr/noto-serif-kr-korean-400-normal.woff2`(321,796 B), `…-korean-700-normal.woff2`(331,532 B), `…-latin-400-normal.woff2`(15,532 B), `…-latin-700-normal.woff2`(15,516 B), `OFL.txt`(google/fonts 사본), `LICENSE-noto-cjk-upstream.txt`(notofonts/noto-cjk 사본) | **수정본(서브셋)** — Google Fonts 서브셋(`fonts-src/noto-serif-kr/`)을 아래 「서브셋 범위」로 다시 서브셋. RFN 이 없어 서체명 'Noto Serif KR' 유지(name 테이블 무수정). 힌팅 없음(원본도 없음) |
| Pretendard | UI·상태바·카드(`--font-ui`), 400·700(600 요청도 700 파일) | <https://github.com/orioncactus/pretendard> (LICENSE) · npm `pretendard` 1.3.9 (`dist/web/static/woff2-dynamic-subset/`) | 1.3.9 (name 테이블 Version 1.309) | OFL 1.1 | **'Pretendard'** (+ 파생 원본 Source·Inter·M PLUS 1 의 RFN 병기) | `pretendard/Pretendard-Regular.subset.N.woff2` 44개(합 537,256 B), `Pretendard-Bold.subset.N.woff2` 44개(합 540,092 B), `LICENSE.txt`(GitHub v1.3.9 태그 사본) | **무수정** — 제작자 공식 dynamic subset 92조각 중 **게임 문자열이 닿는 44조각만** 배포(N = 2, 8, 13, 17, 18, 19, 21, 26, 31, 32, 33, 37, 43, 48, 50, 54, 56, 60~64, 70~91). 조각 파일 자체는 바이트 단위로 원본과 동일하고, 안 쓰는 조각을 안 싣는 것은 수정이 아니므로 RFN 문제 없음. 전체 92조각은 `fonts-src/pretendard/` |
| D2Coding → **'Mudo Mono'** | 테이프 자막·라디오 고정폭(`--font-mono`), 400 | <https://github.com/naver/d2-coding-font> (구 `naver/d2codingfont` 에서 이전) · OFL.txt, LICENSE.md · 릴리스 `D2Coding-Ver1.3.3-20260725.zip` | 1.3.3 (Build 20260725, 2026-07-25) | OFL 1.1 | **'D2Coding', 'D2Coding-Bold'** (OFL.txt 1~5행, 2026-09-27 재확인) | `d2coding/MudoMono-Regular.woff2`(299,596 B), `OFL.txt`(릴리스 zip 동봉본, 원본 그대로) | **수정본(서브셋 + 이름 변경)** — 저작권자(네이버) 저장소의 WOFF2(ligature 빌드, `fonts-src/d2coding/`)를 서브셋하고, OFL §3 에 따라 name 테이블의 서체명(ID 1·3·4·6·16·17, 영어·한국어 레코드 전부)을 **'Mudo Mono'/'MudoMono-Regular'** 로 바꿨다. 저작권 고지(ID 0 "Copyright (c) 2015-2016 NAVER Corporation… Font designed by FONTRIX Inc.")·버전(ID 5)·라이선스 문구·URL(ID 13·14)은 그대로. ID 10(설명)에 "Modified version of D2Coding 1.3.3 …" 출처를 적었다. 힌팅·합자(liga/calt) 유지 |
| Nanum Pen Script(나눔손글씨 펜) → **'Mudo Label'** | 테이프 라벨 손글씨(`--font-label`, fonts.css 에서 선언), 400 | <https://github.com/google/fonts/tree/main/ofl/nanumpenscript> (OFL.txt, `NanumPenScript-Regular.ttf`) · 저작권 NHN(현 네이버), 디자인 Sandoll | Version 1.10 | OFL 1.1 | **'Nanum', 'Naver Nanum', 'NanumPen', 'Naver NanumPen'** 등 (OFL.txt 1~4행, 2026-09-27 재확인) | `nanum-pen-script/MudoLabel-Regular.woff2`(371,820 B), `OFL.txt`(google/fonts 사본, 원본 그대로) | **수정본(서브셋 + 이름 변경 + 힌팅 제거)** — 원본 TTF 의 WOFF2 압축본(`fonts-src/nanum-pen-script/`)을 서브셋하고 name 테이블의 서체명을 **'Mudo Label'/'MudoLabel-Regular'** 로 바꿨다(한국어 이름 '나눔손글씨 펜' 레코드 포함 전부). 저작권 고지(ID 0 "Copyright © 2010 NHN Corporation… Font designed by Sandoll Communications Inc.")·버전·라이선스 문구·URL 은 그대로, ID 10 에 출처 표기. TrueType 힌팅 명령을 제거(`--no-hinting`, 109 KB 절감 — 손글씨 라벨 용도라 표시 차이 없음; 모바일·macOS 는 힌팅을 원래 무시) |

## 서브셋 범위(4종 공통, `scripts/fonts/lib.mjs`)

- **게임 텍스트 전체에서 실제 쓰인 글자**: `story/**/*.ink`(주석 제외), `data/**/*.{json,csv,txt}`, `src/**/*.{ts,css}` 의 문자열 리터럴(주석·식별자 제외, `tests/` 제외), `index.html`. 2026-09-27 기준 154파일 → 1,107자(한글 947).
- **기본 글리프**(텍스트와 무관하게 늘 포함): ASCII 인쇄 문자(U+0020~007E), **KS X 1001 완성형 한글 2,350자**(`scripts/fonts/ksx1001-hangul.txt`), 호환 자모 ㄱ~ㅣ(U+3131~3163, 명령 입력 중 표시), UI 기호(따옴표·줄표·말줄임·가운뎃점·화살표·수학·○●◐■□▶◀▲▼░▒▓❚·①~⑮·「」『』【】〈〉《》·라틴-1 보충 기호·상자 그림 — `BASE_SYMBOLS`). 합계 2,649자.
- 서체마다 "원본에 있는 글자 ∩ 위 집합"을 넣는다. 원본에 없던 글자(예: Noto 의 「」①▶ 등 46자)는 전과 같이 시스템 서체로 대체되며 `fonts:check` 가 정보로 표시한다. **원본에는 있는데 서브셋에서 빠진 글자는 0** — `fonts:check` 가 오류로 막는다(`npm run check`·`npm test` 포함).
- Pretendard 는 서브셋을 만들지 않고, 위 "실제 쓰인 글자"(기본 글리프 제외)가 unicode-range 에 닿는 공식 조각만 배포한다. 텍스트가 늘어 다른 조각에 닿으면 `fonts:check` 가 잡고 `npm run fonts:subset --pretendard-only`(Python 불필요)로 동기화한다.
- pyftsubset 옵션: `--flavor=woff2 --unicodes-file=… --name-IDs='*' --name-legacy --name-languages='*' --notdef-outline`(레이아웃 기능은 기본값 = liga·calt·kern 등, 힌팅 유지; Nanum Pen 만 `--no-hinting`). 이름 변경은 `scripts/fonts/rename-font.py`(fontTools, `recalcTimestamp=False` 로 재현 가능). 같은 원본·같은 텍스트면 바이트 단위로 같은 결과가 나온다(2회 실행 sha1 일치 확인).

## 파일 크기 — 전후

| 서체 | 이전(2026-09-23, 원본 그대로) | 이후(2026-09-27, 서브셋) | 비고 |
| --- | ---: | ---: | --- |
| Noto Serif KR 400 한글 | 971,428 B | 321,796 B | 글리프 11,541 → 2,541 |
| Noto Serif KR 700 한글 | 1,033,556 B | 331,532 B | 글리프 11,541 → 2,541 |
| Noto Serif KR 400/700 라틴 | 19,356 / 19,500 B | 15,532 / 15,516 B | 글리프 218 → 140 |
| Pretendard Regular | 1,164,296 B (92조각) | 537,256 B (44조각) | 무수정, 조각 선별 |
| Pretendard Bold | 1,168,948 B (92조각) | 540,092 B (44조각) | 무수정, 조각 선별 |
| D2Coding → Mudo Mono | 1,492,912 B | 299,596 B | 글리프 19,966 → 2,648(+합자 등 부가 123) |
| Nanum Pen Script → Mudo Label | 615,768 B | 371,820 B | 글리프 11,742 → 2,534, 힌팅 제거 |
| **합계(woff2 190개 → 94개)** | **6,485,764 B ≈ 6.49 MB** | **2,433,140 B ≈ 2.43 MB** | 목표 2.5 MB 이하 |
| 첫 로딩 실요청 상한(본문 400 한글+라틴 + Pretendard Regular 44조각 전부) | ≈ 1.3 MB | **874,584 B ≈ 0.87 MB** | 목표 1 MB 이하. 실제로는 첫 화면 글자가 닿는 조각만 요청되므로 이보다 작다 |

- Noto 700 은 첫 `.reveal` 줄에서, Mudo Mono 는 첫 테이프에서, Mudo Label 은 첫 라벨에서 한 번만 내려받는다. Pretendard Bold 도 굵은 UI 글자가 나올 때 해당 조각만. `font-display: swap`.

## 글리프 커버리지(2026-09-27 기준, `npm run fonts:check` 출력)

- 실제 사용 1,107자 중 Noto Serif KR 원본에 없는 46자(`←→↺∞≠≡≤≥①~⑨▍░▒▓■□▮▯▲▶▼◀◆○●☁★✕⟲〈〉《》「」『』【】`)는 UI 장식·기호이며 시스템 서체로 대체된다(서브셋 전과 동일, 라이선스 문제 아님). Mudo Mono 는 `⟲` 1자, Mudo Label 은 기호 52자, Pretendard 는 `↺−▍░▓▮▯☁✕⟲` 10자가 같은 이유로 대체된다.
- 동봉 Noto 파일의 name 테이블 family 명은 'Noto Serif KR ExtraLight' 로 찍혀 있다(Google Fonts 가변 서체의 기본 인스턴스명, 전 웨이트 공통). 렌더링·라이선스와 무관하고 CSS `font-family: 'Noto Serif KR'` 로 지정한다.
- 이름 변경 서체의 name 테이블 확인(`fonts:check` 가 매번 검사): ID 1/4/16 'Mudo Mono' · ID 6 'MudoMono-Regular' / ID 1/4 'Mudo Label' · ID 6 'MudoLabel-Regular'. 어느 이름 레코드에도 'D2Coding'·'Nanum'·'Naver'·'나눔' 이 남아 있지 않다(ID 0 저작권 고지·ID 10 출처 설명은 OFL FAQ 가 허용하는 표기).

## 손글씨 후보 비교(OQ-06 ② 손글씨 무료 폰트 대체)

| 후보 | 라이선스 | RFN | 한글 | 인상 | 판정 |
| --- | --- | --- | --- | --- | --- |
| **Nanum Pen Script** (채택) | OFL 1.1 (google/fonts OFL.txt 확인) | 있음(NanumPen 등) | 11,172자 전체 | 볼펜 손글씨 — 카세트 라벨에 가장 가까움 | **채택.** 2026-09-27 부터 서브셋·'Mudo Label' 로 이름 변경 |
| Nanum Brush Script | OFL 1.1 (google/fonts OFL.txt 확인) | 있음(NanumBrush 등) | 11,172자 전체 | 붓글씨 — 라벨엔 과함 | 예비 |
| Gaegu | OFL 1.1 (google/fonts OFL.txt, Copyright 2018 The Gaegu Project Authors) | **없음** → 자유 서브셋 가능(한글 2,350자 파일 283,736 B) | 2,350자(KS X 1001) | 아이 낙서풍 — 성인 DJ 라벨과 어긋남 | 예비 |

## 고지 의무 이행

- 각 서체 폴더에 원본 라이선스 전문 동봉(위 표, 무수정). 배포 빌드(`dist/`)에 `public/` 이 그대로 복사되므로 웹·앱 패키지에도 함께 들어간다. 이 문서(`public/licenses/FONTS.md`)도 같이 실린다.
- 수정본 2종(Mudo Mono·Mudo Label)은 파일 안 name 테이블에도 원본 저작권 고지·OFL 문구·출처 설명을 유지한다(OFL §1·§3).
- 크레딧 화면·`docs/asset_credits.md` 에 서체명·저작권자·OFL 표기. 수정본은 "OO 의 수정본(서브셋, 이름 변경)" 으로 적는다(OFL 은 고지를 "요구"하진 않지만 저작권 고지·라이선스 동봉은 필수 조건이고, 크레딧 표기는 관례).
