/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 12:10:23
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-11 10:38:05
 */
import { createGlobalStyle } from "styled-components";

export const IconGlobalStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1570761404646'); /* IE9 */
  src: url('./iconfont.eot?t=1570761404646#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAW4AAsAAAAACuQAAAVrAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDZAqICIZiATYCJAMgCxIABCAFhG0HfxtjCRFVpGuR/RgcdxsRk1JodkOUVqb8xvMlPm7vvXfHA7S//87cuVoSSVamQ1LdpNABvpB3//Ds8l819K8ZCBNwN0j9gd9Gfv2aJimDXlUXlLEljzZH7wPP3oa86v9/zNfl8YHltWdziUzqtkgajxJoQJ0/qUA+aJSo/0U8m+xChUG5cZ2A6lrrKUz08MMBKsXFAVK2pKfGA7SgkXaQglKeN2xNQTgPMmXSCp8FnHOfHypMAgoksgj4jWasc08CTj8bVWiEzbDBksgGJ/ZnwmgXET2REk40Wg5Bgr+nqPriIalpgJpKifRno5+Wv4Mrl97QDEMBb4GbEnBTUFPga5uJ2/zPE2RyBSEHKKkJxDXi4i5yFSLy0wKR8NMSkfI7GBGo9CMyKlOInAqtUQC+nF0XTQiDgXCfEQeaEimwDaYYUk8YRcUxQSkJPu6RkhLjQgQTzsOUSvF918DVq3jACejGK+rkdXJePubEteD5+69Pn4JgdZIPZ2Vi4RFDCtUnpBbE78HageqBdbB623mIQ1Ecd0+7uVuXwIllrP0IBFFUqiHF4bDIoQEwp2ESMaJmHjJ3WqZx5JjseklqfM2Obepzd13TO0weuAFdf0keaOSLF8SpG45zB9vXcAqOxsqzav768mVqrfZl9hKLr22Fs4ZaOaOpRQxHrYG4OSssgbYlkB70wdj8Puka+MB2iasQxNp+WSGjr1jW2XZJPp24aHaYHFrotXRObM7IpPTa5Xbd9eM0SbDkqXwUieEsZSzcM4Ifw5IyCXkMJ0i8YWRk24DYAr65CfG5YQNX5JScTwyah6yRWEQNT2nUjBga+rM3PPxen93OcPPWrc2wUy1/l9M+rr9/032RrtN/6gr1DOltgYMpUy51nXhpbW0mwfX6ptGBBOySkO5wg+uPw+6iY0P7QNzOBrnaZDp/NObrZPM0Zn7RmWaN/sh0+qTeGvyrOZUHH2g3WwTBUEsAEArh6UWlXzxo3eJ951b+drnDklKYxBaZ394DIqZ/ZBRLN/t7iAe4A+vzEg+25+gUuSCjZ8+OaiEy1CKjablLkc7z7dtX5OfK/12EK2ZnK1AIoxmpQJBlmZAP2lw9KCAsJyyQNfMfmI+St9vZxS8RJyAsAJTsobth3GrT6g+fzv7BL9wWOhbHJlBQzmU/ZMeCUatgmuk8IKzek06a2Wz9mT6gOlRVP+1D6y8fTz3Yu/iA+qT2DmN2c+HBPnrdQMSfrgAFj3VO4YDZ6nS08vXhpOuX0+cE0zDDsV8DK1f90l6pqRZ85P/3J8FajuKCaOOXtehpRAXFHYvM6sP+H5nZMV5T+xdwBFVMPBgBVRwkHKkGys04hyhQTsSL0ZLyMD6OSsEDyLHo9MeeZu92ojVW0O4biv3Y294cx/a6vCo2F4gngH+nFJn7N+YSa9Iln2vLdF6a4pBtpalfuDdBddHEH9hR38d9yhqRkwlKjRIkCq0gKnXEpsSekKlhIORKY6C6Hi6eu2t4UODAMK1moLtGBkO3NsDItX84cOsc9pB4D448ewfHbgMC5/6C6JEXXkL6uSujFnTU7Mm2OSmpl3Of+gW9DjXn+Y78B+6ti+YGRuXQJxJ4Hyv6jV6IKFKcI32wmyGETIWzQysTI1KWU8OUpleatDkOzr1iUBPQIQn2SLpWlijTWpxXPv4LaGtBjTsKLhj/AOvZwYkxA0YE7KckkQqey+hCG9pCEaGyWSlYFhEPMEEQ/ozkNU9yoCUm0rbwFkuG2CiFKpkcXxZf6T6ojj+mDEmIIQ1ZyEMRylDN4e5i08i5vnwOy8etQettOk+pk+5qZ434oUm0usMT4zpZ2a+CTbioJvYe0pqz5JOaBwMA') format('woff2'),
  url('./iconfont.woff?t=1570761404646') format('woff'),
  url('./iconfont.ttf?t=1570761404646') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1570761404646#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
