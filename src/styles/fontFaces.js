import { css } from "styled-components";

import SpaceMonoBoldTTF from "../font/space-mono-v6-latin/space-mono-v6-latin-700.ttf";
import SpaceMonoBoldWOFF from "../font/space-mono-v6-latin/space-mono-v6-latin-700.woff";
import SpaceMonoBoldWOFF2 from "../font/space-mono-v6-latin/space-mono-v6-latin-700.woff2";
import SpaceMonoBoldItalicTTF from "../font/space-mono-v6-latin/space-mono-v6-latin-700italic.ttf";
import SpaceMonoBoldItalicWOFF from "../font/space-mono-v6-latin/space-mono-v6-latin-700italic.woff";
import SpaceMonoBoldItalicWOFF2 from "../font/space-mono-v6-latin/space-mono-v6-latin-700italic.woff2";
import SpaceMonoRegularItalicTTF from "../font/space-mono-v6-latin/space-mono-v6-latin-italic.ttf";
import SpaceMonoRegularItalicWOFF from "../font/space-mono-v6-latin/space-mono-v6-latin-italic.woff";
import SpaceMonoRegularItalicWOFF2 from "../font/space-mono-v6-latin/space-mono-v6-latin-italic.woff2";
import SpaceMonoRegularTTF from "../font/space-mono-v6-latin/space-mono-v6-latin-regular.ttf";
import SpaceMonoRegularWOFF from "../font/space-mono-v6-latin/space-mono-v6-latin-regular.woff";
import SpaceMonoRegularWOFF2 from "../font/space-mono-v6-latin/space-mono-v6-latin-regular.woff2";

import InconsolataBoldTTF from "../font/inconsolata-v20-latin/inconsolata-v20-latin-700.ttf";
import InconsolataBoldWOFF from "../font/inconsolata-v20-latin/inconsolata-v20-latin-700.woff";
import InconsolataBoldWOFF2 from "../font/inconsolata-v20-latin/inconsolata-v20-latin-700.woff2";
import InconsolataRegularTTF from "../font/inconsolata-v20-latin/inconsolata-v20-latin-regular.ttf";
import InconsolataRegularWOFF from "../font/inconsolata-v20-latin/inconsolata-v20-latin-regular.woff";
import InconsolataRegularWOFF2 from "../font/inconsolata-v20-latin/inconsolata-v20-latin-regular.woff2";

import MontserratSemiBoldTTF from "../font/montserrat-v14-latin/montserrat-v14-latin-600.ttf";
import MontserratSemiBoldWOFF from "../font/montserrat-v14-latin/montserrat-v14-latin-600.woff";
import MontserratSemiBoldWOFF2 from "../font/montserrat-v14-latin/montserrat-v14-latin-600.woff2";

const FontFaces = css`
  @font-face {
    font-family: "Space Mono";
    src: url(${SpaceMonoRegularWOFF2}) format("woff2"),
      url(${SpaceMonoRegularWOFF}) format("woff"),
      url(${SpaceMonoRegularTTF}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Space Mono";
    src: url(${SpaceMonoRegularItalicWOFF2}) format("woff2"),
      url(${SpaceMonoRegularItalicWOFF}) format("woff"),
      url(${SpaceMonoRegularItalicTTF}) format("truetype");
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: "Space Mono";
    src: url(${SpaceMonoBoldWOFF2}) format("woff2"),
      url(${SpaceMonoBoldWOFF}) format("woff"),
      url(${SpaceMonoBoldTTF}) format("truetype");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Space Mono";
    src: url(${SpaceMonoBoldItalicWOFF2}) format("woff2"),
      url(${SpaceMonoBoldItalicWOFF}) format("woff"),
      url(${SpaceMonoBoldItalicTTF}) format("truetype");
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: "Inconsolata";
    src: url(${InconsolataRegularTTF}) format("woff2"),
      url(${InconsolataRegularWOFF}) format("woff"),
      url(${InconsolataRegularWOFF2}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Inconsolata";
    src: url(${InconsolataBoldTTF}) format("woff2"),
      url(${InconsolataBoldWOFF}) format("woff"),
      url(${InconsolataBoldWOFF2}) format("truetype");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Montserrat";
    src: url(${MontserratSemiBoldTTF}) format("woff2"),
      url(${MontserratSemiBoldWOFF}) format("woff"),
      url(${MontserratSemiBoldWOFF2}) format("truetype");
    font-weight: 600;
    font-style: normal;
  }
`;

export default FontFaces;
