# OpenClaw 配置

OpenClaw 是一个强大的 AI 工具集成平台，支持连接多种 AI 服务。

## 安装 OpenClaw

```bash
npm install -g openclaw
# 或
brew install openclaw
```

## 配置 GQ API 作为后端

### 步骤一：初始化配置

```bash
openclaw init
```

### 步骤二：编辑配置文件

打开生成的 `~/.openclaw/config.yaml`：

```yaml
providers:
  gq-api:
    name: GQ API
    base_url: https://api.gqchat.cn/v1
    api_key: ${GQ_API_KEY}
    models:
      - claude-sonnet-4
      - gpt-4o
      - gemini-2.5-pro

default_provider: gq-api
default_model: claude-sonnet-4
```

### 步骤三：设置环境变量

```bash
export GQ_API_KEY="sk-your-api-key"
```

## 使用方式

### 交互式对话

```bash
openclaw chat
```

### 工具调用模式

OpenClaw 支持让 AI 调用外部工具：

```bash
openclaw run --tools "web_search,file_write,code_exec" "帮我调研 Vue3 最新特性并写入文件"
```

### 工作流自动化

创建工作流文件 `workflow.yaml`：

```yaml
name: code-review
steps:
  - name: analyze
    model: claude-sonnet-4
    prompt: "分析以下代码的质量和潜在问题"
    input: "${git_diff}"
  
  - name: suggest
    model: gpt-4o
    prompt: "基于分析结果给出改进建议"
    depends_on: [analyze]
```

运行工作流：

```bash
openclaw workflow run workflow.yaml
```

## 多模型协作

OpenClaw 支持在单个会话中切换模型：

```bash
openclaw chat --multi-model
```

在对话中使用 `/model <name>` 切换当前模型。
