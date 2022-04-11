import { defineConfig } from 'astro/config';

export default defineConfig({
  markdown: {
    render: [
      {
        shikiConfig: {
          theme: 'monokai',
        },
      },
    ],
  },
})
