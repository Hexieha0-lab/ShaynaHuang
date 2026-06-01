/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 主题色系：雪青/淡紫基调
        background: '#EEF1FF', // 主背景：柔和浅雪青/淡紫
        card: '#FFFFFF', // 内容卡片：纯白
        text: '#111827', // 基础文本：近黑深灰
        accent: {
          DEFAULT: '#6C63FF', // 强调/主题色：适中饱和雪青/深紫
          dark: '#564EE6',
          light: '#8B84FF',
        },
      },
      boxShadow: {
        soft: '0 8px 24px rgba(108, 99, 255, 0.08), 0 2px 8px rgba(17, 24, 39, 0.06)',
        card: '0 10px 25px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        xl: '16px',
        '2xl': '20px',
        '3xl': '28px',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 700ms soft both',
      },
    },
  },
  plugins: [],
}
