type colorHarmonyRulesType = {
  [key: string]: { description: string; colorQty: number };
  analogic: { description: string; colorQty: number };
  monochrome: { description: string; colorQty: number };
  triad: { description: string; colorQty: number };
  complement: { description: string; colorQty: number };
  'analogic-complement': { description: string; colorQty: number };
  quad: { description: string; colorQty: number };
};

const colorHarmonyRules: colorHarmonyRulesType = {
  analogic: {
    description:
      'This color scheme creates a sense of harmony and unity, as the colors blend together seamlessly. It can convey a feeling of warmth and comfort. This scheme is best used when you want to create a peaceful, relaxing mood, such as in a bedroom or spa.',
    colorQty: 5,
  },
  monochrome: {
    description:
      'This color scheme creates a sense of simplicity and elegance, as it uses different shades and tints of the same color. It can convey a feeling of calm and sophistication. This scheme is best used when you want to create a minimalist, modern design, such as in tech products or graphic design.',
    colorQty: 5,
  },
  triad: {
    description:
      "This color scheme creates a sense of balance and variety, as the colors are evenly spaced around the color wheel. It can convey a feeling of playfulness and creativity. This scheme is best used when you want to create a fun, lighthearted design, such as in children's products or entertainment.",
    colorQty: 3,
  },
  complement: {
    description:
      'This color scheme creates contrast and tension, as the colors are opposite each other on the color wheel. It can convey a feeling of energy and excitement. This scheme is best used when you want to create a bold, attention-grabbing design, such as in advertising or branding.',
    colorQty: 2,
  },
  'analogic-complement': {
    description:
      'This color scheme combines the contrast of complementary colors with the harmony of analogous colors. It can convey a feeling of complexity and depth. This scheme is best used when you want to create a sophisticated, nuanced design, such as in fashion or interior design.',
    colorQty: 3,
  },
  quad: {
    description:
      'This color scheme creates a sense of richness and complexity, as the colors are arranged into two complementary pairs. It can convey a feeling of elegance and luxury. This scheme is best used when you want to create a high-end, luxurious design, such as in jewelry or home decor.',
    colorQty: 4,
  },
};

export default colorHarmonyRules;
