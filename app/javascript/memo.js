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
  });
};

window.addEventListener('load', post);