# ts-cli-standalone-executable-poc

TypeScript で書いたコードを[ncc](https://github.com/vercel/ncc)でバンドルして[pkg](https://github.com/vercel/pkg)でバイナリを作るサンプル

## Prerequisite

- Node.js >= 16
- pnpm

## Build

```
> pnpm bundle
```

-> `dist/index.js`が出力される

```
> pnpm exe
```

-> `bin/yay.exe`が出力される

```
> yay.exe
yay
```
