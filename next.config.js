/** @type {import('next').NextConfig} */

// 改成你的 GitHub 仓库名
const repo = 'shaynahuang.github.io'

// 只在 GitHub Pages 构建时启用（本地 dev 不受影响）
const isGithubPages = process.env.GITHUB_ACTIONS === 'true'

const basePath = isGithubPages ? `/${repo}` : ''

const nextConfig = {
  basePath,
  assetPrefix: basePath || undefined,

  // GitHub Pages 只能托管静态文件，需要静态导出
  output: 'export',

  // 静态导出时 next/image 需要关闭优化
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
