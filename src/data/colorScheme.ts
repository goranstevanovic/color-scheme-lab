export type ColorScheme = {
  mode: string;
  count: string;
  colors: Seed[];
  seed: Seed;
  image: Image;
  _links: ColorSchemeLinks;
  _embedded: Embedded;
};

export type Embedded = {};

export type ColorSchemeLinks = {
  self: string;
  schemes: Schemes;
};

export type Schemes = {
  monochrome: string;
  'monochrome-dark': string;
  'monochrome-light': string;
  analogic: string;
  complement: string;
  'analogic-complement': string;
  triad: string;
  quad: string;
};

export type Seed = {
  hex: Hex;
  rgb: Rgb;
  hsl: Hsl;
  hsv: Hsv;
  name: Name;
  cmyk: Cmyk;
  XYZ: Xyz;
  image: Image;
  contrast: Contrast;
  _links: SeedLinks;
  _embedded: Embedded;
};

export type Xyz = {
  fraction: XYZFraction;
  value: string;
  X: number;
  Y: number;
  Z: number;
};

export type XYZFraction = {
  X: number;
  Y: number;
  Z: number;
};

export type SeedLinks = {
  self: Self;
};

export type Self = {
  href: string;
};

export type Cmyk = {
  fraction: CmykFraction;
  value: string;
  c: number;
  m: number;
  y: number;
  k: number;
};

export type CmykFraction = {
  c: number;
  m: number;
  y: number;
  k: number;
};

export type Contrast = {
  value: string;
};

export type Hex = {
  value: string;
  clean: string;
};

export type Hsl = {
  fraction: HslFraction;
  h: number;
  s: number;
  l: number;
  value: string;
};

export type HslFraction = {
  h: number;
  s: number;
  l: number;
};

export type Hsv = {
  fraction: HsvFraction;
  value: string;
  h: number;
  s: number;
  v: number;
};

export type HsvFraction = {
  h: number;
  s: number;
  v: number;
};

export type Image = {
  bare: string;
  named: string;
};

export type Name = {
  value: string;
  closest_named_hex: string;
  exact_match_name: boolean;
  distance: number;
};

export type Rgb = {
  fraction: RgbFraction;
  r: number;
  g: number;
  b: number;
  value: string;
};

export type RgbFraction = {
  r: number;
  g: number;
  b: number;
};

const colorSchemeSample = {
  mode: 'monochrome',
  count: '4',
  colors: [
    {
      hex: { value: '#0B528A', clean: '0B528A' },
      rgb: {
        fraction: {
          r: 0.043137254901960784,
          g: 0.3215686274509804,
          b: 0.5411764705882353,
        },
        r: 11,
        g: 82,
        b: 138,
        value: 'rgb(11, 82, 138)',
      },
      hsl: {
        fraction: {
          h: 0.5734908136482939,
          s: 0.8523489932885906,
          l: 0.292156862745098,
        },
        h: 206,
        s: 85,
        l: 29,
        value: 'hsl(206, 85%, 29%)',
      },
      hsv: {
        fraction: {
          h: 0.5734908136482939,
          s: 0.9202898550724637,
          v: 0.5411764705882353,
        },
        value: 'hsv(206, 92%, 54%)',
        h: 206,
        s: 92,
        v: 54,
      },
      name: {
        value: 'Venice Blue',
        closest_named_hex: '#055989',
        exact_match_name: false,
        distance: 936,
      },
      cmyk: {
        fraction: {
          c: 0.9202898550724639,
          m: 0.4057971014492754,
          y: 0,
          k: 0.45882352941176474,
        },
        value: 'cmyk(92, 41, 0, 46)',
        c: 92,
        m: 41,
        y: 0,
        k: 46,
      },
      XYZ: {
        fraction: {
          X: 0.23046509803921567,
          Y: 0.2782298039215686,
          Z: 0.5535517647058823,
        },
        value: 'XYZ(23, 28, 55)',
        X: 23,
        Y: 28,
        Z: 55,
      },
      image: {
        bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=0B528A',
        named: 'https://www.thecolorapi.com/id?format=svg&hex=0B528A',
      },
      contrast: { value: '#ffffff' },
      _links: { self: { href: '/id?hex=0B528A' } },
      _embedded: {},
    },
    {
      hex: { value: '#0E75C6', clean: '0E75C6' },
      rgb: {
        fraction: {
          r: 0.054901960784313725,
          g: 0.4588235294117647,
          b: 0.7764705882352941,
        },
        r: 14,
        g: 117,
        b: 198,
        value: 'rgb(14, 117, 198)',
      },
      hsl: {
        fraction: {
          h: 0.5733695652173911,
          s: 0.8679245283018867,
          l: 0.41568627450980394,
        },
        h: 206,
        s: 87,
        l: 42,
        value: 'hsl(206, 87%, 42%)',
      },
      hsv: {
        fraction: {
          h: 0.5733695652173911,
          s: 0.9292929292929293,
          v: 0.7764705882352941,
        },
        value: 'hsv(206, 93%, 78%)',
        h: 206,
        s: 93,
        v: 78,
      },
      name: {
        value: 'Green Blue',
        closest_named_hex: '#1164B4',
        exact_match_name: false,
        distance: 1000,
      },
      cmyk: {
        fraction: {
          c: 0.9292929292929293,
          m: 0.4090909090909092,
          y: 0,
          k: 0.22352941176470587,
        },
        value: 'cmyk(93, 41, 0, 22)',
        c: 93,
        m: 41,
        y: 0,
        k: 22,
      },
      XYZ: {
        fraction: {
          X: 0.3268698039215686,
          Y: 0.3958839215686274,
          Z: 0.7937866666666668,
        },
        value: 'XYZ(33, 40, 79)',
        X: 33,
        Y: 40,
        Z: 79,
      },
      image: {
        bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=0E75C6',
        named: 'https://www.thecolorapi.com/id?format=svg&hex=0E75C6',
      },
      contrast: { value: '#ffffff' },
      _links: { self: { href: '/id?hex=0E75C6' } },
      _embedded: {},
    },
    {
      hex: { value: '#2396F1', clean: '2396F1' },
      rgb: {
        fraction: {
          r: 0.13725490196078433,
          g: 0.5882352941176471,
          b: 0.9450980392156862,
        },
        r: 35,
        g: 150,
        b: 241,
        value: 'rgb(35, 150, 241)',
      },
      hsl: {
        fraction: {
          h: 0.5736245954692557,
          s: 0.8803418803418803,
          l: 0.5411764705882353,
        },
        h: 207,
        s: 88,
        l: 54,
        value: 'hsl(207, 88%, 54%)',
      },
      hsv: {
        fraction: {
          h: 0.5736245954692557,
          s: 0.8547717842323652,
          v: 0.9450980392156862,
        },
        value: 'hsv(207, 85%, 95%)',
        h: 207,
        s: 85,
        v: 95,
      },
      name: {
        value: 'Dodger Blue',
        closest_named_hex: '#1E90FF',
        exact_match_name: false,
        distance: 2219,
      },
      cmyk: {
        fraction: {
          c: 0.8547717842323652,
          m: 0.37759336099585056,
          y: 0,
          k: 0.05490196078431375,
        },
        value: 'cmyk(85, 38, 0, 5)',
        c: 85,
        m: 38,
        y: 0,
        k: 5,
      },
      XYZ: {
        fraction: {
          X: 0.4375470588235294,
          Y: 0.5181223529411765,
          Z: 0.9710823529411764,
        },
        value: 'XYZ(44, 52, 97)',
        X: 44,
        Y: 52,
        Z: 97,
      },
      image: {
        bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=2396F1',
        named: 'https://www.thecolorapi.com/id?format=svg&hex=2396F1',
      },
      contrast: { value: '#000000' },
      _links: { self: { href: '/id?hex=2396F1' } },
      _embedded: {},
    },
    {
      hex: { value: '#5EB3F6', clean: '5EB3F6' },
      rgb: {
        fraction: {
          r: 0.3686274509803922,
          g: 0.7019607843137254,
          b: 0.9647058823529412,
        },
        r: 94,
        g: 179,
        b: 246,
        value: 'rgb(94, 179, 246)',
      },
      hsl: {
        fraction: {
          h: 0.5734649122807017,
          s: 0.8941176470588237,
          l: 0.6666666666666667,
        },
        h: 206,
        s: 89,
        l: 67,
        value: 'hsl(206, 89%, 67%)',
      },
      hsv: {
        fraction: {
          h: 0.5734649122807017,
          s: 0.6178861788617886,
          v: 0.9647058823529412,
        },
        value: 'hsv(206, 62%, 96%)',
        h: 206,
        s: 62,
        v: 96,
      },
      name: {
        value: 'Blue Jeans',
        closest_named_hex: '#5DADEC',
        exact_match_name: false,
        distance: 1667,
      },
      cmyk: {
        fraction: {
          c: 0.6178861788617886,
          m: 0.2723577235772358,
          y: 0,
          k: 0.03529411764705881,
        },
        value: 'cmyk(62, 27, 0, 4)',
        c: 62,
        m: 27,
        y: 0,
        k: 4,
      },
      XYZ: {
        fraction: {
          X: 0.5771725490196078,
          Y: 0.65006431372549,
          Z: 1.0077411764705884,
        },
        value: 'XYZ(58, 65, 101)',
        X: 58,
        Y: 65,
        Z: 101,
      },
      image: {
        bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=5EB3F6',
        named: 'https://www.thecolorapi.com/id?format=svg&hex=5EB3F6',
      },
      contrast: { value: '#000000' },
      _links: { self: { href: '/id?hex=5EB3F6' } },
      _embedded: {},
    },
  ],
  seed: {
    hex: { value: '#2196F3', clean: '2196F3' },
    rgb: {
      fraction: {
        r: 0.12941176470588237,
        g: 0.5882352941176471,
        b: 0.9529411764705882,
      },
      r: 33,
      g: 150,
      b: 243,
      value: 'rgb(33, 150, 243)',
    },
    hsl: {
      fraction: {
        h: 0.5738095238095239,
        s: 0.8974358974358974,
        l: 0.5411764705882353,
      },
      h: 207,
      s: 90,
      l: 54,
      value: 'hsl(207, 90%, 54%)',
    },
    hsv: {
      fraction: {
        h: 0.5738095238095239,
        s: 0.8641975308641976,
        v: 0.9529411764705882,
      },
      value: 'hsv(207, 86%, 95%)',
      h: 207,
      s: 86,
      v: 95,
    },
    name: {
      value: 'Dodger Blue',
      closest_named_hex: '#1E90FF',
      exact_match_name: false,
      distance: 1687,
    },
    cmyk: {
      fraction: {
        c: 0.8641975308641976,
        m: 0.382716049382716,
        y: 0,
        k: 0.04705882352941182,
      },
      value: 'cmyk(86, 38, 0, 5)',
      c: 86,
      m: 38,
      y: 0,
      k: 5,
    },
    XYZ: {
      fraction: {
        X: 0.43572823529411764,
        Y: 0.5170211764705882,
        Z: 0.9783858823529412,
      },
      value: 'XYZ(44, 52, 98)',
      X: 44,
      Y: 52,
      Z: 98,
    },
    image: {
      bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=2196F3',
      named: 'https://www.thecolorapi.com/id?format=svg&hex=2196F3',
    },
    contrast: { value: '#000000' },
    _links: { self: { href: '/id?hex=2196F3' } },
    _embedded: {},
  },
  image: {
    bare: 'https://www.thecolorapi.com/scheme?format=svg&named=false&hex=2196F3&mode=monochrome&count=4',
    named:
      'https://www.thecolorapi.com/scheme?format=svg&hex=2196F3&mode=monochrome&count=4',
  },
  _links: {
    self: '/scheme?hex=2196F3&mode=monochrome&count=4',
    schemes: {
      monochrome: '/scheme?hex=2196F3&mode=monochrome&count=4',
      'monochrome-dark': '/scheme?hex=2196F3&mode=monochrome-dark&count=4',
      'monochrome-light': '/scheme?hex=2196F3&mode=monochrome-light&count=4',
      analogic: '/scheme?hex=2196F3&mode=analogic&count=4',
      complement: '/scheme?hex=2196F3&mode=complement&count=4',
      'analogic-complement':
        '/scheme?hex=2196F3&mode=analogic-complement&count=4',
      triad: '/scheme?hex=2196F3&mode=triad&count=4',
      quad: '/scheme?hex=2196F3&mode=quad&count=4',
    },
  },
  _embedded: {},
};

export { colorSchemeSample };
