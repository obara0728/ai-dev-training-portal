const tasks = [
  {
    title: "GitHubに研修用リポジトリを作る",
    difficulty: "初級",
    tools: ["GitHub"],
    purpose: "開発内容を保存・共有する場所を作ります。",
    actions: [
      "GitHubにログインする",
      "新しいリポジトリを作る",
      "READMEを作る",
      "最初の変更をCommitする",
    ],
    done: [
      "README.md が作成されている",
      "要件定義書が作成されている",
      "学習ログが作成されている",
    ],
  },
  {
    title: "学習ログを残す",
    difficulty: "初級",
    tools: ["GitHub", "ChatGPT"],
    purpose: "作業の過程をあとから見返せるようにします。",
    actions: [
      "今日やったことを書く",
      "つまずいたことを書く",
      "解決したことを書く",
      "次にやることを書く",
    ],
    done: ["学習ログに今日の作業内容が書かれている"],
  },
  {
    title: "プロンプトを記録する",
    difficulty: "初級",
    tools: ["ChatGPT", "Codex", "Claude Code"],
    purpose: "AIにどんな依頼をしたかを残し、社内ノウハウにします。",
    actions: [
      "使ったツールを書く",
      "入力したプロンプトを書く",
      "返ってきた結果を書く",
      "良かった点と改善点を書く",
    ],
    done: ["プロンプト記録テンプレートが作成されている"],
  },
];

const terms = [
  {
    tool: "GitHub",
    name: "リポジトリ",
    meaning: "プロジェクトのファイルや変更履歴をまとめて入れる箱です。",
    example: "研修ポータルでは、READMEやアプリのファイルを1つのリポジトリで管理します。",
  },
  {
    tool: "GitHub",
    name: "Commit",
    meaning: "ファイルの変更を保存して、履歴として残す操作です。",
    example: "READMEを直したらCommitして、いつ何を変えたか残します。",
  },
  {
    tool: "GitHub",
    name: "README",
    meaning: "プロジェクトの目的や使い方を書く説明書です。",
    example: "社内メンバーはまずREADMEを読むと、プロジェクトの概要がわかります。",
  },
  {
    tool: "Codex",
    name: "プロンプト",
    meaning: "AIに入力する依頼文や質問文です。",
    example: "「初心者向けのクイズ画面を作って」と書くと、それがプロンプトになります。",
  },
  {
    tool: "Codex",
    name: "実装",
    meaning: "設計やアイデアを、実際に動く画面や機能にすることです。",
    example: "用語クイズの画面をHTML、CSS、JavaScriptで作ることが実装です。",
  },
  {
    tool: "Codex",
    name: "検証",
    meaning: "作ったものが想定通りに動くか確認することです。",
    example: "クイズで回答したら正解表示が出るか、ブラウザで確認します。",
  },
  {
    tool: "Claude Code",
    name: "コードレビュー",
    meaning: "コードに問題や改善点がないか確認することです。",
    example: "Claude Codeに、読みやすさやミスがないか見てもらいます。",
  },
  {
    tool: "Claude Code",
    name: "リファクタリング",
    meaning: "動きは変えずに、コードを読みやすく整理することです。",
    example: "長くなった処理を分けて、あとから直しやすくします。",
  },
  {
    tool: "Claude Code",
    name: "エラー",
    meaning: "プログラムがうまく動かない原因や、そのときに出るメッセージです。",
    example: "画面が表示されないときは、エラー文を一緒に伝えると相談しやすくなります。",
  },
];

const quizQuestions = [
  {
    category: "GitHub",
    question: "リポジトリとは何ですか？",
    options: [
      "プロジェクトのファイルや履歴を入れる箱",
      "画面の色を決める設定",
      "AIへの質問文",
      "Webサイトの公開URL",
    ],
    answer: 0,
    explanation: "リポジトリは、コードや資料、変更履歴をまとめて管理する場所です。",
  },
  {
    category: "GitHub",
    question: "Commitとは何をする操作ですか？",
    options: [
      "変更を保存して履歴に残す",
      "リポジトリを削除する",
      "AIに質問する",
      "ブラウザを更新する",
    ],
    answer: 0,
    explanation: "Commitは、ファイルの変更をGitHub上の履歴として残す操作です。",
  },
  {
    category: "GitHub",
    question: "READMEの役割として一番近いものはどれですか？",
    options: [
      "プロジェクトの説明書",
      "ログイン用パスワード",
      "画像だけを保存する場所",
      "エラーを自動修正する機能",
    ],
    answer: 0,
    explanation: "READMEは、目的、使い方、注意点などを最初に伝える説明書です。",
  },
  {
    category: "Codex",
    question: "Codexに作業を頼むとき、最初に伝えるとよいことは何ですか？",
    options: [
      "何を作りたいか、どこを直したいか",
      "パソコンの購入日",
      "好きな色だけ",
      "GitHubの星の数",
    ],
    answer: 0,
    explanation: "目的や完成イメージを伝えると、Codexが作業内容を判断しやすくなります。",
  },
  {
    category: "Codex",
    question: "Codexで作った後に確認したいことは何ですか？",
    options: [
      "画面が表示され、操作が想定通り動くか",
      "ファイル名が長いか",
      "文字がすべて英語か",
      "背景が必ず青いか",
    ],
    answer: 0,
    explanation: "作っただけで終わらせず、ブラウザで表示と操作を確認することが大切です。",
  },
  {
    category: "Codex",
    question: "プロンプトとは何ですか？",
    options: [
      "AIに入力する依頼文や質問文",
      "GitHubの公開設定",
      "CSSの色コードだけ",
      "ファイルを消すボタン",
    ],
    answer: 0,
    explanation: "プロンプトは、AIに何をしてほしいかを伝える文章です。",
  },
  {
    category: "Claude Code",
    question: "Claude Codeに向いている相談はどれですか？",
    options: [
      "コードの意味や改善点を確認する",
      "GitHubのアカウント名を変更する",
      "会社の売上を確定する",
      "PCの電源を入れる",
    ],
    answer: 0,
    explanation: "Claude Codeは、コードの説明、改善、修正方針の相談に役立ちます。",
  },
  {
    category: "Claude Code",
    question: "コードレビューとは何ですか？",
    options: [
      "コードに問題や改善点がないか確認すること",
      "画面を暗くすること",
      "リポジトリをPublicにすること",
      "ファイル名をランダムにすること",
    ],
    answer: 0,
    explanation: "コードレビューでは、読みやすさ、動作、ミス、保守しやすさなどを確認します。",
  },
  {
    category: "Claude Code",
    question: "エラーを相談するときに一緒に伝えるとよいものはどれですか？",
    options: [
      "エラー文、やりたいこと、直前に変更した内容",
      "天気予報だけ",
      "画面の背景色だけ",
      "何も伝えない",
    ],
    answer: 0,
    explanation: "状況が具体的なほど、原因を見つけやすくなります。",
  },
];

const buttons = document.querySelectorAll(".tab-button");
const views = document.querySelectorAll(".view");
const taskList = document.querySelector("#task-list");
const termList = document.querySelector("#term-list");
const termFilters = document.querySelectorAll(".term-filter");
const quizCategory = document.querySelector("#quiz-category");
const quizProgress = document.querySelector("#quiz-progress");
const quizScore = document.querySelector("#quiz-score");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

let currentQuizIndex = 0;
let quizCorrectCount = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.view;

    buttons.forEach((item) => item.classList.remove("active"));
    views.forEach((view) => view.classList.remove("active"));

    button.classList.add("active");
    document.querySelector(`#${target}`).classList.add("active");
  });
});

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
        <ul>
          ${task.actions.map((action) => `<li>${action}</li>`).join("")}
        </ul>
        <strong>完了条件</strong>
        <ul>
          ${task.done.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    `
  )
  .join("");

function renderTerms(filter = "all") {
  const filteredTerms =
    filter === "all" ? terms : terms.filter((term) => term.tool === filter);

  termList.innerHTML = filteredTerms
    .map(
      (term) => `
        <article class="term-card">
          <div class="term-card-header">
            <h3>${term.name}</h3>
            <span class="pill">${term.tool}</span>
          </div>
          <p>${term.meaning}</p>
          <div class="term-example">
            <strong>例:</strong> ${term.example}
          </div>
        </article>
      `
    )
    .join("");
}

termFilters.forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    termFilters.forEach((button) => button.classList.remove("active"));
    filterButton.classList.add("active");
    renderTerms(filterButton.dataset.termFilter);
  });
});

function renderQuizQuestion() {
  const item = quizQuestions[currentQuizIndex];

  quizCategory.textContent = item.category;
  quizProgress.textContent = `${currentQuizIndex + 1} / ${quizQuestions.length}`;
  quizScore.textContent = `正解 ${quizCorrectCount}`;
  quizQuestion.textContent = item.question;
  quizFeedback.hidden = true;
  quizFeedback.innerHTML = "";
  quizNext.hidden = true;

  quizOptions.innerHTML = item.options
    .map(
      (option, index) =>
        `<button class="quiz-option" type="button" data-answer="${index}">${option}</button>`
    )
    .join("");
}

function answerQuiz(selectedIndex) {
  const item = quizQuestions[currentQuizIndex];
  const isCorrect = selectedIndex === item.answer;
  const optionButtons = document.querySelectorAll(".quiz-option");

  optionButtons.forEach((button) => {
    const buttonIndex = Number(button.dataset.answer);
    button.disabled = true;

    if (buttonIndex === item.answer) {
      button.classList.add("correct");
    } else if (buttonIndex === selectedIndex) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    quizCorrectCount += 1;
  }

  quizScore.textContent = `正解 ${quizCorrectCount}`;
  quizFeedback.hidden = false;
  quizFeedback.innerHTML = `
    <strong>${isCorrect ? "正解です" : "もう一歩です"}</strong>
    <span>${item.explanation}</span>
  `;
  quizNext.textContent =
    currentQuizIndex === quizQuestions.length - 1 ? "結果を見る" : "次の問題へ";
  quizNext.hidden = false;
}

quizOptions.addEventListener("click", (event) => {
  const option = event.target.closest(".quiz-option");
  if (!option || option.disabled) return;

  answerQuiz(Number(option.dataset.answer));
});

quizNext.addEventListener("click", () => {
  if (currentQuizIndex === quizQuestions.length - 1) {
    quizQuestion.textContent = `結果: ${quizQuestions.length}問中 ${quizCorrectCount}問正解`;
    quizOptions.innerHTML = "";
    quizFeedback.hidden = false;
    quizFeedback.innerHTML = `
      <strong>おつかれさまでした</strong>
      <span>間違えた問題は、GitHubガイドやプロンプト集と合わせて見直しましょう。</span>
    `;
    quizNext.textContent = "もう一度挑戦する";
    currentQuizIndex = 0;
    quizCorrectCount = 0;
    return;
  }

  currentQuizIndex += 1;
  renderQuizQuestion();
});

renderQuizQuestion();
renderTerms();
