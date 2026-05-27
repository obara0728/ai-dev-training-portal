const tasks = [
  {
    title: "GitHubに研修用リポジトリを作る",
    difficulty: "初級",
    tools: ["GitHub"],
    purpose: "開発内容を保存・共有する場所を作ります。",
    actions: ["GitHubにログインする", "新しいリポジトリを作る", "READMEを作る", "最初の変更をCommitする"],
    done: ["README.md が作成されている", "要件定義書が作成されている", "学習ログが作成されている"],
    answer: ["リポジトリ名が目的に合っている", "READMEに目的が1文以上書かれている", "Commit messageで何を保存したか分かる"],
  },
  {
    title: "学習ログを残す",
    difficulty: "初級",
    tools: ["GitHub", "ChatGPT"],
    purpose: "作業の過程をあとから見返せるようにします。",
    actions: ["今日やったことを書く", "つまずいたことを書く", "解決したことを書く", "次にやることを書く"],
    done: ["学習ログに今日の作業内容が書かれている"],
    answer: ["日付が入っている", "できたことと困ったことが分かれている", "次回やることが1つ以上ある"],
  },
  {
    title: "プロンプトを記録する",
    difficulty: "初級",
    tools: ["ChatGPT", "Codex", "Claude Code"],
    purpose: "AIにどんな依頼をしたかを残し、社内ノウハウにします。",
    actions: ["使ったツールを書く", "入力したプロンプトを書く", "返ってきた結果を書く", "良かった点と改善点を書く"],
    done: ["プロンプト記録テンプレートが作成されている"],
    answer: ["目的、入力文、結果、次に試すことが残っている", "あとから同じ依頼を再利用できる", "社内の人が見ても用途が分かる"],
  },
  {
    title: "小さな画面改善をCodexに依頼する",
    difficulty: "中級",
    tools: ["Codex", "GitHub"],
    purpose: "AIに変更内容を伝え、動く画面として反映します。",
    actions: ["直したい画面を決める", "目的と完成イメージをCodexに伝える", "変更後の画面を確認する", "変更ファイルをCommitする"],
    done: ["画面上で変更が確認できる", "変更理由がCommit messageに書かれている"],
    answer: ["依頼文に目的、対象画面、完了条件が入っている", "表示崩れがない", "GitHubに変更が保存されている"],
  },
  {
    title: "Claude Codeで改善点を洗い出す",
    difficulty: "中級",
    tools: ["Claude Code"],
    purpose: "作ったものを見直し、次の改善につなげます。",
    actions: ["見直したいファイルや画面を伝える", "初心者にも分かる改善点を依頼する", "優先順位を付ける", "1つだけ改善を実行する"],
    done: ["改善点が3つ以上出ている", "優先順位が決まっている", "改善を1つ反映している"],
    answer: ["重大な不具合、使いにくさ、表記の分かりにくさが分けられている", "すぐ直すものと後で直すものが決まっている"],
  },
];

const terms = [
  ["GitHub", "リポジトリ", "プロジェクトのファイルや変更履歴をまとめて入れる場所です。", "研修ポータルのHTMLや資料を1つのリポジトリで管理します。"],
  ["GitHub", "Commit", "ファイルの変更を保存し、履歴として残す操作です。", "READMEを直したらCommitして、変更内容を記録します。"],
  ["GitHub", "Branch", "本番の内容を守りながら、別の作業場所で変更するための枝分かれです。", "新機能を試すときにmainとは別のBranchを作ります。"],
  ["GitHub", "Pull Request", "変更内容を確認してもらい、取り込むための相談場所です。", "画面改善が終わったらPull Requestでレビューを依頼します。"],
  ["GitHub", "Merge", "Branchで作った変更をmainなどに取り込むことです。", "レビュー後にPull RequestをMergeします。"],
  ["GitHub", "Issue", "やること、困りごと、改善案を記録するメモです。", "「用語を増やす」という作業をIssueにします。"],
  ["GitHub", "README", "プロジェクトの目的や使い方を書く説明書です。", "社内メンバーはREADMEで概要を確認します。"],
  ["GitHub", "Clone", "リポジトリを自分のパソコンにコピーすることです。", "ローカルで作業するためにCloneします。"],
  ["GitHub", "Push", "自分のパソコンで保存した変更をGitHubへ送ることです。", "ローカルでCommitしたらPushします。"],
  ["GitHub", "Pull", "GitHub上の最新変更を自分のパソコンに取り込むことです。", "作業前にPullして最新状態にします。"],
  ["GitHub", "Fork", "他の人のリポジトリを自分用に複製することです。", "練習用にサンプルリポジトリをForkします。"],
  ["GitHub", "Conflict", "同じ場所を複数人が変更して、どちらを採用するか決める必要がある状態です。", "同じ文章を別々に直すとConflictが起きます。"],
  ["GitHub", "Review", "変更内容に問題がないか確認することです。", "Pull Requestで誤字や動作をReviewします。"],
  ["GitHub", "GitHub Actions", "テストや公開作業を自動で動かす仕組みです。", "Pushしたら自動でチェックを走らせます。"],
  ["GitHub", "GitHub Pages", "リポジトリのファイルをWebサイトとして公開する機能です。", "研修ポータルをPagesで公開します。"],
  ["GitHub", "Release", "特定の完成版を分かりやすく配布・記録することです。", "社内研修版v1.0としてReleaseを作ります。"],
  ["GitHub", "Tag", "特定のCommitに名前を付ける目印です。", "v1.0というTagで完成時点を残します。"],
  ["GitHub", ".gitignore", "GitHubに保存しないファイルを指定する設定です。", "一時ファイルや秘密情報を除外します。"],
  ["GitHub", "Commit message", "Commitで何を変えたかを書く短い説明です。", "「用語クイズを追加」のように書きます。"],
  ["GitHub", "権限", "誰が見られるか、変更できるかを決める設定です。", "社内共有では閲覧者と編集者を分けます。"],
  ["Codex", "プロンプト", "AIに入力する依頼文や質問文です。", "「初心者向けに画面を直して」と伝える文章です。"],
  ["Codex", "要件", "作りたいものに必要な条件や目的です。", "「非エンジニアでも見やすい」が要件になります。"],
  ["Codex", "実装", "設計やアイデアを、実際に動く機能にすることです。", "クイズ画面をJavaScriptで動かします。"],
  ["Codex", "差分", "前の状態から何が変わったかを示す内容です。", "用語カードが増えた部分が差分です。"],
  ["Codex", "検証", "作ったものが想定通り動くか確認することです。", "ボタンを押して画面が切り替わるか確認します。"],
  ["Codex", "テスト", "機能が正しく動くかを決まった観点で確認することです。", "クイズの正解数が増えるか試します。"],
  ["Codex", "デバッグ", "うまく動かない原因を探して直すことです。", "表示されない原因をコンソールで確認します。"],
  ["Codex", "リファクタリング", "動きは変えず、コードを読みやすく整理することです。", "長い処理を関数に分けます。"],
  ["Codex", "コンポーネント", "画面を作る部品のまとまりです。", "カードやボタンを部品として考えます。"],
  ["Codex", "状態管理", "今の選択、点数、表示内容などを管理することです。", "現在のクイズレベルや正解数を管理します。"],
  ["Codex", "API連携", "別のサービスやシステムとデータをやり取りすることです。", "商品情報をECサイトに取り込むときに使います。"],
  ["Codex", "データ構造", "情報を扱いやすく整理する形です。", "用語を配列でまとめて表示します。"],
  ["Codex", "入力検証", "入力された内容が正しい形か確認することです。", "メールアドレスが空でないか確認します。"],
  ["Codex", "エラーハンドリング", "問題が起きたときに分かりやすく対応することです。", "保存失敗時に理由を表示します。"],
  ["Codex", "レスポンシブ", "PCでもスマホでも見やすく表示することです。", "画面幅に合わせてカード数を変えます。"],
  ["Codex", "アクセシビリティ", "誰でも使いやすいように配慮することです。", "ボタン名を分かりやすくします。"],
  ["Codex", "セキュリティ", "情報やシステムを守るための考え方です。", "秘密情報を公開リポジトリに置かないようにします。"],
  ["Codex", "ローカル実行", "自分のパソコン上でアプリを動かすことです。", "公開前にlocalhostで確認します。"],
  ["Codex", "依存関係", "アプリが動くために必要な外部ツールや部品です。", "ライブラリのバージョンを管理します。"],
  ["Codex", "反復改善", "小さく作って確認し、少しずつ良くする進め方です。", "まず動く版を作り、その後クイズを増やします。"],
  ["Claude Code", "コードレビュー", "コードに問題や改善点がないか確認することです。", "読みやすさやミスをClaude Codeに見てもらいます。"],
  ["Claude Code", "説明依頼", "コードやエラーの意味を分かりやすく説明してもらうことです。", "この関数が何をしているか聞きます。"],
  ["Claude Code", "改善提案", "より良くする方法を出してもらうことです。", "初心者向けに表現を優しくする案を出します。"],
  ["Claude Code", "バグ調査", "想定と違う動きの原因を探すことです。", "クイズが次に進まない原因を調べます。"],
  ["Claude Code", "エラー解析", "エラー文から原因と対処を考えることです。", "Cannot read propertyという表示の意味を確認します。"],
  ["Claude Code", "影響範囲", "変更がどこに影響するかの範囲です。", "クイズ処理を変えたら点数表示にも影響します。"],
  ["Claude Code", "テスト観点", "確認すべきポイントの一覧です。", "初級、中級、上級それぞれで点数が出るか確認します。"],
  ["Claude Code", "設計相談", "どういう作りにするか相談することです。", "プロンプト集をカテゴリ別にする設計を相談します。"],
  ["Claude Code", "可読性", "コードや文章の読みやすさです。", "変数名を分かりやすくします。"],
  ["Claude Code", "保守性", "あとから直しやすい状態かどうかです。", "用語を追加しやすいデータ構造にします。"],
  ["Claude Code", "技術的負債", "急いで作ったため後で直す必要がある部分です。", "同じコードが何度も出ている状態です。"],
  ["Claude Code", "命名", "ファイル名、関数名、変数名を分かりやすく付けることです。", "quizScoreのように役割が分かる名前にします。"],
  ["Claude Code", "ログ", "処理の状況やエラーを確認するための記録です。", "保存処理が動いたかログで確認します。"],
  ["Claude Code", "例外処理", "予想外の問題が起きたときの対応です。", "データが空でも画面が止まらないようにします。"],
  ["Claude Code", "パフォーマンス", "表示や処理の速さです。", "用語が増えても重くならないようにします。"],
  ["Claude Code", "セキュリティ観点", "危険な公開や入力がないか確認する視点です。", "APIキーを画面に書いていないか確認します。"],
  ["Claude Code", "ドキュメント化", "使い方や決定内容を文章で残すことです。", "社内共有用に手順をまとめます。"],
  ["Claude Code", "差分確認", "変更前後の違いを確認することです。", "どのファイルが変わったか見ます。"],
  ["Claude Code", "ケース相談", "具体的な状況を出して判断を相談することです。", "エラーが出たときどう進めるか相談します。"],
  ["Claude Code", "リスク整理", "失敗しそうな点や注意点を先に並べることです。", "公開前に個人情報がないか確認します。"],
].map(([tool, name, meaning, example]) => ({ tool, name, meaning, example }));

const quizQuestions = {
  beginner: [
    q("GitHub", "リポジトリとは何ですか？", ["プロジェクトのファイルや履歴を入れる場所", "画面の色だけを決める設定", "AIへの質問文", "パスワード管理アプリ"], 0, "リポジトリは、資料やコード、変更履歴をまとめる場所です。"),
    q("GitHub", "Commitの役割はどれですか？", ["変更を履歴として保存する", "Webサイトを削除する", "AIを起動する", "画像を圧縮する"], 0, "Commitすると、いつ何を変えたか残せます。"),
    q("GitHub", "READMEに書く内容として近いものはどれですか？", ["プロジェクトの目的や使い方", "会社の給与明細", "PCの電源設定", "個人のパスワード"], 0, "READMEは最初に読む説明書です。"),
    q("Codex", "プロンプトとは何ですか？", ["AIへの依頼文や質問文", "GitHubの公開URL", "画像ファイル名", "画面の余白"], 0, "プロンプトはAIにしてほしいことを伝える文章です。"),
    q("Codex", "検証とは何ですか？", ["作ったものが想定通り動くか確認すること", "ファイルを全部消すこと", "リポジトリを非公開にすること", "文章を英語だけにすること"], 0, "作った後は表示や操作を確認します。"),
    q("Codex", "レスポンシブの説明として近いものはどれですか？", ["PCでもスマホでも見やすくすること", "必ず青色にすること", "文字をすべて太字にすること", "GitHubにログインすること"], 0, "画面幅に合わせて表示を調整します。"),
    q("Claude Code", "コードレビューとは何ですか？", ["コードの問題や改善点を確認すること", "PCを買い替えること", "GitHubの名前を変えること", "文字数を数えること"], 0, "レビューではミスや読みやすさを確認します。"),
    q("Claude Code", "エラーを相談するときに役立つ情報はどれですか？", ["エラー文、やりたいこと、直前の変更", "好きな色だけ", "天気だけ", "何も伝えない"], 0, "状況が具体的だと原因を探しやすくなります。"),
  ],
  intermediate: [
    q("GitHub", "複数人で作業するとき、mainを守りながら新機能を試す方法として適切なのは？", ["Branchを作って作業する", "READMEだけ消す", "全員が同じファイルを同時に上書きする", "Commit messageを書かない"], 0, "Branchを使うと本線を守りながら作業できます。"),
    q("GitHub", "Pull Requestの良い使い方はどれですか？", ["変更内容、確認してほしい点、動作確認結果を書く", "何も説明せずMergeする", "秘密情報を貼る", "関係ない画像だけ載せる"], 0, "レビューしやすい情報をまとめると安全に取り込めます。"),
    q("GitHub", "Conflictが起きたときの考え方として適切なのは？", ["どちらの変更を残すか確認して整理する", "リポジトリを必ず削除する", "すべてPublicにする", "Issueを全部閉じる"], 0, "同じ場所の変更がぶつかった状態なので、内容を見て調整します。"),
    q("Codex", "Codexに依頼するとき、成果物の品質が上がりやすい書き方は？", ["目的、対象ファイル、完了条件、注意点を伝える", "「いい感じに」だけ伝える", "関係ない長文だけ送る", "回答を見ずに終了する"], 0, "具体的な条件があるほど期待に近づきます。"),
    q("Codex", "変更後にまず確認したいことは？", ["主要な画面と操作が想定通り動くか", "ファイル数が多いか", "色名が英語か", "文字が全部同じ長さか"], 0, "ユーザーが触る流れを確認するのが大切です。"),
    q("Codex", "入力検証が必要な理由として近いものは？", ["空欄や誤った形式で問題が起きるのを防ぐため", "画面を派手にするため", "Commitを増やすため", "READMEを短くするため"], 0, "入力内容を確認すると不具合や事故を防げます。"),
    q("Claude Code", "改善提案をもらうときに有効な依頼は？", ["初心者向け、優先度順、理由付きで改善点を出してもらう", "全部直してとだけ言う", "画面を見せずに色だけ聞く", "エラー文を隠す"], 0, "観点と出力形式を伝えると使いやすい提案になります。"),
    q("Claude Code", "影響範囲を確認する目的は？", ["変更で別の画面や機能が壊れないか見るため", "称号名を長くするため", "Pull Requestを必ず消すため", "CSSだけ読むため"], 0, "変更は思わぬ場所に影響することがあります。"),
  ],
  advanced: [
    q("ケース", "公開リポジトリにAPIキーらしき文字列を入れてしまいました。最初にする対応として適切なのは？", ["キーを無効化し、履歴に残った可能性も含めて対応する", "READMEに説明を書けば放置してよい", "色を変えて隠す", "Issueだけ閉じる"], 0, "秘密情報は削除だけでは不十分なことがあるため、無効化と影響確認が必要です。"),
    q("ケース", "GitHub Pagesに反映されません。まず確認する順番として近いものは？", ["Commit済みか、Pages設定、公開URL、ブラウザ更新を確認する", "すぐ全ファイルを削除する", "プロンプトを全部消す", "PCを買い替える"], 0, "公開設定と反映待ち、URL、キャッシュを順に確認します。"),
    q("ケース", "Codexに画面修正を頼んだら、別画面のレイアウトも変わりました。どう進める？", ["差分と影響範囲を確認し、必要な変更だけに絞って直す", "動いているので必ずそのままにする", "GitHubをPublicにする", "READMEを空にする"], 0, "想定外の変更は差分で確認し、必要な範囲に戻します。"),
    q("ケース", "社内メンバーが同じ研修アプリを触ります。プロンプト集の運用として良いものは？", ["カテゴリ、目的、成功例、改善メモを残す", "誰が見ても分からない名前にする", "1つの巨大な文章だけにする", "結果だけ残して依頼文を消す"], 0, "再利用しやすい形で残すと社内ノウハウになります。"),
    q("ケース", "クイズの正解数が保存されないという相談が来ました。まず何を見る？", ["保存処理、localStorage、ブラウザ操作後の表示を確認する", "用語名を全部変える", "CSSの色だけ変える", "GitHub Pagesを閉じる"], 0, "点数保存は処理と保存先、表示更新をセットで確認します。"),
    q("ケース", "初心者研修で専門用語が難しいと言われました。改善として適切なのは？", ["言葉、意味、具体例、確認クイズをセットにする", "説明をすべて英語にする", "クイズだけ増やして説明を消す", "専門用語をさらに増やすだけにする"], 0, "理解前の説明と理解後の確認を分けると学びやすくなります。"),
  ],
};

const promptExamples = [
  promptItem("要件整理", "研修アプリの要件を整理する", "社内向けのAI開発研修ポータルを作ります。対象は非エンジニアです。目的、必要な画面、最初に作る機能、後回しにする機能を初心者にも分かる言葉で整理してください。"),
  promptItem("要件整理", "完了条件を作る", "次の作業について、初心者が迷わない完了条件を5つ作ってください。作業内容: GitHubに研修用資料を保存する。"),
  promptItem("実装依頼", "画面を追加する", "既存の静的Webアプリに、用語学習画面を追加してください。各用語はカードで表示し、GitHub、Codex、Claude Codeで絞り込めるようにしてください。"),
  promptItem("実装依頼", "機能を小さく作る", "まず動く最小版として、4択クイズ機能を作ってください。正解、不正解、解説、次の問題ボタンが必要です。"),
  promptItem("コードレビュー", "初心者向けレビュー", "このコードを初心者向けにレビューしてください。重大な不具合、読みづらい点、今すぐ直すべき点を優先度順に教えてください。"),
  promptItem("コードレビュー", "表示崩れ確認", "この画面について、スマホ表示で崩れそうな場所を確認し、修正案を出してください。専門用語は少なめにしてください。"),
  promptItem("エラー相談", "エラー文から相談する", "次のエラーが出ました。やりたいこと、直前に変更した内容、エラー文をもとに、原因候補と確認手順を教えてください。"),
  promptItem("エラー相談", "GitHub操作の相談", "GitHubでCommitできません。表示されているエラー文と、直前に押したボタンをもとに、初心者向けに次の操作を教えてください。"),
  promptItem("学習・説明", "用語をやさしく説明", "次の専門用語を、非エンジニアにも分かるように、意味、たとえ、実務での使い方に分けて説明してください。"),
  promptItem("学習・説明", "理解度チェックを作る", "次の用語について、初級、中級、ケーススタディの3段階で4択クイズを作ってください。解説も付けてください。"),
  promptItem("社内共有", "作業報告を作る", "今日やった作業を社内共有用にまとめたいです。目的、実施内容、できたこと、つまずいたこと、次回やることに分けて整理してください。"),
  promptItem("社内共有", "GitHub共有文を作る", "GitHubで共有するREADMEの文章を作ってください。対象者は社内の非エンジニアで、目的と使い方がすぐ分かる文章にしてください。"),
];

const buttons = document.querySelectorAll(".tab-button");
const views = document.querySelectorAll(".view");
const taskList = document.querySelector("#task-list");
const termList = document.querySelector("#term-list");
const termCount = document.querySelector("#term-count");
const termFilters = document.querySelectorAll(".term-filter");
const levelButtons = document.querySelectorAll(".level-button");
const quizCategory = document.querySelector("#quiz-category");
const quizProgress = document.querySelector("#quiz-progress");
const quizScore = document.querySelector("#quiz-score");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");
const quizTitle = document.querySelector("#quiz-title");
const quizClearCount = document.querySelector("#quiz-clear-count");
const quizBestScore = document.querySelector("#quiz-best-score");
const promptCategories = document.querySelector("#prompt-categories");
const promptList = document.querySelector("#prompt-list");

let selectedLevel = "beginner";
let currentQuizIndex = 0;
let quizCorrectCount = 0;
const statsKey = "aiTrainingQuizStats";
const quizStats = loadStats();

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.view;
    buttons.forEach((item) => item.classList.remove("active"));
    views.forEach((view) => view.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#${target}`).classList.add("active");
  });
});

levelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedLevel = button.dataset.level;
    currentQuizIndex = 0;
    quizCorrectCount = 0;
    levelButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderQuizQuestion();
    renderQuizStats();
  });
});

termFilters.forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    termFilters.forEach((button) => button.classList.remove("active"));
    filterButton.classList.add("active");
    renderTerms(filterButton.dataset.termFilter);
  });
});

quizOptions.addEventListener("click", (event) => {
  const option = event.target.closest(".quiz-option");
  if (!option || option.disabled) return;
  answerQuiz(Number(option.dataset.answer));
});

quizNext.addEventListener("click", () => {
  if (quizNext.dataset.mode === "restart") {
    currentQuizIndex = 0;
    quizCorrectCount = 0;
    quizNext.dataset.mode = "next";
    renderQuizQuestion();
    return;
  }

  const questions = quizQuestions[selectedLevel];
  if (currentQuizIndex === questions.length - 1) {
    showQuizResult();
    return;
  }
  currentQuizIndex += 1;
  renderQuizQuestion();
});

function renderTasks() {
  taskList.innerHTML = tasks
    .map(
      (task) => `
        <article class="task-card">
          <span class="difficulty">${task.difficulty}</span>
          <h3>${task.title}</h3>
          <p>${task.purpose}</p>
          <div class="task-meta">
            ${task.tools.map((tool) => `<span class="pill">${tool}</span>`).join("")}
          </div>
          <strong>やること</strong>
          <ul>${task.actions.map((action) => `<li>${action}</li>`).join("")}</ul>
          <strong>完了条件</strong>
          <ul>${task.done.map((item) => `<li>${item}</li>`).join("")}</ul>
          <details class="answer-check">
            <summary>答え合わせをする</summary>
            <p>できていればOKな状態</p>
            <ul>${task.answer.map((item) => `<li>${item}</li>`).join("")}</ul>
          </details>
        </article>
      `
    )
    .join("");
}

function renderTerms(filter = "all") {
  const filteredTerms = filter === "all" ? terms : terms.filter((term) => term.tool === filter);
  termCount.textContent = `${filteredTerms.length}件の用語を表示中`;
  termList.innerHTML = filteredTerms
    .map(
      (term) => `
        <article class="term-card">
          <div class="term-card-header">
            <h3>${term.name}</h3>
            <span class="pill">${term.tool}</span>
          </div>
          <p>${term.meaning}</p>
          <div class="term-example"><strong>例:</strong> ${term.example}</div>
        </article>
      `
    )
    .join("");
}

function renderQuizQuestion() {
  const questions = quizQuestions[selectedLevel];
  const item = questions[currentQuizIndex];
  quizCategory.textContent = levelLabel(selectedLevel);
  quizProgress.textContent = `${currentQuizIndex + 1} / ${questions.length}`;
  quizScore.textContent = `正解 ${quizCorrectCount}`;
  quizQuestion.textContent = item.question;
  quizFeedback.hidden = true;
  quizFeedback.innerHTML = "";
  quizNext.dataset.mode = "next";
  quizNext.hidden = true;
  quizOptions.innerHTML = item.options
    .map((option, index) => `<button class="quiz-option" type="button" data-answer="${index}">${option}</button>`)
    .join("");
}

function answerQuiz(selectedIndex) {
  const item = quizQuestions[selectedLevel][currentQuizIndex];
  const isCorrect = selectedIndex === item.answer;
  const optionButtons = document.querySelectorAll(".quiz-option");

  optionButtons.forEach((button) => {
    const buttonIndex = Number(button.dataset.answer);
    button.disabled = true;
    if (buttonIndex === item.answer) button.classList.add("correct");
    if (buttonIndex !== item.answer && buttonIndex === selectedIndex) button.classList.add("incorrect");
  });

  if (isCorrect) quizCorrectCount += 1;
  quizScore.textContent = `正解 ${quizCorrectCount}`;
  quizFeedback.hidden = false;
  quizFeedback.innerHTML = `<strong>${isCorrect ? "正解です" : "もう一歩です"}</strong><span>${item.explanation}</span>`;
  quizNext.textContent = currentQuizIndex === quizQuestions[selectedLevel].length - 1 ? "結果を見る" : "次の問題へ";
  quizNext.hidden = false;
}

function showQuizResult() {
  const questions = quizQuestions[selectedLevel];
  const percent = Math.round((quizCorrectCount / questions.length) * 100);
  const cleared = percent >= 80;
  quizStats[selectedLevel].attempts += 1;
  quizStats[selectedLevel].best = Math.max(quizStats[selectedLevel].best, percent);
  quizStats[selectedLevel].cleared = quizStats[selectedLevel].cleared || cleared;
  saveStats();

  quizQuestion.textContent = `${levelLabel(selectedLevel)}の結果: ${percent}点`;
  quizOptions.innerHTML = "";
  quizFeedback.hidden = false;
  quizFeedback.innerHTML = `<strong>${cleared ? "クリアです" : "あと少しです"}</strong><span>${questions.length}問中 ${quizCorrectCount}問正解。80点以上でクリアです。</span>`;
  quizNext.textContent = "もう一度挑戦する";
  quizNext.dataset.mode = "restart";
  quizNext.hidden = false;
  renderQuizStats();
}

function renderQuizStats() {
  const clearedCount = Object.values(quizStats).filter((item) => item.cleared).length;
  quizTitle.textContent = titleByClearCount(clearedCount);
  quizClearCount.textContent = `${clearedCount} / 3`;
  const best = quizStats[selectedLevel].best;
  quizBestScore.textContent = best > 0 ? `${levelLabel(selectedLevel)} ${best}点` : "未挑戦";
}

function renderPrompts(filter = "すべて") {
  const categories = ["すべて", ...new Set(promptExamples.map((item) => item.category))];
  promptCategories.innerHTML = categories
    .map((category) => `<button class="prompt-category ${category === filter ? "active" : ""}" type="button" data-category="${category}">${category}</button>`)
    .join("");

  const filtered = filter === "すべて" ? promptExamples : promptExamples.filter((item) => item.category === filter);
  promptList.innerHTML = filtered
    .map(
      (item) => `
        <article class="prompt-card">
          <div class="term-card-header">
            <h3>${item.title}</h3>
            <span class="pill">${item.category}</span>
          </div>
          <pre><code>${escapeHtml(item.body)}</code></pre>
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".prompt-category").forEach((button) => {
    button.addEventListener("click", () => renderPrompts(button.dataset.category));
  });
}

function q(category, question, options, answer, explanation) {
  return { category, question, options, answer, explanation };
}

function promptItem(category, title, body) {
  return { category, title, body };
}

function levelLabel(level) {
  return { beginner: "初級", intermediate: "中級", advanced: "上級" }[level];
}

function titleByClearCount(count) {
  if (count >= 3) return "AI開発ナビゲーター";
  if (count === 2) return "開発フロー理解者";
  if (count === 1) return "基礎チャレンジャー";
  return "見習い";
}

function loadStats() {
  const fallback = {
    beginner: { attempts: 0, best: 0, cleared: false },
    intermediate: { attempts: 0, best: 0, cleared: false },
    advanced: { attempts: 0, best: 0, cleared: false },
  };

  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem(statsKey)) };
  } catch {
    return fallback;
  }
}

function saveStats() {
  localStorage.setItem(statsKey, JSON.stringify(quizStats));
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

renderTasks();
renderTerms();
renderQuizQuestion();
renderQuizStats();
renderPrompts();
