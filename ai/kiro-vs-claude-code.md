# Kiro CLI vs Claude Code CLI チートシート

## 基本操作

| 操作 | Kiro CLI | Claude Code |
|---|---|---|
| 起動 | `kiro` | `claude` |
| チャット開始 | `kiro chat` | `claude` (対話モード) |
| ワンショット実行 | `kiro chat -m "..."` | `claude -p "..."` |
| 非対話モード | `kiro chat -m "..." --no-interactive` | `claude -p "..."` |

## コンテキスト・ファイル

| 操作 | Kiro CLI | Claude Code |
|---|---|---|
| ファイル指定 | 会話中にパス参照 | 会話中にパス参照 |
| ディレクトリ指定 | `kiro chat --cwd <dir>` | `claude --cwd <dir>` |
| コンテキスト追加 | `/context` コマンド | 会話中に `@file` |

## セッション管理

| 操作 | Kiro CLI | Claude Code |
|---|---|---|
| セッション保存 | `/chat save` | `--resume` フラグ |
| セッション復元 | `/chat load` | `claude --resume` |
| 履歴一覧 | `/chat list` | `claude --history` |
| セッションクリア | `/chat clear` | `/clear` |

## モデル・設定

| 操作 | Kiro CLI | Claude Code |
|---|---|---|
| モデル選択 | `kiro chat --model <name>` | `claude --model <name>` |
| 設定確認 | `/config` | `/config` |
| ヘルプ | `kiro --help` | `claude --help` |

## 開発ワークフロー

| 操作 | Kiro CLI | Claude Code |
|---|---|---|
| コード生成 | 自然言語で指示 | 自然言語で指示 |
| ファイル編集 | 自動で編集提案・適用 | 自動で編集提案・適用 |
| コマンド実行 | ツール経由で自動実行 | ツール経由で自動実行 |
| Git操作 | 組み込みサポート | 組み込みサポート |
| AWS操作 | 組み込みAWSツール | MCP経由で拡張 |

## 主な違い

| 観点 | Kiro CLI | Claude Code |
|---|---|---|
| 提供元 | Amazon (AWS) | Anthropic |
| 強み | AWS統合、スペック駆動開発 | 汎用性、MCPエコシステム |
| エージェント拡張 | サブエージェント（パイプライン） | MCP サーバー接続 |
| プランニング | `/plan` コマンド | `--plan` フラグ |
| 権限管理 | 安全ガードレール組み込み | 許可モード (`--allowedTools`) |
