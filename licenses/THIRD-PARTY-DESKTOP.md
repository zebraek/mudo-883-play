# 서드파티 고지 — 데스크톱(Windows·Steam) 판 (THIRD-PARTY-DESKTOP.md)

「88.3MHz 무월도」 데스크톱 판에 함께 실리는 서드파티 소프트웨어와 그 라이선스입니다. 서체 5종은 같은 폴더의 `FONTS.md` 를 보십시오.
확인일: 2026-10-08. 구조·빌드는 저장소 `docs/desktop.md`. **GPL·AGPL 구성 요소는 없습니다**(아래 표 + Chromium 고지의 ffmpeg 는 LGPL 2.1 동적 링크).

| 구성 요소 | 판 | 라이선스 | 실리는 곳 | 고지 원문 |
| --- | --- | --- | --- | --- |
| Electron | 44.7.0 | MIT | 실행 파일 전체(`MuwolIsland.exe` 와 같은 폴더의 DLL·pak) | 아래 1절 + 설치 폴더 `LICENSE.electron.txt` |
| Chromium 과 그 구성 요소(V8·Skia·ICU·ffmpeg 등) | Electron 44.7.0 에 포함된 판 | BSD-3-Clause 외 여러 오픈 소스 라이선스(구성 요소별) — `ffmpeg.dll` 은 LGPL 2.1(동적 링크, 독점 코덱 없는 Chromium 빌드) | 같은 폴더 | 설치 폴더 `LICENSES.chromium.html`(Electron 이 배포하는 전문, 약 20MB) |
| Node.js(Electron 내장) | Electron 44.7.0 에 포함된 판 | MIT 외(구성 요소별) | 실행 파일 | `LICENSES.chromium.html` 안 Node.js 항목 |
| steamworks.js | 0.4.0 | MIT | `resources/app.asar.unpacked/node_modules/steamworks.js` | 아래 2절 |
| Steamworks SDK 재배포 파일 `steam_api64.dll` | steamworks.js 0.4.0 동봉본(파일 버전 08.97.99.70, Valve Corp. 서명) | Valve 독점 — **Steamworks SDK 접근 계약**이 Steam 으로 배포하는 게임에 이 재배포 파일을 넣는 것을 허용. 오픈 소스가 아님 | 실행 파일 옆, `app.asar.unpacked` 안 | Steamworks SDK 접근 계약(https://partner.steamgames.com/documentation/sdk_access_agreement) |
| inkjs | 2.4.0 | MIT | 게임 본체 스크립트(웹 판과 같음) | 아래 3절 |
| NSIS(설치판만) | 3.0.4.1(electron-builder 동봉) | zlib/libpng | `MuwolIsland-Setup-*.exe` 설치·제거 프로그램 | https://nsis.sourceforge.io/License |

빌드 도구(electron-builder 26.15.3 MIT, Vite·TypeScript)는 배포물에 실리지 않습니다.

## 1. Electron — MIT

```
Copyright (c) Electron contributors
Copyright (c) 2013-2020 GitHub Inc.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## 2. steamworks.js — MIT

```
MIT License

Copyright (c) 2022 Gabriel Francisco Dos Santos

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 3. inkjs — MIT

```
MIT License

Copyright (c) 2017 inkle Ltd.
Copyright (c) 2017 inkjs contributors (see AUTHORS)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
