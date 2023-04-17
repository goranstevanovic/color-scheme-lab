type colorHarmonyRulesType = {
  [key: string]: { description: string; colorQty: number; title: string };
  analogic: { description: string; colorQty: number; title: string };
  monochrome: { description: string; colorQty: number; title: string };
  triad: { description: string; colorQty: number; title: string };
  complement: { description: string; colorQty: number; title: string };
  'analogic-complement': {
    description: string;
    colorQty: number;
    title: string;
  };
  quad: { description: string; colorQty: number; title: string };
};

const colorHarmonyRules: colorHarmonyRulesType = {
  analogic: {
    description:
      'This color scheme creates a sense of harmony and unity, as the colors blend together seamlessly. It can convey a feeling of warmth and comfort. This scheme is best used when you want to create a peaceful, relaxing mood, such as in a bedroom or spa.',
    colorQty: 5,
    title: 'Analogous',
  },
  monochrome: {
    description:
      'This color scheme creates a sense of simplicity and elegance, as it uses different shades and tints of the same color. It can convey a feeling of calm and sophistication. This scheme is best used when you want to create a minimalist, modern design, such as in tech products or graphic design.',
    colorQty: 5,
    title: 'Monochromatic',
  },
  triad: {
    description:
      "This color scheme creates a sense of balance and variety, as the colors are evenly spaced around the color wheel. It can convey a feeling of playfulness and creativity. This scheme is best used when you want to create a fun, lighthearted design, such as in children's products or entertainment.",
    colorQty: 3,
    title: 'Triad',
  },
  complement: {
    description:
      'This color scheme creates contrast and tension, as the colors are opposite each other on the color wheel. It can convey a feeling of energy and excitement. This scheme is best used when you want to create a bold, attention-grabbing design, such as in advertising or branding.',
    colorQty: 2,
    title: 'Complementary',
  },
  'analogic-complement': {
    description:
      'This color scheme combines the contrast of complementary colors with the harmony of analogous colors. It can convey a feeling of complexity and depth. This scheme is best used when you want to create a sophisticated, nuanced design, such as in fashion or interior design.',
    colorQty: 3,
    title: 'Split Complementary',
  },
  quad: {
    description:
      'This color scheme creates a sense of richness and complexity, as the colors are arranged into two complementary pairs. It can convey a feeling of elegance and luxury. This scheme is best used when you want to create a high-end, luxurious design, such as in jewelry or home decor.',
    colorQty: 4,
    title: 'Square',
  },
};

export default colorHarmonyRules;
