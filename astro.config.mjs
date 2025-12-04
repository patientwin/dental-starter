import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({ config: './tailwind.config.js' })],
  site: 'https://www.example-dental.com', // TODO: replace with actual site URL
});
