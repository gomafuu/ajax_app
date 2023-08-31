const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};
function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    // form要素を取得し、変数formに格納↓
    const form = document.getElementById("form");
    // ()内要素に入力された値を取得できる↓
    const formData = new FormData(form);
    // JSを用いてサーバとHTTP通信を行う時に利用するオブジェクト。newで新しいオブジェクトを生成
    const XHR = new XMLHttpRequest();
    XHR.open("POST","/posts",true);
    // レスポンスデータをJson形式で返却
    XHR.responseType = "json";
    // リクエストを送信
    XHR.send(formData);
    // リクエスト送信成功で呼び出されるプロパティ
    XHR.onload = ()=> {
      if(XHR.status != 200){
        alert(`Error ${XHR.status}:${XHR.statusText}`);
        // エラー時以降の処理を行わないようにするため。JSの処理から抜けだす。
        return nulll;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
        // list要素を要素内部最後の子要素の直後に挿入
        list.insertAdjacentHTML("afterend",html);
        formText.value = "";
    };
  });
};

window.addEventListener('load', post);