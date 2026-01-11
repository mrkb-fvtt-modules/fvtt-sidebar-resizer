# MRKB Sidebar Resizer

---

# English

## Overview
MRKB Sidebar Resizer (module id: `mrkb-sidebar-resizer`) is a lightweight Foundry VTT module that:
- Adds a draggable resizer to the right-hand sidebar so users can adjust its width.
- Persists each user's chosen sidebar width using Foundry settings.
- Provides optional settings to lock the resizer or reset the width to the default.

- Title: MRKB Sidebar Resizer
- ID: `mrkb-sidebar-resizer`
- Version: 1.0.0
- Compatibility: minimum Foundry VTT 13, verified 13.351
- Author: MRKB

## Installation
Two common ways to install the module into Foundry VTT:

1) Install via manifest URL (recommended):
   - In Foundry, open the "Add-on Modules" (or "Install Module") dialog.
   - Choose "Install from Manifest URL" and paste the module's manifest URL (see above).
   - Install and enable the module in the Game Configuration for your world.

2) Manual install:
   - Download the ZIP from the repository (see Download link above).
   - Extract the folder into your Foundry Data folder under `Data/modules/mrkb-sidebar-resizer`.
   - Enable the module in the Game Configuration for your world.

After installation, enable the module in the world settings and refresh the client.

## Usage
- After enabling the module, open the right sidebar. A thin vertical resizer bar appears at the left edge of the sidebar.
- Click and drag that bar horizontally to change the sidebar width.
- Minimum width: 300px (enforced by both CSS and JavaScript).
- The chosen width is saved per user, so each user can have their own sidebar size.

## Settings (found in Settings → Module Settings → MRKB Sidebar Resizer)
The module registers three settings in `main.mjs`. Their internal keys are under the module namespace `mrkb-sidebar-resizer`:

- `sidebar-size` (type: Number)
  - Name: "Sidebar Width"
  - Scope: `user`
  - Config: `false` (not editable via the settings UI)
  - Default: `300`
  - Notes: This value is changed by dragging the resizer. It stores the current width in pixels per user.

- `sidebar-lock` (type: Boolean)
  - Name: localized (`MRKB.LockSidebar`)
  - Hint: localized (`MRKB.LockSidebarHint`)
  - Scope: `user`
  - Config: `true`
  - Default: `false`
  - Effect: When enabled, the resizer element is hidden and the sidebar cannot be resized.

- `reset-sidebar` (type: Boolean)
  - Name: localized (`MRKB.ResetSidebar`)
  - Hint: localized (`MRKB.ResetSidebarHint`)
  - Scope: `user`
  - Config: `true`
  - Default: `false`
  - Effect: When toggled to `true` in the settings UI, the module resets the `sidebar-size` to the default (300) and then sets this `reset-sidebar` flag back to `false`.

---

# 한국어

## 개요
MRKB Sidebar Resizer(모듈 ID: `mrkb-sidebar-resizer`)는 오른쪽 사이드바의 너비를 사용자가 드래그로 조정할 수 있게 하고, 각 사용자의 설정을 저장하는 가벼운 Foundry VTT 모듈입니다.

- 사이드바의 왼쪽 가장자리에 드래그 가능한 리사이저를 추가합니다.
- 사용자가 선택한 너비를 사용자별로 저장합니다.
- 리사이저 고정(잠금) 또는 너비 초기화 옵션을 제공합니다.

- 제목: MRKB Sidebar Resizer
- ID: `mrkb-sidebar-resizer`
- 버전: 1.0.0
- 호환성: Foundry VTT 13 이상(검증: 13.351)
- 작성자: MRKB

## 설치
1) 매니페스트 URL을 통한 설치(권장):
   - Foundry의 "Add-on Modules" 또는 "Install Module"에서 "Install from Manifest URL"을 선택합니다.
   - 위의 매니페스트 URL을 붙여넣고 설치합니다.
   - 월드 설정에서 모듈을 활성화합니다.

2) 수동 설치:
   - 저장소에서 ZIP 파일을 다운로드합니다.
   - Foundry Data 폴더의 `Data/modules/mrkb-sidebar-resizer`로 압축을 해제합니다.
   - 월드 설정에서 모듈을 활성화합니다.

설치 후 클라이언트를 새로고침하세요.

## 사용법
- 모듈을 활성화하면 오른쪽 사이드바의 왼쪽 가장자리에 가는 수직 리사이저 바가 표시됩니다.
- 그 바를 클릭하여 수평으로 드래그하면 사이드바 너비가 변경됩니다.
- 최소 너비: 300px (CSS와 JS에서 강제 적용)
- 선택한 너비는 사용자별로 저장됩니다.

## 설정 (설정 위치: Settings → Module Settings → MRKB Sidebar Resizer)
- `sidebar-size` (숫자)
  - 이름: "Sidebar Width" (UI에서 직접 편집 불가)
  - 범위: `user`
  - Config: `false`
  - 기본값: 300
  - 비고: 리사이저로 변경되며 사용자별로 저장됩니다.

- `sidebar-lock` (불리언)
  - 이름: 로컬라이즈(`MRKB.LockSidebar`)
  - 힌트: 로컬라이즈(`MRKB.LockSidebarHint`)
  - 범위: `user`
  - Config: `true`
  - 기본값: `false`
  - 효과: 활성화하면 리사이저가 숨겨져 사이드바를 조절할 수 없습니다.

- `reset-sidebar` (불리언)
  - 이름: 로컬라이즈(`MRKB.ResetSidebar`)
  - 힌트: 로컬라이즈(`MRKB.ResetSidebarHint`)
  - 범위: `user`
  - Config: `true`
  - 기본값: `false`
  - 효과: `true`로 설정하면 너비를 기본값(300)으로 재설정하고 자동으로 `false`로 되돌립니다.

---

# 日本語

## 概要
MRKB Sidebar Resizer（モジュールID: `mrkb-sidebar-resizer`）は、右サイドバーの幅をユーザーがドラッグで調整できるようにし、各ユーザーの幅を保存する軽量な Foundry VTT モジュールです。

- サイドバーの左端にドラッグ可能なリサイザーを追加します。
- 各ユーザーの選択した幅を保存します。
- リサイザーを固定（ロック）したり幅をリセットするオプションを提供します。

- タイトル: MRKB Sidebar Resizer
- ID: `mrkb-sidebar-resizer`
- バージョン: 1.0.0
- 対応: Foundry VTT 13 以上（verified: 13.351）
- 作成者: MRKB

## インストール
1) マニフェスト URL を使う方法（推奨）:
   - Foundry の "Add-on Modules" または "Install Module" で "Install from Manifest URL" を選択します。
   - 上記のマニフェスト URL を貼り付けてインストールします。
   - ワールドの設定でモジュールを有効にします。

2) 手動インストール:
   - リポジトリの ZIP をダウンロードします。
   - Foundry Data フォルダの `Data/modules/mrkb-sidebar-resizer` に展開します。
   - ワールドの設定でモジュールを有効にします。

インストール後、クライアントをリフレッシュしてください。

## 使い方
- モジュールを有効にすると、右サイドバーの左端に細い垂直のリサイザーバーが表示されます。
- そのバーをクリックして横方向にドラッグすると、サイドバーの幅が変わります。
- 最小幅: 300px（CSS と JavaScript で制限されています）
- 選択された幅はユーザーごとに保存されます。

## 設定（Settings → Module Settings → MRKB Sidebar Resizer）
- `sidebar-size`（数値）
  - 名前: "Sidebar Width"（設定UIで直接編集不可）
  - スコープ: `user`
  - Config: `false`
  - デフォルト: `300`
  - 備考: リサイザーで変更され、ユーザーごとに保存されます。

- `sidebar-lock`（ブール）
  - 名前: ローカライズキー(`MRKB.LockSidebar`)
  - ヒント: ローカライズキー(`MRKB.LockSidebarHint`)
  - スコープ: `user`
  - Config: `true`
  - デフォルト: `false`
  - 効果: 有効にするとリサイザーが非表示になり、リサイズできなくなります。

- `reset-sidebar`（ブール）
  - 名前: ローカライズキー(`MRKB.ResetSidebar`)
  - ヒント: ローカライズキー(`MRKB.ResetSidebarHint`)
  - スコープ: `user`
  - Config: `true`
  - デフォルト: `false`
  - 効果: `true` にすると幅をデフォルト(300)にリセットし、その後自動的に `false` に戻ります。
