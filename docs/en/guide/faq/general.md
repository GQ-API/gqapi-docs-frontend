# General FAQ

## Account & Billing

### Q: How to register a GQ API account?

Visit [api.gqchat.cn](https://api.gqchat.cn/console) and click Register. Supports email registration and third-party OAuth.

### Q: Is there free credit?

New users receive free trial credits after registration for testing API features.

### Q: How to top up?

Log in → Recharge Center → Select payment method.

Supported methods:
- Alipay / WeChat Pay
- Credit Card (Visa/Mastercard)
- Cryptocurrency (USDT)

### Q: How is billing calculated?

Charged by actual **token consumption**:

> Cost = Input Tokens × Input Price + Output Tokens × Output Price

Different models have different rates. See [pricing page](https://api.gqchat.cn/console).

## API Usage

### Q: What's the API Base URL?

```
https://api.gqchat.cn/v1
```

### Q: Is streaming supported?

Yes. Set `"stream": true` for SSE streaming responses.

### Q: Are there rate limits?

Yes. Different plans have different RPM limits:
- Basic: 60 RPM
- Pro: 300 RPM
- Enterprise: Custom

### Q: What's the request timeout?

Default timeout is **180 seconds**. Streaming connections stay active.

## Security & Privacy

### Q: Is my data safe?

::: info Privacy Commitment
- We don't store your prompt content
- We don't use your data to train models
- All transmissions use TLS encryption
- GDPR compliant
:::

### Q: My API Key was leaked. What now?

Immediately **revoke** it in the console and create a new one:

Console → Token Management → Revoke → Create New Token

## Support

### Q: How to get support?

- **Documentation**: You're reading it right now!
- **Community**: Join our QQ group or Discord
- **Tickets**: Email support@gqchat.cn
- **GitHub Issues**: Report bugs or feature requests

### Q: What about SLA?

Enterprise users enjoy **99.9%** availability SLA guarantee.
