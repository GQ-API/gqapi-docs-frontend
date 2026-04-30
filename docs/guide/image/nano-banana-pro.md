# Nano Banana Pro 绘图教程

Nano Banana Pro 是 GQ API 提供的高质量图像生成模型。

## 基础用法

### API 调用

```bash
curl -X POST "https://api.gqchat.cn/v1/images/generations" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-your-api-key" \
  -d '{
    "model": "nano-banana-pro",
    "prompt": "一只可爱的橘猫坐在窗台上，阳光洒落，写实风格",
    "n": 1,
    "size": "1024x1024"
  }'
```

### Python 示例

```python
from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="https://api.gqchat.cn/v1"
)

response = client.images.generate(
    model="nano-banana-pro",
    prompt="赛博朋克风格的未来城市夜景",
    size="1024x1024",
    n=1
)

image_url = response.data[0].url
print(f"生成的图片地址: {image_url}")
```

## 支持的尺寸

| 尺寸 | 用途 |
|------|------|
| `512x512` | 头像、图标 |
| `768x768` | 社交媒体配图 |
| `1024x1024` | 标准输出（推荐） |
| `1024x1792` | 竖版海报 |
| `1792x1024` | 横版封面 |

## 提示词技巧

### 正面提示词结构

```
[主体] + [动作/状态] + [风格] + [光影] + [细节]
```

示例：
> 一只金毛犬在樱花树下奔跑 + 动态模糊 + 吉卜力动画风格 + 柔和午后光线 + 毛发细节丰富

### 风格关键词

| 风格 | 关键词 |
|------|--------|
| 写实摄影 | `photorealistic`, `8k`, `DSLR` |
| 动漫 | `anime style`, `studio ghibli`, `makoto shinkai` |
| 油画 | `oil painting`, `impressionist`, `van gogh style` |
| 3D 渲染 | `3d render`, `octane render`, `unreal engine` |
| 像素风 | `pixel art`, `16-bit`, `retro game` |

### 负面提示词

可以通过负面提示词排除不想要的元素：

```json
{
  "negative_prompt": "blurry, low quality, distorted, watermark, text, ugly face"
}
```

## 高级参数

| 参数 | 类型 | 说明 |
|------|------|------|
| `seed` | int | 固定随机种子以复现结果 |
| `steps` | int | 采样步数 (20-50) |
| `cfg_scale` | float | 提示词 adherence (7-12) |

### 固定种子复现

```python
response = client.images.generate(
    model="nano-banana-pro",
    prompt="日落海滩",
    size="1024x1024",
    seed=42,
    n=1
)
```
