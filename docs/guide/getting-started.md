# 快速开始

欢迎使用 GQ API！本指南将帮助您快速上手使用我们的统一 AI API 网关服务。

## 1. 注册账号

### 1.1 github 注册账号
1. 已有 github 账号，直接登录即可。（需要你的网络支持，国内github有时候会比较慢）
2. 没有 github 账号，需要先注册一个。
3. 注册完成后，登录 github 账号。

![ github 账号 注册](/pictures/register/register-0.png)

### 1.2 用户名 注册账号
1. 访问 https://api.gqchat.cn/register 开始注册。
2. 输入您的用户名
3. 设置密码（最短8位，最长20位）
4. 输入邮箱地址，点击"获取验证码"
5. 输入验证码
5. 勾选"我已阅读并同意用户协议和隐私政策"
6. 点击"注册"按钮

![ 用户名 账号 注册](/pictures/register/register-1.png)

::: tip 温馨提示
请妥善保管您的登录凭证，避免账号被盗用。建议使用强密码。
:::

## 2. 登录账号
### github 账号登录

1. 点击"使用 github 账号登录"按钮。
2. 登录 github 账号。

![ github 账号 登录](/pictures/login/login-0.png)


### 用户名账号登录
1. 访问 https://api.gqchat.cn/login 进行登录。
2. 输入注册时使用的用户名或邮箱
3. 输入密码
4. 点击"继续"按钮
![  用户名密码 登录](/pictures/login/login-1.png)
![  用户名密码 登录](/pictures/login/login-2.png)

## 3.充值额度
GQ API 使用预付费额度系统，以人民币（CNY）计价。
![ 钱包管理](/pictures/wallet/wallet-0.png)
登录后，点击左侧菜单的"钱包管理"，或访问 https://api.gqchat.cn/console/topup。

- 额度以 人民币（CNY） 计价
- 不同模型的调用费用不同，详见 模型广场
- 额度用完后 API 将停止响应，请及时充值
- 可在控制台首页查看当前余额和历史消耗

::: tip 费用透明
每次 API 调用的费用会实时记录在使用日志中，您可以随时查看详细的消费记录
:::

## 4. 创建 API 令牌
API 令牌（Token）是您调用 GQ API 的凭证。

登录后，点击左侧菜单的"令牌管理"，或访问 https://api.gqchat.cn/console/token。

1. 点击页面右上角的"添加令牌"按钮
2. 填写令牌名称（例如：claude-code、codex 等）
3. 选择令牌分组（不同分组可访问不同模型，详见 令牌分组介绍）
4. 设置额度限制（可选，留空表示不限制）
5. 设置过期时间（可选）
6. 点击"提交"创建令牌
![ api 令牌创建](/pictures/wallet/wallet-0.png)

令牌格式为 sk- 开头的字符串，与 OpenAI API Key 格式兼容。

::: warning 安全警告
- 创建成功后，立即复制并妥善保存令牌，令牌仅在创建时完整显示一次
- 不要将令牌分享给他人或提交到公开代码仓库
- 如果令牌泄露，请立即在控制台删除并重新创建
- 建议为不同用途创建不同的令牌，方便管理和追踪
:::

::: warning 安全提示
请勿将 API Key 暴露在公开的代码仓库或客户端代码中。建议通过环境变量或密钥管理服务存储。
:::


## 5. 配置 CLI 工具
Clauddy 兼容 OpenAI API 格式，可以直接对接各种 AI CLI 工具。

//需要表格展示
| 工具 | 说明 | 配置指南 |
|------|------|----------|
| Claude Code | Anthropic 官方编程助手 | [Claude Code 配置](/guide/cli/claude-code) |
| OpenAI Codex | OpenAI 编程助手 CLI	 | [Codex 配置](/guide/cli/codex) |
| Gemini CLI | Google Gemini 命令行工具	 | [Gemini CLI 配置](/guide/cli/gemini-cli) |


::: tip 一个令牌多个工具
如果您的令牌分组包含所需的所有模型，可以用同一个令牌配置多个工具。但建议为不同工具创建独立令牌，便于用量追踪。
:::

#### 通用步骤：

1. 确保开发环境满足要求 → 环境检查
2. 在 Clauddy 创建对应分组的 API 令牌（见上方第4步）
3. 按照各工具的配置教程设置环境变量或配置文件
4. 测试连接是否成功


## 前置条件

在开始之前，请确保您具备以下条件：

- 已注册 GQ API 账户
- 已获取 API 密钥（API Key）
- 基本的命令行操作能力



## 验证连接

您可以使用 `curl` 快速验证 API 连接是否正常：

```bash
curl https://api.gqchat.cn/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "claude-sonnet-4-20250514",
    "messages": [{"role": "user", "content": "Hello!"}],
    "max_tokens": 100
  }'
```

如果返回正常的 JSON 响应，说明您的配置已就绪。


## 常见问题

<details>
<summary>API 调用返回 401 错误？</summary>

请检查：
- API Key 是否正确复制（注意前后空格）
- API Key 是否已激活
- 账户余额是否充足

</details>

<details>
<summary>如何查看调用用量？</summary>

登录控制台后，进入 **用量统计** 页面即可查看详细的调用记录和费用明细。

</details>

<details>
<summary>为什么你们价格能这么低？</summary>

GQ API 提供了低成本的 AI 模型服务，以满足不同场景的需求。我们与相关供应商深度合作，能够以较低的成本获取 AI 模型服务，同时确保服务的稳定性和可靠性。
</details>
