type colorHarmonyRuleDescriptionsType = {
  [key: string]: string;
  analogic: string;
  monochrome: string;
  triad: string;
  complement: string;
  'analogic-complement': string;
  quad: string;
};

const colorHarmonyRuleDescriptions: colorHarmonyRuleDescriptionsType = {
  analogic:
    'This color scheme creates a sense of harmony and unity, as the colors blend together seamlessly. It can convey a feeling of warmth and comfort. This scheme is best used when you want to create a peaceful, relaxing mood, such as in a bedroom or spa.',
  monochrome:
    'This color scheme creates a sense of simplicity and elegance, as it uses different shades and tints of the same color. It can convey a feeling of calm and sophistication. This scheme is best used when you want to create a minimalist, modern design, such as in tech products or graphic design.',
  triad:
    "This color scheme creates a sense of balance and variety, as the colors are evenly spaced around the color wheel. It can convey a feeling of playfulness and creativity. This scheme is best used when you want to create a fun, lighthearted design, such as in children's products or entertainment.",
  complement:
    'This color scheme creates contrast and tension, as the colors are opposite each other on the color wheel. It can convey a feeling of energy and excitement. This scheme is best used when you want to create a bold, attention-grabbing design, such as in advertising or branding.',
  'analogic-complement':
    'This color scheme combines the contrast of complementary colors with the harmony of analogous colors. It can convey a feeling of complexity and depth. This scheme is best used when you want to create a sophisticated, nuanced design, such as in fashion or interior design.',
  quad: 'This color scheme creates a sense of richness and complexity, as the colors are arranged into two complementary pairs. It can convey a feeling of elegance and luxury. This scheme is best used when you want to create a high-end, luxurious design, such as in jewelry or home decor.',
};

export default colorHarmonyRuleDescriptions;
