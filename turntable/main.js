function draw() {
  // 獲取選項文本框的元素
  var optionsInput = document.getElementById("options-input");

  // 獲取結果區域的元素
  var resultDiv = document.getElementById("result");

  // 獲取選項
  var options = optionsInput.value.split(",");

  // 確認選項是否有效
  if (options.length > 1) {
    // 生成一個隨機整數
    var randomIndex = Math.floor(Math.random() * options.length);

    // 獲取抽籤結果
    var result = options[randomIndex];

    // 將結果顯示在網頁上
    resultDiv.innerHTML = '你抽中了：' + result;
  } else {
    // 如果選項無效，顯示錯誤訊息
    resultDiv.innerHTML = '請輸入兩個以上的選項';
  }
}
