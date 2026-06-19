# Gemini Nano

## 概要

Gemini Nano は、デバイス上でローカル実行される軽量AIモデルです。Pixel や Chrome ブラウザに組み込まれており、オフラインでも動作します。

## 特徴

- **オンデバイス処理** — データがクラウドに送信されないためプライバシーが高い
- **低レイテンシ** — ネットワーク不要で即座に応答
- **省電力** — モバイルデバイスに最適化

## 利用できる場所

| プラットフォーム | 機能例 |
|---|---|
| Pixel スマートフォン | 通話のスクリーニング、録音の要約 |
| Chrome ブラウザ | 内蔵AI（Prompt API） |
| Android アプリ | ML Kit 経由での利用 |

## Chrome での使い方（Prompt API）

```javascript
// Chrome 内蔵の Gemini Nano を利用
const session = await ai.languageModel.create();
const result = await session.prompt("これを要約して: ...");
console.log(result);
```

## ポイント

- 大規模な推論には向かない（軽量タスク向け）
- テキスト要約、分類、書き換えなどが得意
