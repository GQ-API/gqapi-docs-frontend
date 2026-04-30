# 环境检查（通用步骤）

在使用任何 AI CLI 工具之前，请先完成以下环境检查，确保基础环境就绪。

## 1. 检查 Node.js 版本

```bash
node --version
```

推荐使用 **Node.js >= 18** 的 LTS 版本。如需安装或升级，请访问 [Node.js 官网](https://nodejs.org/)。

## 2. 检查包管理器

确保您已安装 npm、yarn 或 pnpm：

```bash
npm --version
# 或
yarn --version
# 或
pnpm --version
```

## 3. 检查网络连通性

验证是否能访问 GQ API 服务：

```bash
curl -I https://api.gqchat.cn
```

如果网络受限，可能需要配置代理：

```bash
export HTTPS_PROXY=http://127.0.0.1:7890
export HTTP_PROXY=http://127.0.0.1:7890
```

## 4. 安装 AI 工具

根据您的需求安装对应的 CLI 工具：

### Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

### OpenAI Codex

```bash
npm install -g @openai/codex
```

### Gemini CLI

```bash
npm install -g @google/gemini-cli
```

## 5. 验证安装

```bash
claude --version
# 或
codex --version
# 或
gemini --version
```

## 环境变量配置

为了安全地使用 API Key，建议将其设置为环境变量：

::: code-group

```bash [Linux / macOS]
export ANTHROPIC_API_KEY="your-gq-api-key"
export OPENAI_API_KEY="your-gq-api-key"
export GEMINI_API_KEY="your-gq-api-key"
```

```powershell [Windows PowerShell]
$env:ANTHROPIC_API_KEY="your-gq-api-key"
$env:OPENAI_API_KEY="your-gq-api-key"
$env:GEMINI_API_KEY="your-gq-api-key"
```

:::

::: tip 持久化环境变量
将上述命令添加到 shell 配置文件中（如 `.bashrc`、`.zshrc` 或 PowerShell Profile），避免每次重启后重新设置。
:::

## 下一步

完成环境检查后，请继续阅读对应工具的配置指南：

- [Claude Code 配置](/guide/cli/claude-code)
- [Codex 配置](/guide/cli/codex)
- [Gemini CLI 配置](/guide/cli/gemini-cli)
