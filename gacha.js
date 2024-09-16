document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0]; //選択されたファイルを取得 
    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('imageDisplay').src = e.target.result; //画像を表示
        console.log(e.target.result);
    };
    if (file) {
        reader.readAsDataURL(file); //画像ファイルをData URLとして読み込む
    }
});

// 画像を表示
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0]; //選択されたファイルを取得 
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('imageDisplay2').src = e.target.result; //画像を表示
        console.log(e.target.result);
    };
    if (file) {
        reader.readAsDataURL(file); //画像ファイルをData URLとして読み込む
    }
});

//　ガチャ演出用ボタンのクリック検出
function buttonClick(){
    alert('Click');
}


function buttonClick(){
    //id属性追加
    const imageDisplay2 = document.getElementById('imageDisplay2');
    imageDisplay2.classList.add("move");
}

const imageDisplay2 = document.getElementById('imageDisplay2');

imageDisplay2.addEventListener('animationend',() => {
    //アニメーション終了時
    imageDisplay2.classList.remove('move');
    console.log('アニメーション終了。id:moveを削除しました。')
});