# Belle 店舗ページ

「Belle-preview (4).html」をGitHub Pagesで公開するために整理したファイルです。特別な作成ソフトや変換作業は不要です。

## 最初に知っておくこと

- 最初に開くページはBelle志木店です。
- 画像10枚は、いただいたHTMLに入っていたデータをそのまま取り出しました。切り抜き・再生成・画質変更はしていません。
- 配色・ページ幅・画像順・FAQ本文・予約先・電話番号・地図は元のページを引き継いでいます。定休日の行を追加し、小さい画面で文字がはみ出しにくくしています。
- 元HTMLに定休日の記載がないため「店舗へお問い合わせください」としています。判明したら設定を書き換えてください。
- 店舗情報はJavaScriptで反映します。ブラウザでJavaScriptを無効にしている場合は案内が表示されます。

## ファイルの役割

| ファイル・フォルダ | 役割 |
| --- | --- |
| `index.html` | ページの並び、FAQの文章 |
| `config/stores.js` | 店舗情報。普段変更するのはここです |
| `assets/css/style.css` | 色・文字の大きさ・余白 |
| `assets/js/site.js` | 店舗情報をページへ反映する処理 |
| `assets/images/` | 元HTMLから取り出した画像10枚 |
| `docs/image-manifest.json` | 画像のサイズと、同じデータか確認するための記録 |
| `.nojekyll` | GitHubでファイルをそのまま公開するための目印 |

## 店舗情報を変更する

1. GitHubで、このページを保存したリポジトリ（ファイルの保管場所）を開きます。
2. `config` → `stores.js` を開き、鉛筆の「Edit this file」を押します。
3. `shiki` の中で、変更したい項目の引用符 `" "` の内側だけを書き換えます。
4. 「Commit changes」を押して保存します。公開ページへの反映には数分かかる場合があります。

| 項目 | 内容 |
| --- | --- |
| `enabled` | `true` なら公開、`false` なら非公開 |
| `name` | 店舗名 |
| `bookingLabel` | 予約ボタンに表示する文章 |
| `address` | 住所。1行ごとに引用符で囲み、改行する部分はカンマで区切る |
| `access` | 駅からの行き方 |
| `hours` | 営業時間 |
| `closedDays` | 定休日 |
| `bookingUrl` | 予約ページのURL |
| `mapEmbedUrl` | Googleマップをページに表示するためのURL |
| `phone` | 電話番号。ハイフン付きで入力できます |

予約ボタン4か所、電話ボタン4か所、表の電話番号、ページ上部・店舗案内・ブラウザのタイトル・地図が、この設定から反映されます。HTMLの各所を書き換える必要はありません。

引用符・カンマ・かっこは消さないでください。設定が未完了の場合は店舗ページを出さず、案内文を表示します。入力ミスで前の店舗へ予約されるのを防ぐためです。

### 地図のURLの取り方

Googleマップで正しい店舗を開き、「共有」→「地図を埋め込む」→「HTMLをコピー」を選びます。コピーした文章の `src="https://www.google.com/maps/embed?..."` のうち、引用符の内側にあるURLだけを `mapEmbedUrl` に貼り付けます。「リンクを送信」の短いURLは使えません。

## 他店舗を追加する

志木店を残したまま、同じデザインで店舗を追加できます。

1. `config/stores.js` を開きます。
2. ファイル後半の `"new-store": { ... }` が新店舗用のひな形です。最初は `enabled: false` なので公開されません。
3. `"new-store"` を、たとえば `"omiya"` に変更します。半角英小文字・数字・ハイフンを使い、他店と同じ名前にしないでください。
4. その中の店舗名・住所・アクセス・営業時間・定休日・予約URL・地図URL・電話番号・ボタンの文章をすべて入力します。
5. 入力を確かめてから `"enabled": true` に変更して保存します。
6. 志木店の公開URL末尾に `?store=omiya` を付けて開きます。

例（Ownerが `LimeBelleLiftLABOAreum26`、リポジトリが `belle-pages` の場合）：

- 志木店：`https://limebelleliftlaboareum26.github.io/belle-pages/`
- 志木店を明示：`https://limebelleliftlaboareum26.github.io/belle-pages/?store=shiki`
- 大宮店を追加した場合：`https://limebelleliftlaboareum26.github.io/belle-pages/?store=omiya`

さらに店舗を追加する場合は、1店舗分の `"omiya": { ... }` をコピーして、その次にカンマで区切って追加します。一番外側の `{ }` の中に店舗を並べます。`enabled: false` の店舗や存在しない店舗名では、予約ボタンを表示しません。

この設定で変わるのは文字とリンク・地図です。画像の中に印刷されている文字は変わりません。新店でも画像内の料金・内容が適切か確認してください。現時点の画像は全店共通です。

## GitHubへ初めて登録する

### 1. 保管場所を作る

1. GitHubにログインし、右上の「＋」→「New repository」を押します。
2. 「Owner」は管理するアカウントです。「Repository name」に `belle-pages` と入力します。
3. 無料プランでPagesを使う場合は「Public」を選びます。公開されるHTML・画像・設定は、誰でも閲覧・ダウンロードできます。
4. 「Add README」をOnにし、「Create repository」を押します。

### 2. ファイルを登録する

1. お渡ししたZIPを展開し、`belle-pages` フォルダを開きます。
2. GitHubの保管場所の画面で「Add file」→「Upload files」を押します。
3. `belle-pages` フォルダそのものではなく、**中身の `index.html`、`README.md`、`assets`、`config`、`docs` をまとめて**アップロード欄へドラッグします。
4. フォルダの階層がそのまま登録されることを確かめ、「Commit changes」で保存します。既存READMEは今回の内容に置き換えます。
5. 一番上の階層に `index.html` があることを確かめます。`belle-pages/index.html` のように余分なフォルダが入ると、公開ページを開けません。

Macでは `.nojekyll` が隠れて見えないことがあります。Finderで `Command + Shift + .` を押すと表示できます。ほかのファイルと一緒に登録してください。登録できない場合は「Add file」→「Create new file」でファイル名を `.nojekyll`、内容を1行の空白にして保存できます。

### 3. ページを公開する

1. 保管場所の上部で「Settings」を押します。
2. 左のメニューから「Pages」を押します。
3. 「Build and deployment」の「Source」で「Deploy from a branch」を選びます。
4. 「Branch」で `main`、その隣で `/(root)` を選び、「Save」を押します。
5. 数分待って同じ画面を開き直します。「Your site is live at」に表示されたURLが公開先です。初回は10分ほどかかる場合があります。
6. URLを開いて、画像・予約先・電話番号・地図を確認します。

`https://〈Owner名〉.github.io/〈リポジトリ名〉/` が基本のURLです。GitHubのコード画面のURLとは異なります。Owner名を後で変更する場合、公開URLも変わるため、共有済みリンクやQRコードを更新してください。

## 更新後の確認

- スマホで横にはみ出していないか。
- 画像が10枚すべて表示されているか。
- 4か所の予約ボタンが正しい店舗の予約先へ進むか（予約を確定する必要はありません）。
- 電話番号が正しいか。スマホで電話画面に正しい番号が渡るか（実際に発信する必要はありません）。
- 地図に正しい店舗が表示されるか。
- FAQ7項目を押して答えを開閉できるか。
- 新店舗URLに `?store=店舗名` が付いているか。

画像を差し替える場合は `assets/images/` の同じファイル名で置き換えると反映されます。今回は画像の加工や差し替えはしていません。

## うまく表示されないとき

- 404になる：Pagesの `main` / `/(root)` 設定と、一番上にある `index.html` を確認します。
- 画像が出ない：`assets/images/` がフォルダごと登録されているか確認します。
- 「公開されていません」と出る：URL末尾の店舗名と `enabled` の値を確認します。
- 店舗情報の設定エラーが出る：引用符・カンマと、予約・地図・電話の入力を確認します。
- 更新前の内容が出る：数分待って再読み込みします。Macでは `Command + Shift + R` も試せます。

## 公式の操作案内

- [リポジトリを作る](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)
- [ファイルを登録する](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [GitHub Pagesを始める](https://docs.github.com/en/pages/quickstart)
