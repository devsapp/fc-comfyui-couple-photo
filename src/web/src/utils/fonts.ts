// 此代码来自 https://www.zhangxinxu.com/wordpress/2018/02/js-detect-suppot-font-family/
export function isFontInstalled(fontFamily: string) {
  if (typeof fontFamily != 'string') {
    return false;
  }

  var defaultFontFamily = 'Arial';
  if (fontFamily.toLowerCase() == defaultFontFamily.toLowerCase()) {
    return true;
  }

  var defaultLetter = 'a';
  var defaultFontSize = 100;

  // 使用该字体绘制的canvas
  var width = 100,
    height = 100;
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  canvas.width = width;
  canvas.height = height;
  if (!!context) {
    // 全局一致的绘制设定
    context.textAlign = 'center';
    context.fillStyle = 'black';
    context.textBaseline = 'middle';

    return (
      getFontData(
        defaultFontFamily,
        context,
        width,
        height,
        defaultFontSize,
        defaultFontFamily,
        defaultLetter
      ).join('') !==
      getFontData(
        fontFamily,
        context,
        width,
        height,
        defaultFontSize,
        defaultFontFamily,
        defaultLetter
      ).join('')
    );
  }
  return false;
}

function getFontData(
  fontFamily: string,
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  defaultFontSize: number,
  defaultFontFamily: string,
  defaultLetter: string
) {
  // 清除
  context.clearRect(0, 0, width, height);
  // 设置字体
  context.font =
    defaultFontSize + 'px ' + fontFamily + ', ' + defaultFontFamily;
  context.fillText(defaultLetter, width / 2, height / 2);

  var data = context.getImageData(0, 0, width, height).data;

  return [].slice.call(data).filter(function (value) {
    return value != 0;
  });
}

const fontList = [
  {
    family: 'Academy Engraved LET',
    fullName: 'Academy Engraved LET Plain:1.0',
    style: 'Plain',
  },
  {
    family: 'Al Bayan',
    fullName: 'Al Bayan Plain',
    style: 'Plain',
  },
  {
    family: 'Al Bayan',
    fullName: 'Al Bayan Bold',
    style: 'Bold',
  },
  {
    family: 'Al Nile',
    fullName: 'Al Nile',
    style: 'Regular',
  },
  {
    family: 'Al Nile',
    fullName: 'Al Nile Bold',
    style: 'Bold',
  },
  {
    family: 'Al Tarikh',
    fullName: 'Al Tarikh Regular',
    style: 'Regular',
  },
  {
    family: 'Alibaba PuHuiTi',
    fullName: '阿里巴巴普惠体 Bold',
    style: 'Bold',
  },
  {
    family: 'Alibaba PuHuiTi',
    fullName: '阿里巴巴普惠体 Heavy',
    style: 'Heavy',
  },
  {
    family: 'Alibaba PuHuiTi',
    fullName: '阿里巴巴普惠体 Light',
    style: 'Light',
  },
  {
    family: 'Alibaba PuHuiTi',
    fullName: '阿里巴巴普惠体 Medium',
    style: 'Medium',
  },
  {
    family: 'Alibaba PuHuiTi',
    fullName: '阿里巴巴普惠体',
    style: 'Regular',
  },
  {
    family: 'Alibaba Sans',
    fullName: 'Alibaba Sans Black',
    style: 'Black',
  },
  {
    family: 'Alibaba Sans',
    fullName: 'Alibaba Sans Bold',
    style: 'Bold',
  },
  {
    family: 'Alibaba Sans',
    fullName: 'Alibaba Sans Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Alibaba Sans',
    fullName: 'Alibaba Sans Heavy',
    style: 'Heavy',
  },
  {
    family: 'Alibaba Sans',
    fullName: 'Alibaba Sans Heavy Italic',
    style: 'Heavy Italic',
  },
  {
    family: 'Alibaba Sans',
    fullName: 'Alibaba Sans Italic',
    style: 'Italic',
  },
  {
    family: 'Alibaba Sans',
    fullName: 'Alibaba Sans Light',
    style: 'Light',
  },
  {
    family: 'Alibaba Sans',
    fullName: 'Alibaba Sans Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Alibaba Sans',
    fullName: 'Alibaba Sans Medium',
    style: 'Medium',
  },
  {
    family: 'Alibaba Sans',
    fullName: 'Alibaba Sans Medium Italic',
    style: 'Medium Italic',
  },
  {
    family: 'Alibaba Sans',
    fullName: 'Alibaba Sans',
    style: 'Regular',
  },
  {
    family: 'American Typewriter',
    fullName: 'American Typewriter',
    style: 'Regular',
  },
  {
    family: 'American Typewriter',
    fullName: 'American Typewriter Bold',
    style: 'Bold',
  },
  {
    family: 'American Typewriter',
    fullName: 'American Typewriter Condensed',
    style: 'Condensed',
  },
  {
    family: 'American Typewriter',
    fullName: 'American Typewriter Condensed Bold',
    style: 'Condensed Bold',
  },
  {
    family: 'American Typewriter',
    fullName: 'American Typewriter Condensed Light',
    style: 'Condensed Light',
  },
  {
    family: 'American Typewriter',
    fullName: 'American Typewriter Light',
    style: 'Light',
  },
  {
    family: 'American Typewriter',
    fullName: 'American Typewriter Semibold',
    style: 'Semibold',
  },
  {
    family: 'Andale Mono',
    fullName: 'Andale Mono',
    style: 'Regular',
  },
  {
    family: 'Apple Chancery',
    fullName: 'Apple Chancery',
    style: 'Chancery',
  },
  {
    family: 'Apple Braille',
    fullName: 'Apple Braille',
    style: 'Regular',
  },
  {
    family: 'Apple Braille',
    fullName: 'Apple Braille Outline 6 Dot',
    style: 'Outline 6 Dot',
  },
  {
    family: 'Apple Braille',
    fullName: 'Apple Braille Outline 8 Dot',
    style: 'Outline 8 Dot',
  },
  {
    family: 'Apple Braille',
    fullName: 'Apple Braille Pinpoint 6 Dot',
    style: 'Pinpoint 6 Dot',
  },
  {
    family: 'Apple Braille',
    fullName: 'Apple Braille Pinpoint 8 Dot',
    style: 'Pinpoint 8 Dot',
  },
  {
    family: 'Apple Color Emoji',
    fullName: 'Apple Color Emoji',
    style: 'Regular',
  },
  {
    family: 'AppleGothic',
    fullName: 'AppleGothic Regular',
    style: 'Regular',
  },
  {
    family: 'AppleMyungjo',
    fullName: 'AppleMyungjo Regular',
    style: 'Regular',
  },
  {
    family: 'Apple SD Gothic Neo',
    fullName: 'Apple SD Gothic Neo Bold',
    style: 'Bold',
  },
  {
    family: 'Apple SD Gothic Neo',
    fullName: 'Apple SD Gothic Neo ExtraBold',
    style: 'ExtraBold',
  },
  {
    family: 'Apple SD Gothic Neo',
    fullName: 'Apple SD Gothic Neo Heavy',
    style: 'Heavy',
  },
  {
    family: 'Apple SD Gothic Neo',
    fullName: 'Apple SD Gothic Neo Light',
    style: 'Light',
  },
  {
    family: 'Apple SD Gothic Neo',
    fullName: 'Apple SD Gothic Neo Medium',
    style: 'Medium',
  },
  {
    family: 'Apple SD Gothic Neo',
    fullName: 'Apple SD Gothic Neo Regular',
    style: 'Regular',
  },
  {
    family: 'Apple SD Gothic Neo',
    fullName: 'Apple SD Gothic Neo SemiBold',
    style: 'SemiBold',
  },
  {
    family: 'Apple SD Gothic Neo',
    fullName: 'Apple SD Gothic Neo Thin',
    style: 'Thin',
  },
  {
    family: 'Apple SD Gothic Neo',
    fullName: 'Apple SD Gothic Neo UltraLight',
    style: 'UltraLight',
  },
  {
    family: 'Apple Symbols',
    fullName: 'Apple Symbols',
    style: 'Regular',
  },
  {
    family: 'Arial Black',
    fullName: 'Arial Black',
    style: 'Regular',
  },
  {
    family: 'Arial',
    fullName: 'Arial Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Arial',
    fullName: 'Arial Bold',
    style: 'Bold',
  },
  {
    family: 'Arial',
    fullName: 'Arial Italic',
    style: 'Italic',
  },
  {
    family: 'Arial Hebrew',
    fullName: 'Arial Hebrew',
    style: 'Regular',
  },
  {
    family: 'Arial Hebrew',
    fullName: 'Arial Hebrew Bold',
    style: 'Bold',
  },
  {
    family: 'Arial Hebrew',
    fullName: 'Arial Hebrew Light',
    style: 'Light',
  },
  {
    family: 'Arial Hebrew Scholar',
    fullName: 'Arial Hebrew Scholar',
    style: 'Regular',
  },
  {
    family: 'Arial Hebrew Scholar',
    fullName: 'Arial Hebrew Scholar Bold',
    style: 'Bold',
  },
  {
    family: 'Arial Hebrew Scholar',
    fullName: 'Arial Hebrew Scholar Light',
    style: 'Light',
  },
  {
    family: 'Arial',
    fullName: 'Arial',
    style: 'Regular',
  },
  {
    family: 'Arial Narrow',
    fullName: 'Arial Narrow',
    style: 'Regular',
  },
  {
    family: 'Arial Narrow',
    fullName: 'Arial Narrow Bold',
    style: 'Bold',
  },
  {
    family: 'Arial Narrow',
    fullName: 'Arial Narrow Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Arial Narrow',
    fullName: 'Arial Narrow Italic',
    style: 'Italic',
  },
  {
    family: 'Arial Rounded MT Bold',
    fullName: 'Arial Rounded MT Bold',
    style: 'Regular',
  },
  {
    family: 'Arial Unicode MS',
    fullName: 'Arial Unicode MS',
    style: 'Regular',
  },
  {
    family: 'Avenir',
    fullName: 'Avenir Black',
    style: 'Black',
  },
  {
    family: 'Avenir',
    fullName: 'Avenir Black Oblique',
    style: 'Black Oblique',
  },
  {
    family: 'Avenir',
    fullName: 'Avenir Book',
    style: 'Book',
  },
  {
    family: 'Avenir',
    fullName: 'Avenir Book Oblique',
    style: 'Book Oblique',
  },
  {
    family: 'Avenir',
    fullName: 'Avenir Heavy',
    style: 'Heavy',
  },
  {
    family: 'Avenir',
    fullName: 'Avenir Heavy Oblique',
    style: 'Heavy Oblique',
  },
  {
    family: 'Avenir',
    fullName: 'Avenir Light',
    style: 'Light',
  },
  {
    family: 'Avenir',
    fullName: 'Avenir Light Oblique',
    style: 'Light Oblique',
  },
  {
    family: 'Avenir',
    fullName: 'Avenir Medium',
    style: 'Medium',
  },
  {
    family: 'Avenir',
    fullName: 'Avenir Medium Oblique',
    style: 'Medium Oblique',
  },
  {
    family: 'Avenir',
    fullName: 'Avenir Oblique',
    style: 'Oblique',
  },
  {
    family: 'Avenir',
    fullName: 'Avenir Roman',
    style: 'Roman',
  },
  {
    family: 'Avenir Next',
    fullName: 'Avenir Next Bold',
    style: 'Bold',
  },
  {
    family: 'Avenir Next',
    fullName: 'Avenir Next Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Avenir Next',
    fullName: 'Avenir Next Demi Bold',
    style: 'Demi Bold',
  },
  {
    family: 'Avenir Next',
    fullName: 'Avenir Next Demi Bold Italic',
    style: 'Demi Bold Italic',
  },
  {
    family: 'Avenir Next',
    fullName: 'Avenir Next Heavy',
    style: 'Heavy',
  },
  {
    family: 'Avenir Next',
    fullName: 'Avenir Next Heavy Italic',
    style: 'Heavy Italic',
  },
  {
    family: 'Avenir Next',
    fullName: 'Avenir Next Italic',
    style: 'Italic',
  },
  {
    family: 'Avenir Next',
    fullName: 'Avenir Next Medium',
    style: 'Medium',
  },
  {
    family: 'Avenir Next',
    fullName: 'Avenir Next Medium Italic',
    style: 'Medium Italic',
  },
  {
    family: 'Avenir Next',
    fullName: 'Avenir Next Regular',
    style: 'Regular',
  },
  {
    family: 'Avenir Next',
    fullName: 'AvenirNext-UltraLight',
    style: 'Ultra Light',
  },
  {
    family: 'Avenir Next',
    fullName: 'Avenir Next Ultra Light Italic',
    style: 'Ultra Light Italic',
  },
  {
    family: 'Avenir Next Condensed',
    fullName: 'Avenir Next Condensed Bold',
    style: 'Bold',
  },
  {
    family: 'Avenir Next Condensed',
    fullName: 'Avenir Next Condensed Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Avenir Next Condensed',
    fullName: 'Avenir Next Condensed Demi Bold',
    style: 'Demi Bold',
  },
  {
    family: 'Avenir Next Condensed',
    fullName: 'Avenir Next Condensed Demi Bold Italic',
    style: 'Demi Bold Italic',
  },
  {
    family: 'Avenir Next Condensed',
    fullName: 'Avenir Next Condensed Heavy',
    style: 'Heavy',
  },
  {
    family: 'Avenir Next Condensed',
    fullName: 'Avenir Next Condensed Heavy Italic',
    style: 'Heavy Italic',
  },
  {
    family: 'Avenir Next Condensed',
    fullName: 'Avenir Next Condensed Italic',
    style: 'Italic',
  },
  {
    family: 'Avenir Next Condensed',
    fullName: 'Avenir Next Condensed Medium',
    style: 'Medium',
  },
  {
    family: 'Avenir Next Condensed',
    fullName: 'Avenir Next Medium Condensed Italic',
    style: 'Medium Italic',
  },
  {
    family: 'Avenir Next Condensed',
    fullName: 'Avenir Next Condensed Regular',
    style: 'Regular',
  },
  {
    family: 'Avenir Next Condensed',
    fullName: 'Avenir Next Condensed Ultra Light',
    style: 'Ultra Light',
  },
  {
    family: 'Avenir Next Condensed',
    fullName: 'Avenir Next Condensed Ultra Light Italic',
    style: 'Ultra Light Italic',
  },
  {
    family: 'Ayuthaya',
    fullName: 'Ayuthaya',
    style: 'Regular',
  },
  {
    family: 'BIZ UDGothic',
    fullName: 'BIZ UDGothic Bold',
    style: 'Bold',
  },
  {
    family: 'BIZ UDGothic',
    fullName: 'BIZ UDGothic',
    style: 'Regular',
  },
  {
    family: 'BIZ UDMincho',
    fullName: 'BIZ UDMincho',
    style: 'Regular',
  },
  {
    family: 'BM Dohyeon',
    fullName: 'BM DoHyeon OTF',
    style: 'Regular',
  },
  {
    family: 'BM Hanna 11yrs Old',
    fullName: 'BM HANNA 11yrs old OTF',
    style: 'Regular',
  },
  {
    family: 'BM Hanna Air',
    fullName: 'BM HANNA Air OTF',
    style: 'Regular',
  },
  {
    family: 'BM Hanna Pro',
    fullName: 'BM HANNA Pro OTF',
    style: 'Regular',
  },
  {
    family: 'BM Jua',
    fullName: 'BM JUA OTF',
    style: 'Regular',
  },
  {
    family: 'BM Kirang Haerang',
    fullName: 'BM KIRANGHAERANG OTF',
    style: 'Regular',
  },
  {
    family: 'BM Yeonsung',
    fullName: 'BM YEONSUNG OTF',
    style: 'Regular',
  },
  {
    family: 'Baghdad',
    fullName: 'Baghdad Regular',
    style: 'Regular',
  },
  {
    family: 'Bangla MN',
    fullName: 'Bangla MN',
    style: 'Regular',
  },
  {
    family: 'Bangla MN',
    fullName: 'Bangla MN Bold',
    style: 'Bold',
  },
  {
    family: 'Bangla Sangam MN',
    fullName: 'Bangla Sangam MN',
    style: 'Regular',
  },
  {
    family: 'Bangla Sangam MN',
    fullName: 'Bangla Sangam MN Bold',
    style: 'Bold',
  },
  {
    family: 'Baskerville',
    fullName: 'Baskerville',
    style: 'Regular',
  },
  {
    family: 'Baskerville',
    fullName: 'Baskerville Bold',
    style: 'Bold',
  },
  {
    family: 'Baskerville',
    fullName: 'Baskerville Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Baskerville',
    fullName: 'Baskerville Italic',
    style: 'Italic',
  },
  {
    family: 'Baskerville',
    fullName: 'Baskerville SemiBold',
    style: 'SemiBold',
  },
  {
    family: 'Baskerville',
    fullName: 'Baskerville SemiBold Italic',
    style: 'SemiBold Italic',
  },
  {
    family: 'Beirut',
    fullName: 'Beirut Regular',
    style: 'Regular',
  },
  {
    family: 'BiauKaiHK',
    fullName: '標楷體-港澳',
    style: 'Regular',
  },
  {
    family: 'BiauKaiTC',
    fullName: '標楷體-繁',
    style: 'Regular',
  },
  {
    family: 'Big Caslon',
    fullName: 'Big Caslon Medium',
    style: 'Medium',
  },
  {
    family: 'Bodoni Ornaments',
    fullName: 'Bodoni Ornaments',
    style: 'Regular',
  },
  {
    family: 'Bodoni 72',
    fullName: 'Bodoni 72 Bold',
    style: 'Bold',
  },
  {
    family: 'Bodoni 72',
    fullName: 'Bodoni 72 Book',
    style: 'Book',
  },
  {
    family: 'Bodoni 72',
    fullName: 'Bodoni 72 Book Italic',
    style: 'Book Italic',
  },
  {
    family: 'Bodoni 72 Oldstyle',
    fullName: 'Bodoni 72 Oldstyle Bold',
    style: 'Bold',
  },
  {
    family: 'Bodoni 72 Oldstyle',
    fullName: 'Bodoni 72 Oldstyle Book',
    style: 'Book',
  },
  {
    family: 'Bodoni 72 Oldstyle',
    fullName: 'Bodoni 72 Oldstyle Book Italic',
    style: 'Book Italic',
  },
  {
    family: 'Bodoni 72 Smallcaps',
    fullName: 'Bodoni 72 Smallcaps Book',
    style: 'Book',
  },
  {
    family: 'Bradley Hand',
    fullName: 'Bradley Hand Bold',
    style: 'Bold',
  },
  {
    family: 'Brush Script MT',
    fullName: 'Brush Script MT Italic',
    style: 'Italic',
  },
  {
    family: 'Cascadia Code',
    fullName: 'Cascadia Code Regular',
    style: 'Roman',
  },
  {
    family: 'Cascadia Code',
    fullName: 'Cascadia Code Regular',
    style: 'Bold',
  },
  {
    family: 'Cascadia Code',
    fullName: 'Cascadia Code Regular',
    style: 'ExtraLight',
  },
  {
    family: 'Cascadia Code',
    fullName: 'Cascadia Code Regular',
    style: 'Light',
  },
  {
    family: 'Cascadia Code',
    fullName: 'Cascadia Code Regular',
    style: 'SemiBold',
  },
  {
    family: 'Cascadia Code',
    fullName: 'Cascadia Code Regular',
    style: 'SemiLight',
  },
  {
    family: 'Cascadia Code PL',
    fullName: 'Cascadia Code PL Bold',
    style: 'Bold',
  },
  {
    family: 'Cascadia Code PL',
    fullName: 'Cascadia Code PL ExtraLight',
    style: 'ExtraLight',
  },
  {
    family: 'Cascadia Code PL',
    fullName: 'Cascadia Code PL Light',
    style: 'Light',
  },
  {
    family: 'Cascadia Code PL',
    fullName: 'Cascadia Code PL Regular',
    style: 'Regular',
  },
  {
    family: 'Cascadia Code PL',
    fullName: 'Cascadia Code PL Regular',
    style: 'Roman',
  },
  {
    family: 'Cascadia Code PL',
    fullName: 'Cascadia Code PL Regular',
    style: 'Bold',
  },
  {
    family: 'Cascadia Code PL',
    fullName: 'Cascadia Code PL Regular',
    style: 'ExtraLight',
  },
  {
    family: 'Cascadia Code PL',
    fullName: 'Cascadia Code PL Regular',
    style: 'Light',
  },
  {
    family: 'Cascadia Code PL',
    fullName: 'Cascadia Code PL Regular',
    style: 'SemiBold',
  },
  {
    family: 'Cascadia Code PL',
    fullName: 'Cascadia Code PL Regular',
    style: 'SemiLight',
  },
  {
    family: 'Cascadia Code PL',
    fullName: 'Cascadia Code PL SemiBold',
    style: 'SemiBold',
  },
  {
    family: 'Cascadia Code PL',
    fullName: 'Cascadia Code PL SemiLight',
    style: 'SemiLight',
  },
  {
    family: 'Cascadia Mono',
    fullName: 'Cascadia Mono Bold',
    style: 'Bold',
  },
  {
    family: 'Cascadia Mono',
    fullName: 'Cascadia Mono ExtraLight',
    style: 'ExtraLight',
  },
  {
    family: 'Cascadia Mono',
    fullName: 'Cascadia Mono Light',
    style: 'Light',
  },
  {
    family: 'Cascadia Mono',
    fullName: 'Cascadia Mono Regular',
    style: 'Regular',
  },
  {
    family: 'Cascadia Mono',
    fullName: 'Cascadia Mono Regular',
    style: 'Roman',
  },
  {
    family: 'Cascadia Mono',
    fullName: 'Cascadia Mono Regular',
    style: 'Bold',
  },
  {
    family: 'Cascadia Mono',
    fullName: 'Cascadia Mono Regular',
    style: 'ExtraLight',
  },
  {
    family: 'Cascadia Mono',
    fullName: 'Cascadia Mono Regular',
    style: 'Light',
  },
  {
    family: 'Cascadia Mono',
    fullName: 'Cascadia Mono Regular',
    style: 'SemiBold',
  },
  {
    family: 'Cascadia Mono',
    fullName: 'Cascadia Mono Regular',
    style: 'SemiLight',
  },
  {
    family: 'Cascadia Mono',
    fullName: 'Cascadia Mono SemiBold',
    style: 'SemiBold',
  },
  {
    family: 'Cascadia Mono',
    fullName: 'Cascadia Mono SemiLight',
    style: 'SemiLight',
  },
  {
    family: 'Cascadia Mono PL',
    fullName: 'Cascadia Mono PL Regular',
    style: 'Roman',
  },
  {
    family: 'Cascadia Mono PL',
    fullName: 'Cascadia Mono PL Regular',
    style: 'Bold',
  },
  {
    family: 'Cascadia Mono PL',
    fullName: 'Cascadia Mono PL Regular',
    style: 'ExtraLight',
  },
  {
    family: 'Cascadia Mono PL',
    fullName: 'Cascadia Mono PL Regular',
    style: 'Light',
  },
  {
    family: 'Cascadia Mono PL',
    fullName: 'Cascadia Mono PL Regular',
    style: 'SemiBold',
  },
  {
    family: 'Cascadia Mono PL',
    fullName: 'Cascadia Mono PL Regular',
    style: 'SemiLight',
  },
  {
    family: 'Chalkboard',
    fullName: 'Chalkboard',
    style: 'Regular',
  },
  {
    family: 'Chalkboard',
    fullName: 'Chalkboard Bold',
    style: 'Bold',
  },
  {
    family: 'Chalkboard SE',
    fullName: 'Chalkboard SE Bold',
    style: 'Bold',
  },
  {
    family: 'Chalkboard SE',
    fullName: 'Chalkboard SE Light',
    style: 'Light',
  },
  {
    family: 'Chalkboard SE',
    fullName: 'Chalkboard SE Regular',
    style: 'Regular',
  },
  {
    family: 'Chalkduster',
    fullName: 'Chalkduster',
    style: 'Regular',
  },
  {
    family: 'Charter',
    fullName: 'Charter Black',
    style: 'Black',
  },
  {
    family: 'Charter',
    fullName: 'Charter Black Italic',
    style: 'Black Italic',
  },
  {
    family: 'Charter',
    fullName: 'Charter Bold',
    style: 'Bold',
  },
  {
    family: 'Charter',
    fullName: 'Charter BT Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Charter',
    fullName: 'Charter Italic',
    style: 'Italic',
  },
  {
    family: 'Charter',
    fullName: 'Charter Roman',
    style: 'Roman',
  },
  {
    family: 'Cochin',
    fullName: 'Cochin',
    style: 'Regular',
  },
  {
    family: 'Cochin',
    fullName: 'Cochin Bold',
    style: 'Bold',
  },
  {
    family: 'Cochin',
    fullName: 'Cochin Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Cochin',
    fullName: 'Cochin Italic',
    style: 'Italic',
  },
  {
    family: 'Comic Sans MS',
    fullName: 'Comic Sans MS',
    style: 'Regular',
  },
  {
    family: 'Comic Sans MS',
    fullName: 'Comic Sans MS Bold',
    style: 'Bold',
  },
  {
    family: 'Copperplate',
    fullName: 'Copperplate',
    style: 'Regular',
  },
  {
    family: 'Copperplate',
    fullName: 'Copperplate Bold',
    style: 'Bold',
  },
  {
    family: 'Copperplate',
    fullName: 'Copperplate Light',
    style: 'Light',
  },
  {
    family: 'Corsiva Hebrew',
    fullName: 'Corsiva Hebrew',
    style: 'Regular',
  },
  {
    family: 'Corsiva Hebrew',
    fullName: 'Corsiva Hebrew Bold',
    style: 'Bold',
  },
  {
    family: 'Courier New',
    fullName: 'Courier New Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Courier New',
    fullName: 'Courier New Bold',
    style: 'Bold',
  },
  {
    family: 'Courier New',
    fullName: 'Courier New Italic',
    style: 'Italic',
  },
  {
    family: 'Courier New',
    fullName: 'Courier New',
    style: 'Regular',
  },
  {
    family: 'Wawati SC',
    fullName: '娃娃体-简 常规体',
    style: 'Regular',
  },
  {
    family: 'Wawati TC',
    fullName: '娃娃体-繁 常规体',
    style: 'Regular',
  },
  {
    family: 'DIN Alternate',
    fullName: 'DIN Alternate Bold',
    style: 'Bold',
  },
  {
    family: 'DIN Condensed',
    fullName: 'DIN Condensed Bold',
    style: 'Bold',
  },
  {
    family: 'Damascus',
    fullName: 'Damascus Regular',
    style: 'Regular',
  },
  {
    family: 'Damascus',
    fullName: 'Damascus Bold',
    style: 'Bold',
  },
  {
    family: 'Damascus',
    fullName: 'Damascus Light',
    style: 'Light',
  },
  {
    family: 'Damascus',
    fullName: 'Damascus Medium',
    style: 'Medium',
  },
  {
    family: 'Damascus',
    fullName: 'Damascus Semi Bold',
    style: 'Semi Bold',
  },
  {
    family: 'DecoType Naskh',
    fullName: 'DecoType Naskh Regular',
    style: 'Regular',
  },
  {
    family: 'Devanagari MT',
    fullName: 'Devanagari MT',
    style: 'Regular',
  },
  {
    family: 'Devanagari MT',
    fullName: 'Devanagari MT Bold',
    style: 'Bold',
  },
  {
    family: 'Devanagari Sangam MN',
    fullName: 'Devanagari Sangam MN',
    style: 'Regular',
  },
  {
    family: 'Devanagari Sangam MN',
    fullName: 'Devanagari Sangam MN Bold',
    style: 'Bold',
  },
  {
    family: 'Didot',
    fullName: 'Didot',
    style: 'Regular',
  },
  {
    family: 'Didot',
    fullName: 'Didot Bold',
    style: 'Bold',
  },
  {
    family: 'Didot',
    fullName: 'Didot Italic',
    style: 'Italic',
  },
  {
    family: 'Diwan Kufi',
    fullName: 'Diwan Kufi Regular',
    style: 'Regular',
  },
  {
    family: 'Mishafi',
    fullName: 'Mishafi Regular',
    style: 'Regular',
  },
  {
    family: 'Mishafi Gold',
    fullName: 'Mishafi Gold Regular',
    style: 'Regular',
  },
  {
    family: 'Diwan Thuluth',
    fullName: 'Diwan Thuluth Regular',
    style: 'Regular',
  },
  {
    family: 'Euphemia UCAS',
    fullName: 'Euphemia UCAS',
    style: 'Regular',
  },
  {
    family: 'Euphemia UCAS',
    fullName: 'Euphemia UCAS Bold',
    style: 'Bold',
  },
  {
    family: 'Euphemia UCAS',
    fullName: 'Euphemia UCAS Italic',
    style: 'Italic',
  },
  {
    family: 'Lantinghei TC',
    fullName: '兰亭黑-繁 特黑',
    style: 'Heavy',
  },
  {
    family: 'Lantinghei SC',
    fullName: '兰亭黑-简 特黑',
    style: 'Heavy',
  },
  {
    family: 'Lantinghei TC',
    fullName: '兰亭黑-繁 纤黑',
    style: 'Extralight',
  },
  {
    family: 'Lantinghei SC',
    fullName: '兰亭黑-简 纤黑',
    style: 'Extralight',
  },
  {
    family: 'Lantinghei TC',
    fullName: '兰亭黑-繁 中黑',
    style: 'Demibold',
  },
  {
    family: 'Lantinghei SC',
    fullName: '兰亭黑-简 中黑',
    style: 'Demibold',
  },
  {
    family: 'Farah',
    fullName: 'Farah Regular',
    style: 'Regular',
  },
  {
    family: 'Farisi',
    fullName: 'Farisi Regular',
    style: 'Regular',
  },
  {
    family: 'Futura',
    fullName: 'Futura Bold',
    style: 'Bold',
  },
  {
    family: 'Futura',
    fullName: 'Futura Condensed ExtraBold',
    style: 'Condensed ExtraBold',
  },
  {
    family: 'Futura',
    fullName: 'Futura Condensed Medium',
    style: 'Condensed Medium',
  },
  {
    family: 'Futura',
    fullName: 'Futura Medium',
    style: 'Medium',
  },
  {
    family: 'Futura',
    fullName: 'Futura Medium Italic',
    style: 'Medium Italic',
  },
  {
    family: 'GB18030 Bitmap',
    fullName: 'GB18030 Bitmap',
    style: 'Regular',
  },
  {
    family: 'Galvji',
    fullName: 'Galvji',
    style: 'Regular',
  },
  {
    family: 'Galvji',
    fullName: 'Galvji-Bold',
    style: 'Bold',
  },
  {
    family: 'Galvji',
    fullName: 'Galvji-BoldOblique',
    style: 'Bold Oblique',
  },
  {
    family: 'Galvji',
    fullName: 'Galvji Oblique',
    style: 'Oblique',
  },
  {
    family: 'Geeza Pro',
    fullName: 'Geeza Pro Regular',
    style: 'Regular',
  },
  {
    family: 'Geeza Pro',
    fullName: 'Geeza Pro Bold',
    style: 'Bold',
  },
  {
    family: 'Geneva',
    fullName: 'Geneva',
    style: 'Regular',
  },
  {
    family: 'Georgia',
    fullName: 'Georgia',
    style: 'Regular',
  },
  {
    family: 'Georgia',
    fullName: 'Georgia Bold',
    style: 'Bold',
  },
  {
    family: 'Georgia',
    fullName: 'Georgia Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Georgia',
    fullName: 'Georgia Italic',
    style: 'Italic',
  },
  {
    family: 'Gill Sans',
    fullName: 'Gill Sans',
    style: 'Regular',
  },
  {
    family: 'Gill Sans',
    fullName: 'Gill Sans Bold',
    style: 'Bold',
  },
  {
    family: 'Gill Sans',
    fullName: 'Gill Sans Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Gill Sans',
    fullName: 'Gill Sans Italic',
    style: 'Italic',
  },
  {
    family: 'Gill Sans',
    fullName: 'Gill Sans Light',
    style: 'Light',
  },
  {
    family: 'Gill Sans',
    fullName: 'Gill Sans Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Gill Sans',
    fullName: 'Gill Sans SemiBold',
    style: 'SemiBold',
  },
  {
    family: 'Gill Sans',
    fullName: 'Gill Sans SemiBold Italic',
    style: 'SemiBold Italic',
  },
  {
    family: 'Gill Sans',
    fullName: 'Gill Sans UltraBold',
    style: 'UltraBold',
  },
  {
    family: 'Grantha Sangam MN',
    fullName: 'Grantha Sangam MN Bold',
    style: 'Bold',
  },
  {
    family: 'Grantha Sangam MN',
    fullName: 'Grantha Sangam MN Regular',
    style: 'Regular',
  },
  {
    family: 'Gujarati MT',
    fullName: 'Gujarati MT',
    style: 'Regular',
  },
  {
    family: 'Gujarati MT',
    fullName: 'Gujarati MT Bold',
    style: 'Bold',
  },
  {
    family: 'Gujarati Sangam MN',
    fullName: 'Gujarati Sangam MN',
    style: 'Regular',
  },
  {
    family: 'Gujarati Sangam MN',
    fullName: 'Gujarati Sangam MN Bold',
    style: 'Bold',
  },
  {
    family: 'Gurmukhi MN',
    fullName: 'Gurmukhi MN',
    style: 'Regular',
  },
  {
    family: 'Gurmukhi MN',
    fullName: 'Gurmukhi MN Bold',
    style: 'Bold',
  },
  {
    family: 'Gurmukhi Sangam MN',
    fullName: 'Gurmukhi Sangam MN',
    style: 'Regular',
  },
  {
    family: 'Gurmukhi Sangam MN',
    fullName: 'Gurmukhi Sangam MN Bold',
    style: 'Bold',
  },
  {
    family: 'Hannotate SC',
    fullName: '手札体-简 常规体',
    style: 'Regular',
  },
  {
    family: 'Hannotate SC',
    fullName: '手札体-简 粗体',
    style: 'Bold',
  },
  {
    family: 'Hannotate TC',
    fullName: '手札体-繁 常规体',
    style: 'Regular',
  },
  {
    family: 'Hannotate TC',
    fullName: '手札体-繁 粗体',
    style: 'Bold',
  },
  {
    family: 'HanziPen SC',
    fullName: '翩翩体-简 常规体',
    style: 'Regular',
  },
  {
    family: 'HanziPen SC',
    fullName: '翩翩体-简 粗体',
    style: 'Bold',
  },
  {
    family: 'HanziPen TC',
    fullName: '翩翩体-繁 常规体',
    style: 'Regular',
  },
  {
    family: 'HanziPen TC',
    fullName: '翩翩体-繁 粗体',
    style: 'Bold',
  },
  {
    family: 'Helvetica',
    fullName: 'Helvetica',
    style: 'Regular',
  },
  {
    family: 'Helvetica',
    fullName: 'Helvetica Bold',
    style: 'Bold',
  },
  {
    family: 'Helvetica',
    fullName: 'Helvetica Bold Oblique',
    style: 'Bold Oblique',
  },
  {
    family: 'Helvetica',
    fullName: 'Helvetica Light',
    style: 'Light',
  },
  {
    family: 'Helvetica',
    fullName: 'Helvetica Light Oblique',
    style: 'Light Oblique',
  },
  {
    family: 'Helvetica',
    fullName: 'Helvetica Oblique',
    style: 'Oblique',
  },
  {
    family: 'Helvetica Neue',
    fullName: 'Helvetica Neue',
    style: 'Regular',
  },
  {
    family: 'Helvetica Neue',
    fullName: 'Helvetica Neue Bold',
    style: 'Bold',
  },
  {
    family: 'Helvetica Neue',
    fullName: 'Helvetica Neue Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Helvetica Neue',
    fullName: 'Helvetica Neue Condensed Black',
    style: 'Condensed Black',
  },
  {
    family: 'Helvetica Neue',
    fullName: 'Helvetica Neue Condensed Bold',
    style: 'Condensed Bold',
  },
  {
    family: 'Helvetica Neue',
    fullName: 'Helvetica Neue Italic',
    style: 'Italic',
  },
  {
    family: 'Helvetica Neue',
    fullName: 'Helvetica Neue Light',
    style: 'Light',
  },
  {
    family: 'Helvetica Neue',
    fullName: 'Helvetica Neue Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Helvetica Neue',
    fullName: 'Helvetica Neue Medium',
    style: 'Medium',
  },
  {
    family: 'Helvetica Neue',
    fullName: 'Helvetica Neue Medium Italic',
    style: 'Medium Italic',
  },
  {
    family: 'Helvetica Neue',
    fullName: 'Helvetica Neue Thin',
    style: 'Thin',
  },
  {
    family: 'Helvetica Neue',
    fullName: 'Helvetica Neue Thin Italic',
    style: 'Thin Italic',
  },
  {
    family: 'Helvetica Neue',
    fullName: 'Helvetica Neue UltraLight',
    style: 'UltraLight',
  },
  {
    family: 'Helvetica Neue',
    fullName: 'Helvetica Neue UltraLight Italic',
    style: 'UltraLight Italic',
  },
  {
    family: 'Herculanum',
    fullName: 'Herculanum',
    style: 'Regular',
  },
  {
    family: 'Hiragino Maru Gothic ProN',
    fullName: 'HiraMaruProN-W4',
    style: 'W4',
  },
  {
    family: 'Hiragino Mincho ProN',
    fullName: 'HiraMinProN-W3',
    style: 'W3',
  },
  {
    family: 'Hiragino Mincho ProN',
    fullName: 'HiraMinProN-W6',
    style: 'W6',
  },
  {
    family: 'Hiragino Sans',
    fullName: 'Hiragino Sans W0',
    style: 'W0',
  },
  {
    family: 'Hiragino Sans',
    fullName: 'Hiragino Sans W1',
    style: 'W1',
  },
  {
    family: 'Hiragino Sans',
    fullName: 'Hiragino Sans W2',
    style: 'W2',
  },
  {
    family: 'Hiragino Sans',
    fullName: 'Hiragino Sans W3',
    style: 'W3',
  },
  {
    family: 'Hiragino Sans',
    fullName: 'Hiragino Sans W4',
    style: 'W4',
  },
  {
    family: 'Hiragino Sans',
    fullName: 'Hiragino Sans W5',
    style: 'W5',
  },
  {
    family: 'Hiragino Sans',
    fullName: 'Hiragino Sans W6',
    style: 'W6',
  },
  {
    family: 'Hiragino Sans',
    fullName: 'Hiragino Sans W7',
    style: 'W7',
  },
  {
    family: 'Hiragino Sans',
    fullName: 'Hiragino Sans W8',
    style: 'W8',
  },
  {
    family: 'Hiragino Sans',
    fullName: 'Hiragino Sans W9',
    style: 'W9',
  },
  {
    family: 'Hiragino Sans CNS',
    fullName: '冬青黑体繁体中文 W3',
    style: 'W3',
  },
  {
    family: 'Hiragino Sans CNS',
    fullName: '冬青黑体繁体中文 W6',
    style: 'W6',
  },
  {
    family: 'Hiragino Sans GB',
    fullName: '冬青黑体简体中文 W3',
    style: 'W3',
  },
  {
    family: 'Hiragino Sans GB',
    fullName: '冬青黑体简体中文 W6',
    style: 'W6',
  },
  {
    family: 'Hoefler Text',
    fullName: 'Hoefler Text Black',
    style: 'Black',
  },
  {
    family: 'Hoefler Text',
    fullName: 'Hoefler Text Black Italic',
    style: 'Black Italic',
  },
  {
    family: 'Hoefler Text',
    fullName: 'Hoefler Text Italic',
    style: 'Italic',
  },
  {
    family: 'Hoefler Text',
    fullName: 'Hoefler Text Ornaments',
    style: 'Ornaments',
  },
  {
    family: 'Hoefler Text',
    fullName: 'Hoefler Text',
    style: 'Regular',
  },
  {
    family: 'ITF Devanagari',
    fullName: 'ITFDevanagari-Bold',
    style: 'Bold',
  },
  {
    family: 'ITF Devanagari',
    fullName: 'ITFDevanagari-Book',
    style: 'Book',
  },
  {
    family: 'ITF Devanagari',
    fullName: 'ITFDevanagari-Demi',
    style: 'Demi',
  },
  {
    family: 'ITF Devanagari',
    fullName: 'ITFDevanagari-Light',
    style: 'Light',
  },
  {
    family: 'ITF Devanagari',
    fullName: 'ITFDevanagari-Medium',
    style: 'Medium',
  },
  {
    family: 'ITF Devanagari Marathi',
    fullName: 'ITFDevanagari Marathi-Bold',
    style: 'Bold',
  },
  {
    family: 'ITF Devanagari Marathi',
    fullName: 'ITFDevanagari Marathi-Book',
    style: 'Book',
  },
  {
    family: 'ITF Devanagari Marathi',
    fullName: 'ITFDevanagari Marathi-Demi',
    style: 'Demi',
  },
  {
    family: 'ITF Devanagari Marathi',
    fullName: 'ITFDevanagari Marathi Light',
    style: 'Light',
  },
  {
    family: 'ITF Devanagari Marathi',
    fullName: 'ITF Devanagari Marathi Medium',
    style: 'Medium',
  },
  {
    family: 'Impact',
    fullName: 'Impact',
    style: 'Regular',
  },
  {
    family: 'InaiMathi',
    fullName: 'InaiMathi',
    style: 'Regular',
  },
  {
    family: 'InaiMathi',
    fullName: 'InaiMathi Bold',
    style: 'Bold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Regular',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Black',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Bold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Condensed Black',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Condensed Bold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Condensed ExtraBold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Condensed ExtraLight',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Condensed Light',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Condensed Medium',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Condensed Regular',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Condensed SemiBold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Expanded Black',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Expanded Bold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Expanded ExtraBold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Expanded ExtraLight',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Expanded Light',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Expanded Medium',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Expanded Regular',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Expanded SemiBold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'ExtraBold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'ExtraCondensed Black',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'ExtraCondensed Bold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'ExtraCondensed ExtraBold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'ExtraCondensed ExtraLight',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'ExtraCondensed Light',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'ExtraCondensed Medium',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'ExtraCondensed Regular',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'ExtraCondensed SemiBold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'ExtraExpanded Black',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'ExtraExpanded Bold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'ExtraExpanded ExtraBold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'ExtraExpanded ExtraLight',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'ExtraExpanded Light',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'ExtraExpanded Medium',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'ExtraExpanded Regular',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'ExtraExpanded SemiBold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'ExtraLight',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Light',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'Medium',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'SemiBold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'SemiCondensed Black',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'SemiCondensed Bold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'SemiCondensed ExtraBold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'SemiCondensed ExtraLight',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'SemiCondensed Light',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'SemiCondensed Medium',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'SemiCondensed Regular',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'SemiCondensed SemiBold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'SemiExpanded Black',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'SemiExpanded Bold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'SemiExpanded ExtraBold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'SemiExpanded ExtraLight',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'SemiExpanded Light',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'SemiExpanded Medium',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'SemiExpanded Regular',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'SemiExpanded SemiBold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'UltraCondensed Black',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'UltraCondensed Bold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'UltraCondensed ExtraBold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'UltraCondensed ExtraLight',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'UltraCondensed Light',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'UltraCondensed Medium',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'UltraCondensed Regular',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'UltraCondensed SemiBold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'UltraExpanded Black',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'UltraExpanded Bold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'UltraExpanded ExtraBold',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'UltraExpanded ExtraLight',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'UltraExpanded Light',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'UltraExpanded Medium',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'UltraExpanded Regular',
  },
  {
    family: 'Inconsolata',
    fullName: 'Inconsolata Regular',
    style: 'UltraExpanded SemiBold',
  },
  {
    family: 'HeadLineA',
    fullName: 'HeadLineA Regular',
    style: 'Regular',
  },
  {
    family: 'PilGi',
    fullName: 'PilGi Regular',
    style: 'Regular',
  },
  {
    family: 'GungSeo',
    fullName: 'GungSeo Regular',
    style: 'Regular',
  },
  {
    family: 'PCMyungjo',
    fullName: 'PCMyungjo Regular',
    style: 'Regular',
  },
  {
    family: 'Kailasa',
    fullName: 'Kailasa Regular',
    style: 'Regular',
  },
  {
    family: 'Kailasa',
    fullName: 'Kailasa Bold',
    style: 'Bold',
  },
  {
    family: 'Kannada MN',
    fullName: 'Kannada MN',
    style: 'Regular',
  },
  {
    family: 'Kannada MN',
    fullName: 'Kannada MN Bold',
    style: 'Bold',
  },
  {
    family: 'Kannada Sangam MN',
    fullName: 'Kannada Sangam MN',
    style: 'Regular',
  },
  {
    family: 'Kannada Sangam MN',
    fullName: 'Kannada Sangam MN Bold',
    style: 'Bold',
  },
  {
    family: 'Kefa',
    fullName: 'Kefa Bold',
    style: 'Bold',
  },
  {
    family: 'Kefa',
    fullName: 'Kefa Regular',
    style: 'Regular',
  },
  {
    family: 'Khmer MN',
    fullName: 'Khmer MN',
    style: 'Regular',
  },
  {
    family: 'Khmer MN',
    fullName: 'Khmer MN Bold',
    style: 'Bold',
  },
  {
    family: 'Khmer Sangam MN',
    fullName: 'Khmer Sangam MN',
    style: 'Regular',
  },
  {
    family: 'Klee',
    fullName: 'Klee Demibold',
    style: 'Demibold',
  },
  {
    family: 'Klee',
    fullName: 'Klee Medium',
    style: 'Medium',
  },
  {
    family: 'Kohinoor Bangla',
    fullName: 'Kohinoor Bangla Bold',
    style: 'Bold',
  },
  {
    family: 'Kohinoor Bangla',
    fullName: 'Kohinoor Bangla Light',
    style: 'Light',
  },
  {
    family: 'Kohinoor Bangla',
    fullName: 'Kohinoor Bangla Medium',
    style: 'Medium',
  },
  {
    family: 'Kohinoor Bangla',
    fullName: 'Kohinoor Bangla',
    style: 'Regular',
  },
  {
    family: 'Kohinoor Bangla',
    fullName: 'Kohinoor Bangla Semibold',
    style: 'Semibold',
  },
  {
    family: 'Kohinoor Devanagari',
    fullName: 'Kohinoor Devanagari Bold',
    style: 'Bold',
  },
  {
    family: 'Kohinoor Devanagari',
    fullName: 'Kohinoor Devanagari Light',
    style: 'Light',
  },
  {
    family: 'Kohinoor Devanagari',
    fullName: 'Kohinoor Devanagari Medium',
    style: 'Medium',
  },
  {
    family: 'Kohinoor Devanagari',
    fullName: 'Kohinoor Devanagari Regular',
    style: 'Regular',
  },
  {
    family: 'Kohinoor Devanagari',
    fullName: 'Kohinoor Devanagari Semibold',
    style: 'Semibold',
  },
  {
    family: 'Kohinoor Gujarati',
    fullName: 'Kohinoor Gujarati Bold',
    style: 'Bold',
  },
  {
    family: 'Kohinoor Gujarati',
    fullName: 'Kohinoor Gujarati Light',
    style: 'Light',
  },
  {
    family: 'Kohinoor Gujarati',
    fullName: 'Kohinoor Gujarati Medium',
    style: 'Medium',
  },
  {
    family: 'Kohinoor Gujarati',
    fullName: 'Kohinoor Gujarati Regular',
    style: 'Regular',
  },
  {
    family: 'Kohinoor Gujarati',
    fullName: 'Kohinoor Gujarati Semibold',
    style: 'Semibold',
  },
  {
    family: 'Kohinoor Telugu',
    fullName: 'Kohinoor Telugu Bold',
    style: 'Bold',
  },
  {
    family: 'Kohinoor Telugu',
    fullName: 'Kohinoor Telugu Light',
    style: 'Light',
  },
  {
    family: 'Kohinoor Telugu',
    fullName: 'Kohinoor Telugu Medium',
    style: 'Medium',
  },
  {
    family: 'Kohinoor Telugu',
    fullName: 'Kohinoor Telugu',
    style: 'Regular',
  },
  {
    family: 'Kohinoor Telugu',
    fullName: 'Kohinoor Telugu Semibold',
    style: 'Semibold',
  },
  {
    family: 'Kokonor',
    fullName: 'Kokonor Regular',
    style: 'Regular',
  },
  {
    family: 'Krungthep',
    fullName: 'Krungthep',
    style: 'Regular',
  },
  {
    family: 'KufiStandardGK',
    fullName: 'KufiStandardGK Regular',
    style: 'Regular',
  },
  {
    family: 'Lao MN',
    fullName: 'Lao MN',
    style: 'Regular',
  },
  {
    family: 'Lao MN',
    fullName: 'Lao MN Bold',
    style: 'Bold',
  },
  {
    family: 'Lao Sangam MN',
    fullName: 'Lao Sangam MN',
    style: 'Regular',
  },
  {
    family: 'Apple LiGothic',
    fullName: '蘋果儷中黑',
    style: 'Medium',
  },
  {
    family: 'LiHei Pro',
    fullName: '儷黑 Pro',
    style: 'Medium',
  },
  {
    family: 'LiSong Pro',
    fullName: '儷宋 Pro',
    style: 'Light',
  },
  {
    family: 'Apple LiSung',
    fullName: '蘋果儷細宋',
    style: 'Light',
  },
  {
    family: 'Lucida Grande',
    fullName: 'Lucida Grande',
    style: 'Regular',
  },
  {
    family: 'Lucida Grande',
    fullName: 'Lucida Grande Bold',
    style: 'Bold',
  },
  {
    family: 'Luminari',
    fullName: 'Luminari',
    style: 'Regular',
  },
  {
    family: 'LingWai SC',
    fullName: '凌慧体-简 中黑体',
    style: 'Medium',
  },
  {
    family: 'LingWai TC',
    fullName: '凌慧体-繁 中黑体',
    style: 'Medium',
  },
  {
    family: 'Malayalam MN',
    fullName: 'Malayalam MN',
    style: 'Regular',
  },
  {
    family: 'Malayalam MN',
    fullName: 'Malayalam MN Bold',
    style: 'Bold',
  },
  {
    family: 'Malayalam Sangam MN',
    fullName: 'Malayalam Sangam MN',
    style: 'Regular',
  },
  {
    family: 'Malayalam Sangam MN',
    fullName: 'Malayalam Sangam MN Bold',
    style: 'Bold',
  },
  {
    family: 'Marker Felt',
    fullName: 'Marker Felt Thin',
    style: 'Thin',
  },
  {
    family: 'Marker Felt',
    fullName: 'Marker Felt Wide',
    style: 'Wide',
  },
  {
    family: 'Menlo',
    fullName: 'Menlo Bold',
    style: 'Bold',
  },
  {
    family: 'Menlo',
    fullName: 'Menlo Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Menlo',
    fullName: 'Menlo Italic',
    style: 'Italic',
  },
  {
    family: 'Menlo',
    fullName: 'Menlo Regular',
    style: 'Regular',
  },
  {
    family: 'Microsoft Sans Serif',
    fullName: 'Microsoft Sans Serif',
    style: 'Regular',
  },
  {
    family: 'Monaco',
    fullName: 'Monaco',
    style: 'Regular',
  },
  {
    family: 'Gurmukhi MT',
    fullName: 'Gurmukhi MT',
    style: 'Regular',
  },
  {
    family: 'Mshtakan',
    fullName: 'Mshtakan',
    style: 'Regular',
  },
  {
    family: 'Mshtakan',
    fullName: 'Mshtakan Bold',
    style: 'Bold',
  },
  {
    family: 'Mshtakan',
    fullName: 'Mshtakan BoldOblique',
    style: 'BoldOblique',
  },
  {
    family: 'Mshtakan',
    fullName: 'Mshtakan Oblique',
    style: 'Oblique',
  },
  {
    family: 'Mukta Mahee',
    fullName: 'MuktaMahee Bold',
    style: 'Bold',
  },
  {
    family: 'Mukta Mahee',
    fullName: 'MuktaMahee ExtraBold',
    style: 'ExtraBold',
  },
  {
    family: 'Mukta Mahee',
    fullName: 'MuktaMahee ExtraLight',
    style: 'ExtraLight',
  },
  {
    family: 'Mukta Mahee',
    fullName: 'MuktaMahee Light',
    style: 'Light',
  },
  {
    family: 'Mukta Mahee',
    fullName: 'MuktaMahee Medium',
    style: 'Medium',
  },
  {
    family: 'Mukta Mahee',
    fullName: 'MuktaMahee Regular',
    style: 'Regular',
  },
  {
    family: 'Mukta Mahee',
    fullName: 'MuktaMahee SemiBold',
    style: 'SemiBold',
  },
  {
    family: 'Muna',
    fullName: 'Muna Regular',
    style: 'Regular',
  },
  {
    family: 'Muna',
    fullName: 'Muna Black',
    style: 'Black',
  },
  {
    family: 'Muna',
    fullName: 'Muna Bold',
    style: 'Bold',
  },
  {
    family: 'Myanmar MN',
    fullName: 'Myanmar MN',
    style: 'Regular',
  },
  {
    family: 'Myanmar MN',
    fullName: 'Myanmar MN Bold',
    style: 'Bold',
  },
  {
    family: 'Myanmar Sangam MN',
    fullName: 'Myanmar Sangam MN',
    style: 'Regular',
  },
  {
    family: 'Myanmar Sangam MN',
    fullName: 'Myanmar Sangam MN Bold',
    style: 'Bold',
  },
  {
    family: 'Nadeem',
    fullName: 'Nadeem Regular',
    style: 'Regular',
  },
  {
    family: 'Nanum Brush Script',
    fullName: 'Nanum Brush Script',
    style: 'Regular',
  },
  {
    family: 'Nanum Gothic',
    fullName: 'NanumGothic',
    style: 'Regular',
  },
  {
    family: 'Nanum Gothic',
    fullName: 'NanumGothic Bold',
    style: 'Bold',
  },
  {
    family: 'Nanum Gothic',
    fullName: 'NanumGothic ExtraBold',
    style: 'ExtraBold',
  },
  {
    family: 'Nanum Myeongjo',
    fullName: 'NanumMyeongjo',
    style: 'Regular',
  },
  {
    family: 'Nanum Myeongjo',
    fullName: 'NanumMyeongjoBold',
    style: 'Bold',
  },
  {
    family: 'Nanum Myeongjo',
    fullName: 'NanumMyeongjoExtraBold',
    style: 'ExtraBold',
  },
  {
    family: 'Nanum Pen Script',
    fullName: 'Nanum Pen Script',
    style: 'Regular',
  },
  {
    family: 'New Peninim MT',
    fullName: 'New Peninim MT',
    style: 'Regular',
  },
  {
    family: 'New Peninim MT',
    fullName: 'New Peninim MT Bold',
    style: 'Bold',
  },
  {
    family: 'New Peninim MT',
    fullName: 'New Peninim MT Bold Inclined',
    style: 'Bold Inclined',
  },
  {
    family: 'New Peninim MT',
    fullName: 'New Peninim MT Inclined',
    style: 'Inclined',
  },
  {
    family: 'Noteworthy',
    fullName: 'Noteworthy Bold',
    style: 'Bold',
  },
  {
    family: 'Noteworthy',
    fullName: 'Noteworthy Light',
    style: 'Light',
  },
  {
    family: 'Noto Nastaliq Urdu',
    fullName: 'Noto Nastaliq Urdu',
    style: 'Regular',
  },
  {
    family: 'Noto Nastaliq Urdu',
    fullName: 'Noto Nastaliq Urdu Bold',
    style: 'Bold',
  },
  {
    family: 'Noto Sans Batak',
    fullName: 'Noto Sans Batak Regular',
    style: 'Regular',
  },
  {
    family: 'Noto Sans Kannada',
    fullName: 'Noto Sans Kannada Black',
    style: 'Black',
  },
  {
    family: 'Noto Sans Kannada',
    fullName: 'Noto Sans Kannada Bold',
    style: 'Bold',
  },
  {
    family: 'Noto Sans Kannada',
    fullName: 'Noto Sans Kannada ExtraBold',
    style: 'ExtraBold',
  },
  {
    family: 'Noto Sans Kannada',
    fullName: 'Noto Sans Kannada ExtraLight',
    style: 'ExtraLight',
  },
  {
    family: 'Noto Sans Kannada',
    fullName: 'Noto Sans Kannada Light',
    style: 'Light',
  },
  {
    family: 'Noto Sans Kannada',
    fullName: 'Noto Sans Kannada Medium',
    style: 'Medium',
  },
  {
    family: 'Noto Sans Kannada',
    fullName: 'Noto Sans Kannada Regular',
    style: 'Regular',
  },
  {
    family: 'Noto Sans Kannada',
    fullName: 'Noto Sans Kannada SemiBold',
    style: 'SemiBold',
  },
  {
    family: 'Noto Sans Kannada',
    fullName: 'Noto Sans Kannada Thin',
    style: 'Thin',
  },
  {
    family: 'Noto Sans Myanmar',
    fullName: 'Noto Sans Myanmar Black',
    style: 'Black',
  },
  {
    family: 'Noto Sans Myanmar',
    fullName: 'Noto Sans Myanmar Bold',
    style: 'Bold',
  },
  {
    family: 'Noto Sans Myanmar',
    fullName: 'Noto Sans Myanmar ExtraBold',
    style: 'ExtraBold',
  },
  {
    family: 'Noto Sans Myanmar',
    fullName: 'Noto Sans Myanmar ExtraLight',
    style: 'ExtraLight',
  },
  {
    family: 'Noto Sans Myanmar',
    fullName: 'Noto Sans Myanmar Light',
    style: 'Light',
  },
  {
    family: 'Noto Sans Myanmar',
    fullName: 'Noto Sans Myanmar Medium',
    style: 'Medium',
  },
  {
    family: 'Noto Sans Myanmar',
    fullName: 'Noto Sans Myanmar Regular',
    style: 'Regular',
  },
  {
    family: 'Noto Sans Myanmar',
    fullName: 'Noto Sans Myanmar SemiBold',
    style: 'SemiBold',
  },
  {
    family: 'Noto Sans Myanmar',
    fullName: 'Noto Sans Myanmar Thin',
    style: 'Thin',
  },
  {
    family: 'Noto Sans NKo',
    fullName: 'Noto Sans NKo Regular',
    style: 'Regular',
  },
  {
    family: 'Noto Sans Oriya',
    fullName: 'Noto Sans Oriya',
    style: 'Regular',
  },
  {
    family: 'Noto Sans Oriya',
    fullName: 'Noto Sans Oriya Bold',
    style: 'Bold',
  },
  {
    family: 'Noto Sans Tagalog',
    fullName: 'Noto Sans Tagalog Regular',
    style: 'Regular',
  },
  {
    family: 'Noto Serif Myanmar',
    fullName: 'Noto Serif Myanmar Black',
    style: 'Black',
  },
  {
    family: 'Noto Serif Myanmar',
    fullName: 'Noto Serif Myanmar Bold',
    style: 'Bold',
  },
  {
    family: 'Noto Serif Myanmar',
    fullName: 'Noto Serif Myanmar ExtraBold',
    style: 'ExtraBold',
  },
  {
    family: 'Noto Serif Myanmar',
    fullName: 'Noto Serif Myanmar ExtraLight',
    style: 'ExtraLight',
  },
  {
    family: 'Noto Serif Myanmar',
    fullName: 'Noto Serif Myanmar Light',
    style: 'Light',
  },
  {
    family: 'Noto Serif Myanmar',
    fullName: 'Noto Serif Myanmar Medium',
    style: 'Medium',
  },
  {
    family: 'Noto Serif Myanmar',
    fullName: 'Noto Serif Myanmar Regular',
    style: 'Regular',
  },
  {
    family: 'Noto Serif Myanmar',
    fullName: 'Noto Serif Myanmar SemiBold',
    style: 'SemiBold',
  },
  {
    family: 'Noto Serif Myanmar',
    fullName: 'Noto Serif Myanmar Thin',
    style: 'Thin',
  },
  {
    family: 'Optima',
    fullName: 'Optima Bold',
    style: 'Bold',
  },
  {
    family: 'Optima',
    fullName: 'Optima Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Optima',
    fullName: 'Optima ExtraBlack',
    style: 'ExtraBlack',
  },
  {
    family: 'Optima',
    fullName: 'Optima Italic',
    style: 'Italic',
  },
  {
    family: 'Optima',
    fullName: 'Optima Regular',
    style: 'Regular',
  },
  {
    family: 'Oriya MN',
    fullName: 'Oriya MN',
    style: 'Regular',
  },
  {
    family: 'Oriya MN',
    fullName: 'Oriya MN Bold',
    style: 'Bold',
  },
  {
    family: 'Oriya Sangam MN',
    fullName: 'Oriya Sangam MN',
    style: 'Regular',
  },
  {
    family: 'Oriya Sangam MN',
    fullName: 'Oriya Sangam MN Bold',
    style: 'Bold',
  },
  {
    family: 'Osaka',
    fullName: 'Osaka',
    style: 'Regular',
  },
  {
    family: 'Osaka',
    fullName: 'Osaka-Mono',
    style: 'Regular-Mono',
  },
  {
    family: 'PSL Ornanong Pro',
    fullName: 'PSL Ornanong Pro Bold',
    style: 'Bold',
  },
  {
    family: 'PSL Ornanong Pro',
    fullName: 'PSL Ornanong Pro Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'PSL Ornanong Pro',
    fullName: 'PSL Ornanong Pro Demibold',
    style: 'Demibold',
  },
  {
    family: 'PSL Ornanong Pro',
    fullName: 'PSL Ornanong Pro Demibold Italic',
    style: 'Demibold Italic',
  },
  {
    family: 'PSL Ornanong Pro',
    fullName: 'PSL Ornanong Pro Italic',
    style: 'Italic',
  },
  {
    family: 'PSL Ornanong Pro',
    fullName: 'PSL Ornanong Pro Light',
    style: 'Light',
  },
  {
    family: 'PSL Ornanong Pro',
    fullName: 'PSL Ornanong Pro Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'PSL Ornanong Pro',
    fullName: 'PSL Ornanong Pro',
    style: 'Regular',
  },
  {
    family: 'PT Mono',
    fullName: 'PT Mono Bold',
    style: 'Bold',
  },
  {
    family: 'PT Mono',
    fullName: 'PT Mono',
    style: 'Regular',
  },
  {
    family: 'PT Sans',
    fullName: 'PT Sans Bold',
    style: 'Bold',
  },
  {
    family: 'PT Sans',
    fullName: 'PT Sans Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'PT Sans Caption',
    fullName: 'PT Sans Caption',
    style: 'Regular',
  },
  {
    family: 'PT Sans Caption',
    fullName: 'PT Sans Caption Bold',
    style: 'Bold',
  },
  {
    family: 'PT Sans',
    fullName: 'PT Sans Italic',
    style: 'Italic',
  },
  {
    family: 'PT Sans Narrow',
    fullName: 'PT Sans Narrow',
    style: 'Regular',
  },
  {
    family: 'PT Sans Narrow',
    fullName: 'PT Sans Narrow Bold',
    style: 'Bold',
  },
  {
    family: 'PT Sans',
    fullName: 'PT Sans',
    style: 'Regular',
  },
  {
    family: 'PT Serif',
    fullName: 'PT Serif Bold',
    style: 'Bold',
  },
  {
    family: 'PT Serif',
    fullName: 'PT Serif Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'PT Serif Caption',
    fullName: 'PT Serif Caption',
    style: 'Regular',
  },
  {
    family: 'PT Serif Caption',
    fullName: 'PT Serif Caption Italic',
    style: 'Italic',
  },
  {
    family: 'PT Serif',
    fullName: 'PT Serif Italic',
    style: 'Italic',
  },
  {
    family: 'PT Serif',
    fullName: 'PT Serif',
    style: 'Regular',
  },
  {
    family: 'Palatino',
    fullName: 'Palatino Bold',
    style: 'Bold',
  },
  {
    family: 'Palatino',
    fullName: 'Palatino Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Palatino',
    fullName: 'Palatino Italic',
    style: 'Italic',
  },
  {
    family: 'Palatino',
    fullName: 'Palatino',
    style: 'Regular',
  },
  {
    family: 'Papyrus',
    fullName: 'Papyrus',
    style: 'Regular',
  },
  {
    family: 'Papyrus',
    fullName: 'Papyrus Condensed',
    style: 'Condensed',
  },
  {
    family: 'Party LET',
    fullName: 'Party LET Plain',
    style: 'Plain',
  },
  {
    family: 'Phosphate',
    fullName: 'Phosphate Inline',
    style: 'Inline',
  },
  {
    family: 'Phosphate',
    fullName: 'Phosphate Solid',
    style: 'Solid',
  },
  {
    family: 'PingFang HK',
    fullName: '苹方-港 细体',
    style: 'Light',
  },
  {
    family: 'PingFang HK',
    fullName: '苹方-港 中黑体',
    style: 'Medium',
  },
  {
    family: 'PingFang HK',
    fullName: '苹方-港 常规体',
    style: 'Regular',
  },
  {
    family: 'PingFang HK',
    fullName: '苹方-港 中粗体',
    style: 'Semibold',
  },
  {
    family: 'PingFang HK',
    fullName: '苹方-港 纤细体',
    style: 'Thin',
  },
  {
    family: 'PingFang HK',
    fullName: '苹方-港 极细体',
    style: 'Ultralight',
  },
  {
    family: 'PingFang SC',
    fullName: '苹方-简 细体',
    style: 'Light',
  },
  {
    family: 'PingFang SC',
    fullName: '苹方-简 中黑体',
    style: 'Medium',
  },
  {
    family: 'PingFang SC',
    fullName: '苹方-简 常规体',
    style: 'Regular',
  },
  {
    family: 'PingFang SC',
    fullName: '苹方-简 中粗体',
    style: 'Semibold',
  },
  {
    family: 'PingFang SC',
    fullName: '苹方-简 纤细体',
    style: 'Thin',
  },
  {
    family: 'PingFang SC',
    fullName: '苹方-简 极细体',
    style: 'Ultralight',
  },
  {
    family: 'PingFang TC',
    fullName: '苹方-繁 细体',
    style: 'Light',
  },
  {
    family: 'PingFang TC',
    fullName: '苹方-繁 中黑体',
    style: 'Medium',
  },
  {
    family: 'PingFang TC',
    fullName: '苹方-繁 常规体',
    style: 'Regular',
  },
  {
    family: 'PingFang TC',
    fullName: '苹方-繁 中粗体',
    style: 'Semibold',
  },
  {
    family: 'PingFang TC',
    fullName: '苹方-繁 纤细体',
    style: 'Thin',
  },
  {
    family: 'PingFang TC',
    fullName: '苹方-繁 极细体',
    style: 'Ultralight',
  },
  {
    family: 'Plantagenet Cherokee',
    fullName: 'Plantagenet Cherokee',
    style: 'Regular',
  },
  {
    family: 'Raanana',
    fullName: 'Raanana',
    style: 'Regular',
  },
  {
    family: 'Raanana',
    fullName: 'Raanana Bold',
    style: 'Bold',
  },
  {
    family: 'Rockwell',
    fullName: 'Rockwell-Bold',
    style: 'Bold',
  },
  {
    family: 'Rockwell',
    fullName: 'Rockwell Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Rockwell',
    fullName: 'Rockwell Italic',
    style: 'Italic',
  },
  {
    family: 'Rockwell',
    fullName: 'Rockwell',
    style: 'Regular',
  },
  {
    family: 'Hei',
    fullName: 'Hei Regular',
    style: 'Regular',
  },
  {
    family: 'Kai',
    fullName: 'Kai Regular',
    style: 'Regular',
  },
  {
    family: 'Baoli SC',
    fullName: '报隶-简 常规体',
    style: 'Regular',
  },
  {
    family: 'Baoli TC',
    fullName: '报隶-繁 常规体',
    style: 'Regular',
  },
  {
    family: 'STFangsong',
    fullName: '华文仿宋',
    style: 'Regular',
  },
  {
    family: 'STHeiti',
    fullName: '华文黑体',
    style: 'Regular',
  },
  {
    family: 'Heiti SC',
    fullName: '黑体-简 细体',
    style: 'Light',
  },
  {
    family: 'Heiti SC',
    fullName: '黑体-简 中等',
    style: 'Medium',
  },
  {
    family: 'Heiti TC',
    fullName: '黑体-繁 细体',
    style: 'Light',
  },
  {
    family: 'Heiti TC',
    fullName: '黑体-繁 中等',
    style: 'Medium',
  },
  {
    family: 'STIX Two Math',
    fullName: 'STIX Two Math Regular',
    style: 'Regular',
  },
  {
    family: 'STIX Two Text',
    fullName: 'STIX Two Text',
    style: 'Regular',
  },
  {
    family: 'STIX Two Text',
    fullName: 'STIX Two Text Italic',
    style: 'Italic',
  },
  {
    family: 'STIX Two Text',
    fullName: 'STIX Two Text Italic',
    style: 'Bold Italic',
  },
  {
    family: 'STIX Two Text',
    fullName: 'STIX Two Text Italic',
    style: 'Medium Italic',
  },
  {
    family: 'STIX Two Text',
    fullName: 'STIX Two Text Italic',
    style: 'SemiBold Italic',
  },
  {
    family: 'STIX Two Text',
    fullName: 'STIX Two Text',
    style: 'Bold',
  },
  {
    family: 'STIX Two Text',
    fullName: 'STIX Two Text',
    style: 'Medium',
  },
  {
    family: 'STIX Two Text',
    fullName: 'STIX Two Text',
    style: 'SemiBold',
  },
  {
    family: 'STKaiti',
    fullName: '华文楷体',
    style: 'Regular',
  },
  {
    family: 'Kaiti SC',
    fullName: '楷体-简 黑体',
    style: 'Black',
  },
  {
    family: 'Kaiti SC',
    fullName: '楷体-简 粗体',
    style: 'Bold',
  },
  {
    family: 'Kaiti SC',
    fullName: '楷体-简 常规体',
    style: 'Regular',
  },
  {
    family: 'Kaiti TC',
    fullName: '楷体-繁 黑体',
    style: 'Black',
  },
  {
    family: 'Kaiti TC',
    fullName: '楷体-繁 粗体',
    style: 'Bold',
  },
  {
    family: 'Kaiti TC',
    fullName: '楷体-繁 常规体',
    style: 'Regular',
  },
  {
    family: 'Libian SC',
    fullName: '隶变-简 常规体',
    style: 'Regular',
  },
  {
    family: 'Libian TC',
    fullName: '隶变-繁 常规体',
    style: 'Regular',
  },
  {
    family: 'STSong',
    fullName: '华文宋体',
    style: 'Regular',
  },
  {
    family: 'Songti SC',
    fullName: '宋体-简 黑体',
    style: 'Black',
  },
  {
    family: 'Songti SC',
    fullName: '宋体-简 粗体',
    style: 'Bold',
  },
  {
    family: 'Songti SC',
    fullName: '宋体-简 细体',
    style: 'Light',
  },
  {
    family: 'Songti SC',
    fullName: '宋体-简 常规体',
    style: 'Regular',
  },
  {
    family: 'Songti TC',
    fullName: '宋体-繁 粗体',
    style: 'Bold',
  },
  {
    family: 'Songti TC',
    fullName: '宋体-繁 细体',
    style: 'Light',
  },
  {
    family: 'Songti TC',
    fullName: '宋体-繁 常规体',
    style: 'Regular',
  },
  {
    family: 'STHeiti',
    fullName: '华文细黑',
    style: 'Light',
  },
  {
    family: 'Xingkai SC',
    fullName: '行楷-简 粗体',
    style: 'Bold',
  },
  {
    family: 'Xingkai SC',
    fullName: '行楷-简 细体',
    style: 'Light',
  },
  {
    family: 'Xingkai TC',
    fullName: '行楷-繁 粗体',
    style: 'Bold',
  },
  {
    family: 'Xingkai TC',
    fullName: '行楷-繁 细体',
    style: 'Light',
  },
  {
    family: 'Yuanti SC',
    fullName: '圆体-简 粗体',
    style: 'Bold',
  },
  {
    family: 'Yuanti SC',
    fullName: '圆体-简 细体',
    style: 'Light',
  },
  {
    family: 'Yuanti SC',
    fullName: '圆体-简 常规体',
    style: 'Regular',
  },
  {
    family: 'Yuanti TC',
    fullName: '圆体-繁 粗体',
    style: 'Bold',
  },
  {
    family: 'Yuanti TC',
    fullName: '圆体-繁 细体',
    style: 'Light',
  },
  {
    family: 'Yuanti TC',
    fullName: '圆体-繁 常规体',
    style: 'Regular',
  },
  {
    family: 'Sana',
    fullName: 'Sana Regular',
    style: 'Regular',
  },
  {
    family: 'Sarasa Fixed CL',
    fullName: 'Sarasa Fixed CL Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Fixed CL',
    fullName: 'Sarasa Fixed CL Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Fixed CL',
    fullName: 'Sarasa Fixed CL Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Fixed CL',
    fullName: 'Sarasa Fixed CL Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Fixed CL',
    fullName: 'Sarasa Fixed CL Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Fixed CL',
    fullName: 'Sarasa Fixed CL Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Fixed CL',
    fullName: 'Sarasa Fixed CL Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Fixed CL',
    fullName: 'Sarasa Fixed CL',
    style: 'Regular',
  },
  {
    family: 'Sarasa Fixed CL',
    fullName: 'Sarasa Fixed CL Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Fixed CL',
    fullName: 'Sarasa Fixed CL Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Fixed HC',
    fullName: 'Sarasa Fixed HC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Fixed HC',
    fullName: 'Sarasa Fixed HC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Fixed HC',
    fullName: 'Sarasa Fixed HC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Fixed HC',
    fullName: 'Sarasa Fixed HC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Fixed HC',
    fullName: 'Sarasa Fixed HC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Fixed HC',
    fullName: 'Sarasa Fixed HC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Fixed HC',
    fullName: 'Sarasa Fixed HC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Fixed HC',
    fullName: 'Sarasa Fixed HC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Fixed HC',
    fullName: 'Sarasa Fixed HC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Fixed HC',
    fullName: 'Sarasa Fixed HC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Fixed J',
    fullName: 'Sarasa Fixed J Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Fixed J',
    fullName: 'Sarasa Fixed J Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Fixed J',
    fullName: 'Sarasa Fixed J Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Fixed J',
    fullName: 'Sarasa Fixed J Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Fixed J',
    fullName: 'Sarasa Fixed J Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Fixed J',
    fullName: 'Sarasa Fixed J Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Fixed J',
    fullName: 'Sarasa Fixed J Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Fixed J',
    fullName: 'Sarasa Fixed J',
    style: 'Regular',
  },
  {
    family: 'Sarasa Fixed J',
    fullName: 'Sarasa Fixed J Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Fixed J',
    fullName: 'Sarasa Fixed J Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Fixed K',
    fullName: 'Sarasa Fixed K Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Fixed K',
    fullName: 'Sarasa Fixed K Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Fixed K',
    fullName: 'Sarasa Fixed K Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Fixed K',
    fullName: 'Sarasa Fixed K Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Fixed K',
    fullName: 'Sarasa Fixed K Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Fixed K',
    fullName: 'Sarasa Fixed K Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Fixed K',
    fullName: 'Sarasa Fixed K Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Fixed K',
    fullName: 'Sarasa Fixed K',
    style: 'Regular',
  },
  {
    family: 'Sarasa Fixed K',
    fullName: 'Sarasa Fixed K Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Fixed K',
    fullName: 'Sarasa Fixed K Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Fixed SC',
    fullName: 'Sarasa Fixed SC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Fixed SC',
    fullName: 'Sarasa Fixed SC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Fixed SC',
    fullName: 'Sarasa Fixed SC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Fixed SC',
    fullName: 'Sarasa Fixed SC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Fixed SC',
    fullName: 'Sarasa Fixed SC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Fixed SC',
    fullName: 'Sarasa Fixed SC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Fixed SC',
    fullName: 'Sarasa Fixed SC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Fixed SC',
    fullName: 'Sarasa Fixed SC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Fixed SC',
    fullName: 'Sarasa Fixed SC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Fixed SC',
    fullName: 'Sarasa Fixed SC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Fixed Slab CL',
    fullName: 'Sarasa Fixed Slab CL Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Fixed Slab CL',
    fullName: 'Sarasa Fixed Slab CL Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Fixed Slab CL',
    fullName: 'Sarasa Fixed Slab CL Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Fixed Slab CL',
    fullName: 'Sarasa Fixed Slab CL Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Fixed Slab CL',
    fullName: 'Sarasa Fixed Slab CL Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Fixed Slab CL',
    fullName: 'Sarasa Fixed Slab CL Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Fixed Slab CL',
    fullName: 'Sarasa Fixed Slab CL Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Fixed Slab CL',
    fullName: 'Sarasa Fixed Slab CL',
    style: 'Regular',
  },
  {
    family: 'Sarasa Fixed Slab CL',
    fullName: 'Sarasa Fixed Slab CL Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Fixed Slab CL',
    fullName: 'Sarasa Fixed Slab CL Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Fixed Slab HC',
    fullName: 'Sarasa Fixed Slab HC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Fixed Slab HC',
    fullName: 'Sarasa Fixed Slab HC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Fixed Slab HC',
    fullName: 'Sarasa Fixed Slab HC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Fixed Slab HC',
    fullName: 'Sarasa Fixed Slab HC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Fixed Slab HC',
    fullName: 'Sarasa Fixed Slab HC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Fixed Slab HC',
    fullName: 'Sarasa Fixed Slab HC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Fixed Slab HC',
    fullName: 'Sarasa Fixed Slab HC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Fixed Slab HC',
    fullName: 'Sarasa Fixed Slab HC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Fixed Slab HC',
    fullName: 'Sarasa Fixed Slab HC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Fixed Slab HC',
    fullName: 'Sarasa Fixed Slab HC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Fixed Slab J',
    fullName: 'Sarasa Fixed Slab J Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Fixed Slab J',
    fullName: 'Sarasa Fixed Slab J Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Fixed Slab J',
    fullName: 'Sarasa Fixed Slab J Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Fixed Slab J',
    fullName: 'Sarasa Fixed Slab J Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Fixed Slab J',
    fullName: 'Sarasa Fixed Slab J Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Fixed Slab J',
    fullName: 'Sarasa Fixed Slab J Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Fixed Slab J',
    fullName: 'Sarasa Fixed Slab J Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Fixed Slab J',
    fullName: 'Sarasa Fixed Slab J',
    style: 'Regular',
  },
  {
    family: 'Sarasa Fixed Slab J',
    fullName: 'Sarasa Fixed Slab J Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Fixed Slab J',
    fullName: 'Sarasa Fixed Slab J Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Fixed Slab K',
    fullName: 'Sarasa Fixed Slab K Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Fixed Slab K',
    fullName: 'Sarasa Fixed Slab K Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Fixed Slab K',
    fullName: 'Sarasa Fixed Slab K Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Fixed Slab K',
    fullName: 'Sarasa Fixed Slab K Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Fixed Slab K',
    fullName: 'Sarasa Fixed Slab K Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Fixed Slab K',
    fullName: 'Sarasa Fixed Slab K Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Fixed Slab K',
    fullName: 'Sarasa Fixed Slab K Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Fixed Slab K',
    fullName: 'Sarasa Fixed Slab K',
    style: 'Regular',
  },
  {
    family: 'Sarasa Fixed Slab K',
    fullName: 'Sarasa Fixed Slab K Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Fixed Slab K',
    fullName: 'Sarasa Fixed Slab K Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Fixed Slab SC',
    fullName: 'Sarasa Fixed Slab SC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Fixed Slab SC',
    fullName: 'Sarasa Fixed Slab SC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Fixed Slab SC',
    fullName: 'Sarasa Fixed Slab SC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Fixed Slab SC',
    fullName: 'Sarasa Fixed Slab SC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Fixed Slab SC',
    fullName: 'Sarasa Fixed Slab SC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Fixed Slab SC',
    fullName: 'Sarasa Fixed Slab SC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Fixed Slab SC',
    fullName: 'Sarasa Fixed Slab SC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Fixed Slab SC',
    fullName: 'Sarasa Fixed Slab SC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Fixed Slab SC',
    fullName: 'Sarasa Fixed Slab SC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Fixed Slab SC',
    fullName: 'Sarasa Fixed Slab SC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Fixed Slab TC',
    fullName: 'Sarasa Fixed Slab TC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Fixed Slab TC',
    fullName: 'Sarasa Fixed Slab TC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Fixed Slab TC',
    fullName: 'Sarasa Fixed Slab TC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Fixed Slab TC',
    fullName: 'Sarasa Fixed Slab TC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Fixed Slab TC',
    fullName: 'Sarasa Fixed Slab TC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Fixed Slab TC',
    fullName: 'Sarasa Fixed Slab TC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Fixed Slab TC',
    fullName: 'Sarasa Fixed Slab TC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Fixed Slab TC',
    fullName: 'Sarasa Fixed Slab TC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Fixed Slab TC',
    fullName: 'Sarasa Fixed Slab TC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Fixed Slab TC',
    fullName: 'Sarasa Fixed Slab TC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Fixed TC',
    fullName: 'Sarasa Fixed TC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Fixed TC',
    fullName: 'Sarasa Fixed TC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Fixed TC',
    fullName: 'Sarasa Fixed TC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Fixed TC',
    fullName: 'Sarasa Fixed TC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Fixed TC',
    fullName: 'Sarasa Fixed TC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Fixed TC',
    fullName: 'Sarasa Fixed TC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Fixed TC',
    fullName: 'Sarasa Fixed TC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Fixed TC',
    fullName: 'Sarasa Fixed TC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Fixed TC',
    fullName: 'Sarasa Fixed TC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Fixed TC',
    fullName: 'Sarasa Fixed TC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Gothic CL',
    fullName: '更紗黑體 CL Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Gothic CL',
    fullName: '更紗黑體 CL Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Gothic CL',
    fullName: '更紗黑體 CL Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Gothic CL',
    fullName: '更紗黑體 CL Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Gothic CL',
    fullName: '更紗黑體 CL Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Gothic CL',
    fullName: '更紗黑體 CL Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Gothic CL',
    fullName: '更紗黑體 CL Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Gothic CL',
    fullName: '更紗黑體 CL',
    style: 'Regular',
  },
  {
    family: 'Sarasa Gothic CL',
    fullName: '更紗黑體 CL Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Gothic CL',
    fullName: '更紗黑體 CL Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Gothic HC',
    fullName: '更紗黑體 HC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Gothic HC',
    fullName: '更紗黑體 HC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Gothic HC',
    fullName: '更紗黑體 HC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Gothic HC',
    fullName: '更紗黑體 HC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Gothic HC',
    fullName: '更紗黑體 HC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Gothic HC',
    fullName: '更紗黑體 HC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Gothic HC',
    fullName: '更紗黑體 HC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Gothic HC',
    fullName: '更紗黑體 HC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Gothic HC',
    fullName: '更紗黑體 HC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Gothic HC',
    fullName: '更紗黑體 HC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Gothic J',
    fullName: 'Sarasa Gothic J Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Gothic J',
    fullName: 'Sarasa Gothic J Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Gothic J',
    fullName: 'Sarasa Gothic J Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Gothic J',
    fullName: 'Sarasa Gothic J Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Gothic J',
    fullName: 'Sarasa Gothic J Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Gothic J',
    fullName: 'Sarasa Gothic J Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Gothic J',
    fullName: 'Sarasa Gothic J Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Gothic J',
    fullName: 'Sarasa Gothic J',
    style: 'Regular',
  },
  {
    family: 'Sarasa Gothic J',
    fullName: 'Sarasa Gothic J Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Gothic J',
    fullName: 'Sarasa Gothic J Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Gothic K',
    fullName: 'Sarasa Gothic K Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Gothic K',
    fullName: 'Sarasa Gothic K Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Gothic K',
    fullName: 'Sarasa Gothic K Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Gothic K',
    fullName: 'Sarasa Gothic K Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Gothic K',
    fullName: 'Sarasa Gothic K Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Gothic K',
    fullName: 'Sarasa Gothic K Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Gothic K',
    fullName: 'Sarasa Gothic K Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Gothic K',
    fullName: 'Sarasa Gothic K',
    style: 'Regular',
  },
  {
    family: 'Sarasa Gothic K',
    fullName: 'Sarasa Gothic K Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Gothic K',
    fullName: 'Sarasa Gothic K Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Gothic SC',
    fullName: '更纱黑体 SC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Gothic SC',
    fullName: '更纱黑体 SC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Gothic SC',
    fullName: '更纱黑体 SC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Gothic SC',
    fullName: '更纱黑体 SC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Gothic SC',
    fullName: '更纱黑体 SC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Gothic SC',
    fullName: '更纱黑体 SC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Gothic SC',
    fullName: '更纱黑体 SC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Gothic SC',
    fullName: '更纱黑体 SC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Gothic SC',
    fullName: '更纱黑体 SC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Gothic SC',
    fullName: '更纱黑体 SC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Gothic TC',
    fullName: '更紗黑體 TC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Gothic TC',
    fullName: '更紗黑體 TC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Gothic TC',
    fullName: '更紗黑體 TC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Gothic TC',
    fullName: '更紗黑體 TC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Gothic TC',
    fullName: '更紗黑體 TC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Gothic TC',
    fullName: '更紗黑體 TC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Gothic TC',
    fullName: '更紗黑體 TC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Gothic TC',
    fullName: '更紗黑體 TC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Gothic TC',
    fullName: '更紗黑體 TC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Gothic TC',
    fullName: '更紗黑體 TC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Mono CL',
    fullName: '等距更紗黑體 CL Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Mono CL',
    fullName: '等距更紗黑體 CL Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Mono CL',
    fullName: '等距更紗黑體 CL Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Mono CL',
    fullName: '等距更紗黑體 CL Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Mono CL',
    fullName: '等距更紗黑體 CL Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Mono CL',
    fullName: '等距更紗黑體 CL Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Mono CL',
    fullName: '等距更紗黑體 CL Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Mono CL',
    fullName: '等距更紗黑體 CL',
    style: 'Regular',
  },
  {
    family: 'Sarasa Mono CL',
    fullName: '等距更紗黑體 CL Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Mono CL',
    fullName: '等距更紗黑體 CL Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Mono HC',
    fullName: '等距更紗黑體 HC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Mono HC',
    fullName: '等距更紗黑體 HC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Mono HC',
    fullName: '等距更紗黑體 HC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Mono HC',
    fullName: '等距更紗黑體 HC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Mono HC',
    fullName: '等距更紗黑體 HC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Mono HC',
    fullName: '等距更紗黑體 HC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Mono HC',
    fullName: '等距更紗黑體 HC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Mono HC',
    fullName: '等距更紗黑體 HC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Mono HC',
    fullName: '等距更紗黑體 HC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Mono HC',
    fullName: '等距更紗黑體 HC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Mono J',
    fullName: 'Sarasa Mono J Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Mono J',
    fullName: 'Sarasa Mono J Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Mono J',
    fullName: 'Sarasa Mono J Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Mono J',
    fullName: 'Sarasa Mono J Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Mono J',
    fullName: 'Sarasa Mono J Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Mono J',
    fullName: 'Sarasa Mono J Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Mono J',
    fullName: 'Sarasa Mono J Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Mono J',
    fullName: 'Sarasa Mono J',
    style: 'Regular',
  },
  {
    family: 'Sarasa Mono J',
    fullName: 'Sarasa Mono J Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Mono J',
    fullName: 'Sarasa Mono J Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Mono K',
    fullName: 'Sarasa Mono K Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Mono K',
    fullName: 'Sarasa Mono K Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Mono K',
    fullName: 'Sarasa Mono K Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Mono K',
    fullName: 'Sarasa Mono K Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Mono K',
    fullName: 'Sarasa Mono K Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Mono K',
    fullName: 'Sarasa Mono K Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Mono K',
    fullName: 'Sarasa Mono K Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Mono K',
    fullName: 'Sarasa Mono K',
    style: 'Regular',
  },
  {
    family: 'Sarasa Mono K',
    fullName: 'Sarasa Mono K Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Mono K',
    fullName: 'Sarasa Mono K Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Mono SC',
    fullName: '等距更纱黑体 SC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Mono SC',
    fullName: '等距更纱黑体 SC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Mono SC',
    fullName: '等距更纱黑体 SC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Mono SC',
    fullName: '等距更纱黑体 SC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Mono SC',
    fullName: '等距更纱黑体 SC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Mono SC',
    fullName: '等距更纱黑体 SC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Mono SC',
    fullName: '等距更纱黑体 SC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Mono SC',
    fullName: '等距更纱黑体 SC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Mono SC',
    fullName: '等距更纱黑体 SC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Mono SC',
    fullName: '等距更纱黑体 SC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Mono Slab CL',
    fullName: '等距更紗黑體 Slab CL Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Mono Slab CL',
    fullName: '等距更紗黑體 Slab CL Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Mono Slab CL',
    fullName: '等距更紗黑體 Slab CL Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Mono Slab CL',
    fullName: '等距更紗黑體 Slab CL Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Mono Slab CL',
    fullName: '等距更紗黑體 Slab CL Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Mono Slab CL',
    fullName: '等距更紗黑體 Slab CL Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Mono Slab CL',
    fullName: '等距更紗黑體 Slab CL Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Mono Slab CL',
    fullName: '等距更紗黑體 Slab CL',
    style: 'Regular',
  },
  {
    family: 'Sarasa Mono Slab CL',
    fullName: '等距更紗黑體 Slab CL Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Mono Slab CL',
    fullName: '等距更紗黑體 Slab CL Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Mono Slab HC',
    fullName: '等距更紗黑體 Slab HC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Mono Slab HC',
    fullName: '等距更紗黑體 Slab HC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Mono Slab HC',
    fullName: '等距更紗黑體 Slab HC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Mono Slab HC',
    fullName: '等距更紗黑體 Slab HC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Mono Slab HC',
    fullName: '等距更紗黑體 Slab HC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Mono Slab HC',
    fullName: '等距更紗黑體 Slab HC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Mono Slab HC',
    fullName: '等距更紗黑體 Slab HC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Mono Slab HC',
    fullName: '等距更紗黑體 Slab HC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Mono Slab HC',
    fullName: '等距更紗黑體 Slab HC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Mono Slab HC',
    fullName: '等距更紗黑體 Slab HC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Mono Slab J',
    fullName: 'Sarasa Mono Slab J Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Mono Slab J',
    fullName: 'Sarasa Mono Slab J Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Mono Slab J',
    fullName: 'Sarasa Mono Slab J Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Mono Slab J',
    fullName: 'Sarasa Mono Slab J Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Mono Slab J',
    fullName: 'Sarasa Mono Slab J Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Mono Slab J',
    fullName: 'Sarasa Mono Slab J Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Mono Slab J',
    fullName: 'Sarasa Mono Slab J Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Mono Slab J',
    fullName: 'Sarasa Mono Slab J',
    style: 'Regular',
  },
  {
    family: 'Sarasa Mono Slab J',
    fullName: 'Sarasa Mono Slab J Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Mono Slab J',
    fullName: 'Sarasa Mono Slab J Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Mono Slab K',
    fullName: 'Sarasa Mono Slab K Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Mono Slab K',
    fullName: 'Sarasa Mono Slab K Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Mono Slab K',
    fullName: 'Sarasa Mono Slab K Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Mono Slab K',
    fullName: 'Sarasa Mono Slab K Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Mono Slab K',
    fullName: 'Sarasa Mono Slab K Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Mono Slab K',
    fullName: 'Sarasa Mono Slab K Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Mono Slab K',
    fullName: 'Sarasa Mono Slab K Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Mono Slab K',
    fullName: 'Sarasa Mono Slab K',
    style: 'Regular',
  },
  {
    family: 'Sarasa Mono Slab K',
    fullName: 'Sarasa Mono Slab K Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Mono Slab K',
    fullName: 'Sarasa Mono Slab K Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Mono Slab SC',
    fullName: '等距更纱黑体 Slab SC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Mono Slab SC',
    fullName: '等距更纱黑体 Slab SC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Mono Slab SC',
    fullName: '等距更纱黑体 Slab SC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Mono Slab SC',
    fullName: '等距更纱黑体 Slab SC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Mono Slab SC',
    fullName: '等距更纱黑体 Slab SC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Mono Slab SC',
    fullName: '等距更纱黑体 Slab SC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Mono Slab SC',
    fullName: '等距更纱黑体 Slab SC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Mono Slab SC',
    fullName: '等距更纱黑体 Slab SC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Mono Slab SC',
    fullName: '等距更纱黑体 Slab SC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Mono Slab SC',
    fullName: '等距更纱黑体 Slab SC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Mono Slab TC',
    fullName: '等距更紗黑體 Slab TC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Mono Slab TC',
    fullName: '等距更紗黑體 Slab TC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Mono Slab TC',
    fullName: '等距更紗黑體 Slab TC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Mono Slab TC',
    fullName: '等距更紗黑體 Slab TC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Mono Slab TC',
    fullName: '等距更紗黑體 Slab TC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Mono Slab TC',
    fullName: '等距更紗黑體 Slab TC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Mono Slab TC',
    fullName: '等距更紗黑體 Slab TC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Mono Slab TC',
    fullName: '等距更紗黑體 Slab TC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Mono Slab TC',
    fullName: '等距更紗黑體 Slab TC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Mono Slab TC',
    fullName: '等距更紗黑體 Slab TC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Mono TC',
    fullName: '等距更紗黑體 TC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Mono TC',
    fullName: '等距更紗黑體 TC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Mono TC',
    fullName: '等距更紗黑體 TC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Mono TC',
    fullName: '等距更紗黑體 TC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Mono TC',
    fullName: '等距更紗黑體 TC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Mono TC',
    fullName: '等距更紗黑體 TC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Mono TC',
    fullName: '等距更紗黑體 TC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Mono TC',
    fullName: '等距更紗黑體 TC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Mono TC',
    fullName: '等距更紗黑體 TC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Mono TC',
    fullName: '等距更紗黑體 TC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Term CL',
    fullName: 'Sarasa Term CL Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Term CL',
    fullName: 'Sarasa Term CL Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Term CL',
    fullName: 'Sarasa Term CL Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Term CL',
    fullName: 'Sarasa Term CL Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Term CL',
    fullName: 'Sarasa Term CL Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Term CL',
    fullName: 'Sarasa Term CL Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Term CL',
    fullName: 'Sarasa Term CL Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Term CL',
    fullName: 'Sarasa Term CL',
    style: 'Regular',
  },
  {
    family: 'Sarasa Term CL',
    fullName: 'Sarasa Term CL Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Term CL',
    fullName: 'Sarasa Term CL Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Term HC',
    fullName: 'Sarasa Term HC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Term HC',
    fullName: 'Sarasa Term HC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Term HC',
    fullName: 'Sarasa Term HC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Term HC',
    fullName: 'Sarasa Term HC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Term HC',
    fullName: 'Sarasa Term HC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Term HC',
    fullName: 'Sarasa Term HC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Term HC',
    fullName: 'Sarasa Term HC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Term HC',
    fullName: 'Sarasa Term HC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Term HC',
    fullName: 'Sarasa Term HC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Term HC',
    fullName: 'Sarasa Term HC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Term J',
    fullName: 'Sarasa Term J Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Term J',
    fullName: 'Sarasa Term J Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Term J',
    fullName: 'Sarasa Term J Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Term J',
    fullName: 'Sarasa Term J Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Term J',
    fullName: 'Sarasa Term J Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Term J',
    fullName: 'Sarasa Term J Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Term J',
    fullName: 'Sarasa Term J Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Term J',
    fullName: 'Sarasa Term J',
    style: 'Regular',
  },
  {
    family: 'Sarasa Term J',
    fullName: 'Sarasa Term J Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Term J',
    fullName: 'Sarasa Term J Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Term K',
    fullName: 'Sarasa Term K Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Term K',
    fullName: 'Sarasa Term K Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Term K',
    fullName: 'Sarasa Term K Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Term K',
    fullName: 'Sarasa Term K Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Term K',
    fullName: 'Sarasa Term K Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Term K',
    fullName: 'Sarasa Term K Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Term K',
    fullName: 'Sarasa Term K Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Term K',
    fullName: 'Sarasa Term K',
    style: 'Regular',
  },
  {
    family: 'Sarasa Term K',
    fullName: 'Sarasa Term K Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Term K',
    fullName: 'Sarasa Term K Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Term SC',
    fullName: 'Sarasa Term SC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Term SC',
    fullName: 'Sarasa Term SC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Term SC',
    fullName: 'Sarasa Term SC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Term SC',
    fullName: 'Sarasa Term SC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Term SC',
    fullName: 'Sarasa Term SC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Term SC',
    fullName: 'Sarasa Term SC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Term SC',
    fullName: 'Sarasa Term SC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Term SC',
    fullName: 'Sarasa Term SC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Term SC',
    fullName: 'Sarasa Term SC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Term SC',
    fullName: 'Sarasa Term SC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Term Slab CL',
    fullName: 'Sarasa Term Slab CL Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Term Slab CL',
    fullName: 'Sarasa Term Slab CL Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Term Slab CL',
    fullName: 'Sarasa Term Slab CL Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Term Slab CL',
    fullName: 'Sarasa Term Slab CL Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Term Slab CL',
    fullName: 'Sarasa Term Slab CL Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Term Slab CL',
    fullName: 'Sarasa Term Slab CL Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Term Slab CL',
    fullName: 'Sarasa Term Slab CL Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Term Slab CL',
    fullName: 'Sarasa Term Slab CL',
    style: 'Regular',
  },
  {
    family: 'Sarasa Term Slab CL',
    fullName: 'Sarasa Term Slab CL Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Term Slab CL',
    fullName: 'Sarasa Term Slab CL Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Term Slab HC',
    fullName: 'Sarasa Term Slab HC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Term Slab HC',
    fullName: 'Sarasa Term Slab HC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Term Slab HC',
    fullName: 'Sarasa Term Slab HC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Term Slab HC',
    fullName: 'Sarasa Term Slab HC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Term Slab HC',
    fullName: 'Sarasa Term Slab HC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Term Slab HC',
    fullName: 'Sarasa Term Slab HC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Term Slab HC',
    fullName: 'Sarasa Term Slab HC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Term Slab HC',
    fullName: 'Sarasa Term Slab HC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Term Slab HC',
    fullName: 'Sarasa Term Slab HC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Term Slab HC',
    fullName: 'Sarasa Term Slab HC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Term Slab J',
    fullName: 'Sarasa Term Slab J Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Term Slab J',
    fullName: 'Sarasa Term Slab J Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Term Slab J',
    fullName: 'Sarasa Term Slab J Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Term Slab J',
    fullName: 'Sarasa Term Slab J Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Term Slab J',
    fullName: 'Sarasa Term Slab J Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Term Slab J',
    fullName: 'Sarasa Term Slab J Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Term Slab J',
    fullName: 'Sarasa Term Slab J Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Term Slab J',
    fullName: 'Sarasa Term Slab J',
    style: 'Regular',
  },
  {
    family: 'Sarasa Term Slab J',
    fullName: 'Sarasa Term Slab J Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Term Slab J',
    fullName: 'Sarasa Term Slab J Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Term Slab K',
    fullName: 'Sarasa Term Slab K Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Term Slab K',
    fullName: 'Sarasa Term Slab K Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Term Slab K',
    fullName: 'Sarasa Term Slab K Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Term Slab K',
    fullName: 'Sarasa Term Slab K Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Term Slab K',
    fullName: 'Sarasa Term Slab K Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Term Slab K',
    fullName: 'Sarasa Term Slab K Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Term Slab K',
    fullName: 'Sarasa Term Slab K Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Term Slab K',
    fullName: 'Sarasa Term Slab K',
    style: 'Regular',
  },
  {
    family: 'Sarasa Term Slab K',
    fullName: 'Sarasa Term Slab K Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Term Slab K',
    fullName: 'Sarasa Term Slab K Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Term Slab SC',
    fullName: 'Sarasa Term Slab SC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Term Slab SC',
    fullName: 'Sarasa Term Slab SC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Term Slab SC',
    fullName: 'Sarasa Term Slab SC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Term Slab SC',
    fullName: 'Sarasa Term Slab SC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Term Slab SC',
    fullName: 'Sarasa Term Slab SC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Term Slab SC',
    fullName: 'Sarasa Term Slab SC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Term Slab SC',
    fullName: 'Sarasa Term Slab SC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Term Slab SC',
    fullName: 'Sarasa Term Slab SC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Term Slab SC',
    fullName: 'Sarasa Term Slab SC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Term Slab SC',
    fullName: 'Sarasa Term Slab SC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Term Slab TC',
    fullName: 'Sarasa Term Slab TC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Term Slab TC',
    fullName: 'Sarasa Term Slab TC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Term Slab TC',
    fullName: 'Sarasa Term Slab TC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Term Slab TC',
    fullName: 'Sarasa Term Slab TC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Term Slab TC',
    fullName: 'Sarasa Term Slab TC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Term Slab TC',
    fullName: 'Sarasa Term Slab TC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Term Slab TC',
    fullName: 'Sarasa Term Slab TC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Term Slab TC',
    fullName: 'Sarasa Term Slab TC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Term Slab TC',
    fullName: 'Sarasa Term Slab TC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Term Slab TC',
    fullName: 'Sarasa Term Slab TC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa Term TC',
    fullName: 'Sarasa Term TC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa Term TC',
    fullName: 'Sarasa Term TC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa Term TC',
    fullName: 'Sarasa Term TC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa Term TC',
    fullName: 'Sarasa Term TC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa Term TC',
    fullName: 'Sarasa Term TC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa Term TC',
    fullName: 'Sarasa Term TC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa Term TC',
    fullName: 'Sarasa Term TC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa Term TC',
    fullName: 'Sarasa Term TC',
    style: 'Regular',
  },
  {
    family: 'Sarasa Term TC',
    fullName: 'Sarasa Term TC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa Term TC',
    fullName: 'Sarasa Term TC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa UI CL',
    fullName: '更紗黑體 UI CL Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa UI CL',
    fullName: '更紗黑體 UI CL Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa UI CL',
    fullName: '更紗黑體 UI CL Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa UI CL',
    fullName: '更紗黑體 UI CL Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa UI CL',
    fullName: '更紗黑體 UI CL Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa UI CL',
    fullName: '更紗黑體 UI CL Light',
    style: 'Light',
  },
  {
    family: 'Sarasa UI CL',
    fullName: '更紗黑體 UI CL Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa UI CL',
    fullName: '更紗黑體 UI CL',
    style: 'Regular',
  },
  {
    family: 'Sarasa UI CL',
    fullName: '更紗黑體 UI CL Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa UI CL',
    fullName: '更紗黑體 UI CL Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa UI HC',
    fullName: '更紗黑體 UI HC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa UI HC',
    fullName: '更紗黑體 UI HC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa UI HC',
    fullName: '更紗黑體 UI HC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa UI HC',
    fullName: '更紗黑體 UI HC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa UI HC',
    fullName: '更紗黑體 UI HC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa UI HC',
    fullName: '更紗黑體 UI HC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa UI HC',
    fullName: '更紗黑體 UI HC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa UI HC',
    fullName: '更紗黑體 UI HC',
    style: 'Regular',
  },
  {
    family: 'Sarasa UI HC',
    fullName: '更紗黑體 UI HC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa UI HC',
    fullName: '更紗黑體 UI HC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa UI J',
    fullName: 'Sarasa UI J Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa UI J',
    fullName: 'Sarasa UI J Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa UI J',
    fullName: 'Sarasa UI J Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa UI J',
    fullName: 'Sarasa UI J Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa UI J',
    fullName: 'Sarasa UI J Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa UI J',
    fullName: 'Sarasa UI J Light',
    style: 'Light',
  },
  {
    family: 'Sarasa UI J',
    fullName: 'Sarasa UI J Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa UI J',
    fullName: 'Sarasa UI J',
    style: 'Regular',
  },
  {
    family: 'Sarasa UI J',
    fullName: 'Sarasa UI J Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa UI J',
    fullName: 'Sarasa UI J Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa UI K',
    fullName: 'Sarasa UI K Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa UI K',
    fullName: 'Sarasa UI K Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa UI K',
    fullName: 'Sarasa UI K Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa UI K',
    fullName: 'Sarasa UI K Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa UI K',
    fullName: 'Sarasa UI K Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa UI K',
    fullName: 'Sarasa UI K Light',
    style: 'Light',
  },
  {
    family: 'Sarasa UI K',
    fullName: 'Sarasa UI K Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa UI K',
    fullName: 'Sarasa UI K',
    style: 'Regular',
  },
  {
    family: 'Sarasa UI K',
    fullName: 'Sarasa UI K Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa UI K',
    fullName: 'Sarasa UI K Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa UI SC',
    fullName: '更纱黑体 UI SC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa UI SC',
    fullName: '更纱黑体 UI SC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa UI SC',
    fullName: '更纱黑体 UI SC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa UI SC',
    fullName: '更纱黑体 UI SC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa UI SC',
    fullName: '更纱黑体 UI SC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa UI SC',
    fullName: '更纱黑体 UI SC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa UI SC',
    fullName: '更纱黑体 UI SC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa UI SC',
    fullName: '更纱黑体 UI SC',
    style: 'Regular',
  },
  {
    family: 'Sarasa UI SC',
    fullName: '更纱黑体 UI SC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa UI SC',
    fullName: '更纱黑体 UI SC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sarasa UI TC',
    fullName: '更紗黑體 UI TC Bold',
    style: 'Bold',
  },
  {
    family: 'Sarasa UI TC',
    fullName: '更紗黑體 UI TC Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Sarasa UI TC',
    fullName: '更紗黑體 UI TC Xlight',
    style: 'Extralight',
  },
  {
    family: 'Sarasa UI TC',
    fullName: '更紗黑體 UI TC Xlight Italic',
    style: 'Extralight Italic',
  },
  {
    family: 'Sarasa UI TC',
    fullName: '更紗黑體 UI TC Italic',
    style: 'Italic',
  },
  {
    family: 'Sarasa UI TC',
    fullName: '更紗黑體 UI TC Light',
    style: 'Light',
  },
  {
    family: 'Sarasa UI TC',
    fullName: '更紗黑體 UI TC Light Italic',
    style: 'Light Italic',
  },
  {
    family: 'Sarasa UI TC',
    fullName: '更紗黑體 UI TC',
    style: 'Regular',
  },
  {
    family: 'Sarasa UI TC',
    fullName: '更紗黑體 UI TC Semibold',
    style: 'Semibold',
  },
  {
    family: 'Sarasa UI TC',
    fullName: '更紗黑體 UI TC Semibold Italic',
    style: 'Semibold Italic',
  },
  {
    family: 'Sathu',
    fullName: 'Sathu',
    style: 'Regular',
  },
  {
    family: 'Savoye LET',
    fullName: 'Savoye LET Plain:1.0',
    style: 'Plain',
  },
  {
    family: 'Shree Devanagari 714',
    fullName: 'Shree Devanagari 714',
    style: 'Regular',
  },
  {
    family: 'Shree Devanagari 714',
    fullName: 'Shree Devanagari 714 Bold',
    style: 'Bold',
  },
  {
    family: 'Shree Devanagari 714',
    fullName: 'Shree Devanagari 714 Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Shree Devanagari 714',
    fullName: 'Shree Devanagari 714 Italic',
    style: 'Italic',
  },
  {
    family: 'SignPainter',
    fullName: 'SignPainter-HouseScript',
    style: 'HouseScript',
  },
  {
    family: 'SignPainter',
    fullName: 'SignPainter-HouseScript Semibold',
    style: 'HouseScript Semibold',
  },
  {
    family: 'Silom',
    fullName: 'Silom',
    style: 'Regular',
  },
  {
    family: 'SimSong',
    fullName: '简宋 粗体',
    style: 'Bold',
  },
  {
    family: 'SimSong',
    fullName: '简宋 常规体',
    style: 'Regular',
  },
  {
    family: 'Sinhala MN',
    fullName: 'Sinhala MN',
    style: 'Regular',
  },
  {
    family: 'Sinhala MN',
    fullName: 'Sinhala MN Bold',
    style: 'Bold',
  },
  {
    family: 'Sinhala Sangam MN',
    fullName: 'Sinhala Sangam MN',
    style: 'Regular',
  },
  {
    family: 'Sinhala Sangam MN',
    fullName: 'Sinhala Sangam MN Bold',
    style: 'Bold',
  },
  {
    family: 'Skia',
    fullName: 'Skia',
    style: 'Regular',
  },
  {
    family: 'Skia',
    fullName: 'Skia',
    style: 'Black',
  },
  {
    family: 'Skia',
    fullName: 'Skia',
    style: 'Black Condensed',
  },
  {
    family: 'Skia',
    fullName: 'Skia',
    style: 'Black Extended',
  },
  {
    family: 'Skia',
    fullName: 'Skia',
    style: 'Bold',
  },
  {
    family: 'Skia',
    fullName: 'Skia',
    style: 'Condensed',
  },
  {
    family: 'Skia',
    fullName: 'Skia',
    style: 'Extended',
  },
  {
    family: 'Skia',
    fullName: 'Skia',
    style: 'Light',
  },
  {
    family: 'Skia',
    fullName: 'Skia',
    style: 'Light Condensed',
  },
  {
    family: 'Skia',
    fullName: 'Skia',
    style: 'Light Extended',
  },
  {
    family: 'Snell Roundhand',
    fullName: 'Snell Roundhand',
    style: 'Regular',
  },
  {
    family: 'Snell Roundhand',
    fullName: 'Snell Roundhand Black',
    style: 'Black',
  },
  {
    family: 'Snell Roundhand',
    fullName: 'Snell Roundhand Bold',
    style: 'Bold',
  },
  {
    family: 'Source Han Mono',
    fullName: 'Source Han Mono Bold',
    style: 'Bold',
  },
  {
    family: 'Source Han Mono',
    fullName: 'Source Han Mono Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Source Han Mono',
    fullName: 'Source Han Mono EL',
    style: 'EL',
  },
  {
    family: 'Source Han Mono',
    fullName: 'Source Han Mono EL Italic',
    style: 'EL Italic',
  },
  {
    family: 'Source Han Mono',
    fullName: 'Source Han Mono H',
    style: 'H',
  },
  {
    family: 'Source Han Mono',
    fullName: 'Source Han Mono H Italic',
    style: 'H Italic',
  },
  {
    family: 'Source Han Mono',
    fullName: 'Source Han Mono L',
    style: 'L',
  },
  {
    family: 'Source Han Mono',
    fullName: 'Source Han Mono L Italic',
    style: 'L Italic',
  },
  {
    family: 'Source Han Mono',
    fullName: 'Source Han Mono M',
    style: 'M',
  },
  {
    family: 'Source Han Mono',
    fullName: 'Source Han Mono M Italic',
    style: 'M Italic',
  },
  {
    family: 'Source Han Mono',
    fullName: 'Source Han Mono N',
    style: 'N',
  },
  {
    family: 'Source Han Mono',
    fullName: 'Source Han Mono N Italic',
    style: 'N Italic',
  },
  {
    family: 'Source Han Mono',
    fullName: 'Source Han Mono',
    style: 'Regular',
  },
  {
    family: 'Source Han Mono',
    fullName: 'Source Han Mono Italic',
    style: 'Italic',
  },
  {
    family: 'Source Han Mono HC',
    fullName: '思源等寬 香港 Bold',
    style: 'Bold',
  },
  {
    family: 'Source Han Mono HC',
    fullName: '思源等寬 香港 Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Source Han Mono HC',
    fullName: '思源等寬 香港 EL',
    style: 'EL',
  },
  {
    family: 'Source Han Mono HC',
    fullName: '思源等寬 香港 EL Italic',
    style: 'EL Italic',
  },
  {
    family: 'Source Han Mono HC',
    fullName: '思源等寬 香港 H',
    style: 'H',
  },
  {
    family: 'Source Han Mono HC',
    fullName: '思源等寬 香港 H Italic',
    style: 'H Italic',
  },
  {
    family: 'Source Han Mono HC',
    fullName: '思源等寬 香港 L',
    style: 'L',
  },
  {
    family: 'Source Han Mono HC',
    fullName: '思源等寬 香港 L Italic',
    style: 'L Italic',
  },
  {
    family: 'Source Han Mono HC',
    fullName: '思源等寬 香港 M',
    style: 'M',
  },
  {
    family: 'Source Han Mono HC',
    fullName: '思源等寬 香港 M Italic',
    style: 'M Italic',
  },
  {
    family: 'Source Han Mono HC',
    fullName: '思源等寬 香港 N',
    style: 'N',
  },
  {
    family: 'Source Han Mono HC',
    fullName: '思源等寬 香港 N Italic',
    style: 'N Italic',
  },
  {
    family: 'Source Han Mono HC',
    fullName: '思源等寬 香港',
    style: 'Regular',
  },
  {
    family: 'Source Han Mono HC',
    fullName: '思源等寬 香港 Italic',
    style: 'Italic',
  },
  {
    family: 'Source Han Mono K',
    fullName: 'Source Han Mono K Bold',
    style: 'Bold',
  },
  {
    family: 'Source Han Mono K',
    fullName: 'Source Han Mono K Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Source Han Mono K',
    fullName: 'Source Han Mono K EL',
    style: 'EL',
  },
  {
    family: 'Source Han Mono K',
    fullName: 'Source Han Mono K EL Italic',
    style: 'EL Italic',
  },
  {
    family: 'Source Han Mono K',
    fullName: 'Source Han Mono K H',
    style: 'H',
  },
  {
    family: 'Source Han Mono K',
    fullName: 'Source Han Mono K H Italic',
    style: 'H Italic',
  },
  {
    family: 'Source Han Mono K',
    fullName: 'Source Han Mono K L',
    style: 'L',
  },
  {
    family: 'Source Han Mono K',
    fullName: 'Source Han Mono K L Italic',
    style: 'L Italic',
  },
  {
    family: 'Source Han Mono K',
    fullName: 'Source Han Mono K M',
    style: 'M',
  },
  {
    family: 'Source Han Mono K',
    fullName: 'Source Han Mono K M Italic',
    style: 'M Italic',
  },
  {
    family: 'Source Han Mono K',
    fullName: 'Source Han Mono K N',
    style: 'N',
  },
  {
    family: 'Source Han Mono K',
    fullName: 'Source Han Mono K N Italic',
    style: 'N Italic',
  },
  {
    family: 'Source Han Mono K',
    fullName: 'Source Han Mono K',
    style: 'Regular',
  },
  {
    family: 'Source Han Mono K',
    fullName: 'Source Han Mono K Italic',
    style: 'Italic',
  },
  {
    family: 'Source Han Mono SC',
    fullName: '思源等宽 Bold',
    style: 'Bold',
  },
  {
    family: 'Source Han Mono SC',
    fullName: '思源等宽 Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Source Han Mono SC',
    fullName: '思源等宽 EL',
    style: 'EL',
  },
  {
    family: 'Source Han Mono SC',
    fullName: '思源等宽 EL Italic',
    style: 'EL Italic',
  },
  {
    family: 'Source Han Mono SC',
    fullName: '思源等宽 H',
    style: 'H',
  },
  {
    family: 'Source Han Mono SC',
    fullName: '思源等宽 H Italic',
    style: 'H Italic',
  },
  {
    family: 'Source Han Mono SC',
    fullName: '思源等宽 L',
    style: 'L',
  },
  {
    family: 'Source Han Mono SC',
    fullName: '思源等宽 L Italic',
    style: 'L Italic',
  },
  {
    family: 'Source Han Mono SC',
    fullName: '思源等宽 M',
    style: 'M',
  },
  {
    family: 'Source Han Mono SC',
    fullName: '思源等宽 M Italic',
    style: 'M Italic',
  },
  {
    family: 'Source Han Mono SC',
    fullName: '思源等宽 N',
    style: 'N',
  },
  {
    family: 'Source Han Mono SC',
    fullName: '思源等宽 N Italic',
    style: 'N Italic',
  },
  {
    family: 'Source Han Mono SC',
    fullName: '思源等宽',
    style: 'Regular',
  },
  {
    family: 'Source Han Mono SC',
    fullName: '思源等宽 Italic',
    style: 'Italic',
  },
  {
    family: 'Source Han Mono TC',
    fullName: '思源等寬 Bold',
    style: 'Bold',
  },
  {
    family: 'Source Han Mono TC',
    fullName: '思源等寬 Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Source Han Mono TC',
    fullName: '思源等寬 EL',
    style: 'EL',
  },
  {
    family: 'Source Han Mono TC',
    fullName: '思源等寬 EL Italic',
    style: 'EL Italic',
  },
  {
    family: 'Source Han Mono TC',
    fullName: '思源等寬 H',
    style: 'H',
  },
  {
    family: 'Source Han Mono TC',
    fullName: '思源等寬 H Italic',
    style: 'H Italic',
  },
  {
    family: 'Source Han Mono TC',
    fullName: '思源等寬 L',
    style: 'L',
  },
  {
    family: 'Source Han Mono TC',
    fullName: '思源等寬 L Italic',
    style: 'L Italic',
  },
  {
    family: 'Source Han Mono TC',
    fullName: '思源等寬 M',
    style: 'M',
  },
  {
    family: 'Source Han Mono TC',
    fullName: '思源等寬 M Italic',
    style: 'M Italic',
  },
  {
    family: 'Source Han Mono TC',
    fullName: '思源等寬 N',
    style: 'N',
  },
  {
    family: 'Source Han Mono TC',
    fullName: '思源等寬 N Italic',
    style: 'N Italic',
  },
  {
    family: 'Source Han Mono TC',
    fullName: '思源等寬',
    style: 'Regular',
  },
  {
    family: 'Source Han Mono TC',
    fullName: '思源等寬 Italic',
    style: 'Italic',
  },
  {
    family: 'Sukhumvit Set',
    fullName: 'SukhumvitSet-Bold',
    style: 'Bold',
  },
  {
    family: 'Sukhumvit Set',
    fullName: 'SukhumvitSet-Light',
    style: 'Light',
  },
  {
    family: 'Sukhumvit Set',
    fullName: 'SukhumvitSet-Medium',
    style: 'Medium',
  },
  {
    family: 'Sukhumvit Set',
    fullName: 'SukhumvitSet-SemiBold',
    style: 'Semi Bold',
  },
  {
    family: 'Sukhumvit Set',
    fullName: 'SukhumvitSet-Text',
    style: 'Text',
  },
  {
    family: 'Sukhumvit Set',
    fullName: 'SukhumvitSet-Thin',
    style: 'Thin',
  },
  {
    family: 'Symbol',
    fullName: 'Symbol',
    style: 'Regular',
  },
  {
    family: 'Tahoma',
    fullName: 'Tahoma',
    style: 'Regular',
  },
  {
    family: 'Tahoma',
    fullName: 'Tahoma Bold',
    style: 'Bold',
  },
  {
    family: 'Tamil MN',
    fullName: 'Tamil MN',
    style: 'Regular',
  },
  {
    family: 'Tamil MN',
    fullName: 'Tamil MN Bold',
    style: 'Bold',
  },
  {
    family: 'Tamil Sangam MN',
    fullName: 'Tamil Sangam MN',
    style: 'Regular',
  },
  {
    family: 'Tamil Sangam MN',
    fullName: 'Tamil Sangam MN Bold',
    style: 'Bold',
  },
  {
    family: 'Telugu MN',
    fullName: 'Telugu MN',
    style: 'Regular',
  },
  {
    family: 'Telugu MN',
    fullName: 'Telugu MN Bold',
    style: 'Bold',
  },
  {
    family: 'Telugu Sangam MN',
    fullName: 'Telugu Sangam MN',
    style: 'Regular',
  },
  {
    family: 'Telugu Sangam MN',
    fullName: 'Telugu Sangam MN Bold',
    style: 'Bold',
  },
  {
    family: 'Thonburi',
    fullName: 'Thonburi',
    style: 'Regular',
  },
  {
    family: 'Thonburi',
    fullName: 'Thonburi Bold',
    style: 'Bold',
  },
  {
    family: 'Thonburi',
    fullName: 'Thonburi Light',
    style: 'Light',
  },
  {
    family: 'Times New Roman',
    fullName: 'Times New Roman Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Times New Roman',
    fullName: 'Times New Roman Bold',
    style: 'Bold',
  },
  {
    family: 'Times New Roman',
    fullName: 'Times New Roman Italic',
    style: 'Italic',
  },
  {
    family: 'Times New Roman',
    fullName: 'Times New Roman',
    style: 'Regular',
  },
  {
    family: 'Toppan Bunkyu Gothic',
    fullName: 'Toppan Bunkyu Gothic Demibold',
    style: 'Demibold',
  },
  {
    family: 'Toppan Bunkyu Gothic',
    fullName: 'Toppan Bunkyu Gothic Regular',
    style: 'Regular',
  },
  {
    family: 'Toppan Bunkyu Midashi Gothic',
    fullName: 'Toppan Bunkyu Midashi Gothic Extrabold',
    style: 'Extrabold',
  },
  {
    family: 'Toppan Bunkyu Midashi Mincho',
    fullName: 'Toppan Bunkyu Midashi Mincho Extrabold',
    style: 'Extrabold',
  },
  {
    family: 'Toppan Bunkyu Mincho',
    fullName: 'Toppan Bunkyu Mincho Regular',
    style: 'Regular',
  },
  {
    family: 'Trattatello',
    fullName: 'Trattatello',
    style: 'Regular',
  },
  {
    family: 'Trebuchet MS',
    fullName: 'Trebuchet MS Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Trebuchet MS',
    fullName: 'Trebuchet MS',
    style: 'Regular',
  },
  {
    family: 'Trebuchet MS',
    fullName: 'Trebuchet MS Bold',
    style: 'Bold',
  },
  {
    family: 'Trebuchet MS',
    fullName: 'Trebuchet MS Italic',
    style: 'Italic',
  },
  {
    family: 'Tsukushi A Round Gothic',
    fullName: 'Tsukushi A Round Gothic Bold',
    style: 'Bold',
  },
  {
    family: 'Tsukushi A Round Gothic',
    fullName: 'Tsukushi A Round Gothic Regular',
    style: 'Regular',
  },
  {
    family: 'Tsukushi B Round Gothic',
    fullName: 'Tsukushi B Round Gothic Bold',
    style: 'Bold',
  },
  {
    family: 'Tsukushi B Round Gothic',
    fullName: 'Tsukushi B Round Gothic Regula',
    style: 'Regular',
  },
  {
    family: 'Ubuntu Mono',
    fullName: 'Ubuntu Mono Bold',
    style: 'Bold',
  },
  {
    family: 'Ubuntu Mono',
    fullName: 'Ubuntu Mono Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Ubuntu Mono',
    fullName: 'Ubuntu Mono Italic',
    style: 'Italic',
  },
  {
    family: 'Ubuntu Mono',
    fullName: 'Ubuntu Mono',
    style: 'Regular',
  },
  {
    family: 'Verdana',
    fullName: 'Verdana',
    style: 'Regular',
  },
  {
    family: 'Verdana',
    fullName: 'Verdana Bold',
    style: 'Bold',
  },
  {
    family: 'Verdana',
    fullName: 'Verdana Bold Italic',
    style: 'Bold Italic',
  },
  {
    family: 'Verdana',
    fullName: 'Verdana Italic',
    style: 'Italic',
  },
  {
    family: 'Waseem',
    fullName: 'Waseem Regular',
    style: 'Regular',
  },
  {
    family: 'Waseem',
    fullName: 'Waseem Light',
    style: 'Light',
  },
  {
    family: 'Webdings',
    fullName: 'Webdings',
    style: 'Regular',
  },
  {
    family: 'Weibei SC',
    fullName: '魏碑-简 粗体',
    style: 'Bold',
  },
  {
    family: 'Weibei TC',
    fullName: '魏碑-繁 粗体',
    style: 'Bold',
  },
  {
    family: 'Wingdings',
    fullName: 'Wingdings',
    style: 'Regular',
  },
  {
    family: 'Wingdings 2',
    fullName: 'Wingdings 2',
    style: 'Regular',
  },
  {
    family: 'Wingdings 3',
    fullName: 'Wingdings 3',
    style: 'Regular',
  },
  {
    family: 'YuGothic',
    fullName: 'YuGothic Bold',
    style: 'Bold',
  },
  {
    family: 'YuGothic',
    fullName: 'YuGothic Medium',
    style: 'Medium',
  },
  {
    family: 'YuKyokasho',
    fullName: 'YuKyokasho Bold',
    style: 'Bold',
  },
  {
    family: 'YuKyokasho',
    fullName: 'YuKyokasho Medium',
    style: 'Medium',
  },
  {
    family: 'YuKyokasho Yoko',
    fullName: 'YuKyokasho Yoko Bold',
    style: 'Bold',
  },
  {
    family: 'YuKyokasho Yoko',
    fullName: 'YuKyokasho Yoko Medium',
    style: 'Medium',
  },
  {
    family: 'YuMincho',
    fullName: 'YuMincho Demibold',
    style: 'Demibold',
  },
  {
    family: 'YuMincho',
    fullName: 'YuMincho Extrabold',
    style: 'Extrabold',
  },
  {
    family: 'YuMincho',
    fullName: 'YuMincho Medium',
    style: 'Medium',
  },
  {
    family: 'YuMincho +36p Kana',
    fullName: 'YuMincho +36p Kana Demibold',
    style: 'Demibold',
  },
  {
    family: 'YuMincho +36p Kana',
    fullName: 'YuMincho +36p Kana Extrabold',
    style: 'Extrabold',
  },
  {
    family: 'YuMincho +36p Kana',
    fullName: 'YuMincho +36p Kana Medium',
    style: 'Medium',
  },
  {
    family: 'Yuppy SC',
    fullName: '雅痞-简 常规体',
    style: 'Regular',
  },
  {
    family: 'Yuppy TC',
    fullName: '雅痞-繁 常规体',
    style: 'Regular',
  },
  {
    family: 'Zapf Dingbats',
    fullName: 'Zapf Dingbats',
    style: 'Regular',
  },
  {
    family: 'Zapfino',
    fullName: 'Zapfino',
    style: 'Regular',
  },
];
