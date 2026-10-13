# Third-Party Notices - Desktop (Windows and Steam) Edition

This is the third-party software that ships with the desktop edition of "88.3MHz Muwol Island", and its licenses. For the five typefaces, see `FONTS.md` in the same folder.
Checked: 2026-10-08. Structure and build: `docs/desktop.md` in the repository. **There are no GPL or AGPL components** (see the table below; the ffmpeg listed in the Chromium notices is LGPL 2.1, dynamically linked).

| Component | Version | License | Where it ships | Notice text |
| --- | --- | --- | --- | --- |
| Electron | 44.7.0 | MIT | The whole executable (the DLLs and pak files in the same folder as `MuwolIsland.exe`) | Section 1 below, and `LICENSE.electron.txt` in the install folder |
| Chromium and its components (V8, Skia, ICU, ffmpeg and others) | The version included in Electron 44.7.0 | BSD-3-Clause and various other open source licenses (per component). `ffmpeg.dll` is LGPL 2.1 (dynamically linked; a Chromium build without proprietary codecs) | Same folder | `LICENSES.chromium.html` in the install folder (the full text distributed by Electron, about 20 MB) |
| Node.js (built into Electron) | The version included in Electron 44.7.0 | MIT and others (per component) | Executable | The Node.js entry in `LICENSES.chromium.html` |
| steamworks.js | 0.4.0 | MIT | `resources/app.asar.unpacked/node_modules/steamworks.js` | Section 2 below |
| Steamworks SDK redistributable `steam_api64.dll` | The copy bundled with steamworks.js 0.4.0 (file version 08.97.99.70, signed by Valve Corp.) | Proprietary to Valve. The **Steamworks SDK Access Agreement** permits including this redistributable in games distributed through Steam. It is not open source | Next to the executable, inside `app.asar.unpacked` | Steamworks SDK Access Agreement (https://partner.steamgames.com/documentation/sdk_access_agreement) |
| inkjs | 2.4.0 | MIT | The game's main script (same as the web edition) | Section 3 below |
| NSIS (installer edition only) | 3.0.4.1 (bundled with electron-builder) | zlib/libpng | The install and uninstall program `MuwolIsland-Setup-*.exe` | https://nsis.sourceforge.io/License |

Build tools (electron-builder 26.15.3 MIT, Vite, TypeScript) are not part of the distributed files.

## 1. Electron - MIT

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

## 2. steamworks.js - MIT

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

## 3. inkjs - MIT

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
