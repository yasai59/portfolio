// astro.config.ts
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import rehypeSlug from 'rehype-slug'
import rehypeToc from 'rehype-toc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'
import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerMetaHighlight,
  transformerNotationWordHighlight,
  transformerNotationErrorLevel,
  transformerNotationHighlight,
  transformerMetaWordHighlight,
} from '@shikijs/transformers'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'tokyo-night',
      transformers: [
        transformerNotationDiff(),
        transformerNotationWordHighlight(),
        transformerNotationHighlight(),
        transformerMetaWordHighlight(),
        transformerNotationFocus(),
        transformerMetaHighlight(),
        transformerNotationErrorLevel(),
      ],
    },
    remarkPlugins: [],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeToc, {
          headings: ['h2', 'h3'],
          cssClasses: { list: 'toc-list', link: 'toc-link' },
        }
      ],
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    ],
  },
  integrations: [icon(), mdx()],
})
