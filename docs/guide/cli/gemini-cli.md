# Gemini CLI 配置

Google Gemini CLI 让您可以在终端中直接与 Gemini 模型交互。

## 安装 Gemini CLI

```bash
npm install -g @google/gemini-cli
```

## 配置方法

### 环境变量方式

```bash
export GEMINI_API_KEY="sk-your-gq-api-key"
export GEMINI_BASE_URL="https://api.gqchat.cn"
```

### 初始化配置

首次运行时会引导配置：

```bash
gemini
```

按提示输入自定义端点信息。

## 使用示例

### 基础对话

```bash
gemini "分析这个项目的架构"
```

### 上下文感知模式

```bash
gemini --context-aware "优化当前文件的性能"
```

### 多模态输入

```bash
gemini "描述这张图片的内容" screenshot.png
```

### 会话续接

```bash
gemini --continue
```

## 可用模型

| 模型 | 特点 |
|------|------|
| `gemini-2.5-pro` | 最强推理能力 |
| `gemini-2.5-flash` | 快速响应 |
| `gemini-2.0-flash` | 多模态支持 |

指定模型：

```bash
gemini --model gemini-2.5-pro "深入分析这个问题"
```

## 特色功能

### 代码执行

Gemini CLI 支持沙箱内执行生成的代码：

```bash
gemini --sandbox "运行并测试这个 Python 脚本"
```

### 文件操作

```bash
# 读取项目文件
gemini "@src/main.ts 解释入口逻辑"

# 写入修改
gemini "修复 TypeScript 类型错误" --edit
```
