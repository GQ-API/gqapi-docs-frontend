# 令牌分组介绍

令牌分组是 GQ API 的核心功能之一，允许您将不同的模型组织到不同的令牌下，实现精细化的访问控制。

## 什么是令牌分组？

每个 API 令牌可以关联一组**允许使用的模型**。这样您可以为不同场景创建专用令牌：

- **开发令牌**：仅允许使用低成本模型
- **生产令牌**：可使用所有稳定模型
- **测试令牌**：仅限实验性模型

## 创建分组

1. 登录 [GQ API 控制台](https://api.gqchat.cn/console)
2. 进入 **令牌管理**
3. 点击 **新建令牌**
4. 选择或创建**模型分组**
5. 设置权限和限额

## 分组配置示例

### 开发环境分组

```
允许模型：
- claude-haiku-4
- gpt-4o-mini
- gemini-2.5-flash

速率限制：60 RPM / 1000 RPD
预算上限：$50/月
```

### 生产环境分组

```
允许模型：
- claude-sonnet-4
- claude-opus-4
- gpt-4o
- gemini-2.5-pro

速率限制：500 RPM / 10000 RPD
预算上限：$500/月
```

## 使用方式

创建带分组的令牌后，正常使用即可：

```bash
curl https://api.gqchat.cn/v1/chat/completions \
  -H "Authorization: Bearer sk-grouped-token-xxx" \
  -d '{"model": "claude-sonnet-4", ...}'
```

如果请求的模型不在该令牌的分组中，API 将返回 `403 Forbidden` 错误。

## 最佳实践

::: warning 安全建议
- 为不同环境使用不同令牌
- 定期轮换生产环境的令牌
- 为每个团队成员分配独立令牌
- 设置合理的用量告警阈值
:::

## 相关链接

- [快速开始](/guide/getting-started) — 获取第一个 API Key
- [常见问题](/guide/faq/general) — 更多使用问题解答
