floster
=======


## ナビゲーションなどのコンテンツをスクロールに追従させ、画面の上下に接着させるjQueryプラグイン。  


###以下をscriptに記述

    $(element).floater()


###オプションは以下の通り。

- agility: 0～1。0はナビが通り過ぎるまで待つ。1はナビの末端が出るとす ぐ動きだす。初期値は1  
- speed: アニメーションにかける時間。初期値は1000ms  
- easing: イージング。初期値は'swing'  
- fixed: trueでposition: fixedに切り替え。初期値はfalse。  


####オプションの適用方法は以下の通り

    $("nav").floater({
        wait: 0.75,
        speed: 800,
        easing: "easeInQuad"
    });
