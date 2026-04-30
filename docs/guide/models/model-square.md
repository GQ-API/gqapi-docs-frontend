# 模型广场

GQ API 聚合了全球主流 AI 模型，通过统一接口即可调用。

## Claude 系列

| 模型 | 上下文窗口 | 输出限制 | 特点 |
|------|-----------|----------|------|
| Claude Opus 4 | 200K | 32K | 最强综合能力 |
| Claude Sonnet 4 | 200K | 64K | 性能与速度平衡 |
| Claude Haiku 4 | 200K | 64K | 快速响应，成本最低 |

## GPT 系列

| 模型 | 上下文窗口 | 输出限制 | 特点 |
|------|-----------|----------|------|
| GPT-4o | 128K | 16K | 多模态旗舰 |
| GPT-4o Mini | 128K | 16K | 高性价比 |
| o3-mini | 200K | 100K | 强推理能力 |
| o4-mini | 200K | 100K | 最新高性能 |

## Gemini 系列

| 模型 | 上下文窗口 | 特点 |
|------|-----------|------|
| Gemini 2.5 Pro | 1M+ | 超长上下文推理 |
| Gemini 2.5 Flash | 1M+ | 快速多模态 |
| Gemini 2.0 Flash | 1M+ | 实时交互优化 |

## DeepSeek 系列

| 模型 | 特点 |
|------|------|
| DeepSeek V3 | 开源最强 MoE 模型 |
| DeepSeek R1 | 推理链能力强 |

## 其他模型

- **Qwen（通义千问）**：阿里开源大模型
- **GLM（智谱）**：中文理解优秀
- **Mistral**：欧洲开源代表
- **Llama**：Meta 开源系列

## 模型选择建议

::: tip 选择指南
- **代码生成** → Claude Sonnet 4 / GPT-4o
- **长文档处理** → Gemini 2.5 Pro
- **快速问答** → Claude Haiku 4 / GPT-4o Mini
- **复杂推理** → o3-mini / DeepSeek R1
- **中文场景** → Qwen / GLM
:::

## 价格参考

所有模型均按 Token 计费，具体价格请查看控制台的[定价页面](https://api.gqchat.cn/console/pricing)。
