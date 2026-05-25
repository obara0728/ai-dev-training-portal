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

const buttons = document.querySelectorAll(".tab-button");
const views = document.querySelectorAll(".view");
const taskList = document.querySelector("#task-list");

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
