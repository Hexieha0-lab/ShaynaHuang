/** @type {import('next').NextConfig} */

// 你的 GitHub 用户名
const repo = 'shaynahuang.github.io'

// 只在 GitHub Pages 构建时启用（本地 dev 不受影响）
const isGithubPages = process.env.GITHUB_ACTIONS === 'true'

// 关键修改：对于 .github.io 仓库，basePath 始终为空
const basePath = ''  // 不要加 /repo，因为访问地址是根域名

const nextConfig = {
  // 如果有 basePath，这里取消注释；否则可以删掉这两行
  // basePath,
  // assetPrefix: basePath || undefined,

  // GitHub Pages 只能托管静态文件，需要静态导出
  output: 'export',

  // 静态导出时 next/image 需要关闭优化
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
