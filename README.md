# ReactNativeSample

ReactNaitiveでは
・Expo CLI
・React Native CLI
の二つを選択する。

Expo CLI：モバイル開発に慣れていない場合
React Native CLI：モバイル開発に慣れてる場合


Macの場合

```
brew install node
brew install watchman
```




```
brew install watchman
```


```
#npm install -g react-native-cli

#プロジェクト作成
npx react-native init project-name
cd project-name
#実行
npx react-native run-ios

```


```
react-native start
react-native run-ios
```



- TouchableOpacity

タッチした時に透明になる。
ビューをタッチに適切に応答させるためのラッパー。
押し下げると、ラップされたビューの不透明度が下がり、暗くなります。 
Animated.Viewをラッパーしている。


- Props

コンポーネントに受け渡す値をPropsに設定できる。
Props.nameとかでnameを受け取れる。


- react-native-video-cache

https://github.com/zhigang1992/react-native-video-cache


## ルーティングとナビゲーション


[React Navigationで画面遷移を実現する](https://codezine.jp/article/detail/12150?p=1)

[React Native Navigation](https://wix.github.io/react-native-navigation/docs/before-you-start/)

[React Native Router Flux](https://github.com/aksonov/react-native-router-flux)

[React Router Native](https://v5.reactrouter.com/native/guides/philosophy)


## redux

redux単体の説明。

- Actions

Actionsとは何をするアクションなのかを示すオブジェクト。typeプロパティを持つ。


```
const INCREMENT = { type: 'INCREMENT' }
const DECREMENT = { type: 'DECREMENT' }
```


- Action Creators

Action CreatorsとはActionを作成するメソッド。


```
function increment() {
  return INCREMENT
}
function decrement() {
  return DECREMENT
}
```

- Reducers

ReducersはActionとStateから新しく作成したStateを返す。


```
function counter(state, action) {
  if (typeof state === 'undefined') {
    // 初期値は0として返却する
    return 0
  }

  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
```

- Store

Storeはアプリの状態を管理。

Store.dispatchでStateを更新。

```
// 「+」ボタンを選択した場合
document.getElementById('increment')
  .addEventListener('click', function () {
    store.dispatch(increment())
  })

// 「-」ボタンを選択した場合
document.getElementById('decrement')
  .addEventListener('click', function () {
    store.dispatch(decrement())
  })
```

Store.subscribeでState状態を取得。

```
// Click数を示すDOMの取得
var valueEl = document.getElementById('value')
// 最新のstateの状態をClick数に反映するメソッド
function render() {
  valueEl.innerHTML = store.getState().toString()
}
// 初期状態を表示するために実行
render()
// subscribeの第一引数にrenderメソッドを指定
store.subscribe(render)
```




# 参考資料

[React Native + TypeScript で iOS アプリのひな形を作る](https://qiita.com/s_inokuma/items/ac59a2705715998aeaa0)
[ソース](https://github.com/sinokuma/rn-sample-app)


https://insidert.medium.com/guide-on-authenticating-mobile-application-with-laravel-sanctum-fdfe44a5afd9

https://medium.com/mesan-digital/tutorial-4-how-to-build-a-laravel-5-4-jwt-powered-mobile-app-api-4c59109d35f

https://github.com/MosesEsan/mesan-laravel-jwt-authentication-quotes-api#step1

https://medium.com/mesan-digital/how-to-build-a-react-native-app-using-firebase-part-1-1210fa206714

Mesan React Native Authentication App (Expo Version)
https://github.com/MosesEsan/mesan-react-native-authentication-app

ReactNative 簡単なSample集
https://qiita.com/macotok/items/591705b768db0473e1d3

React Nativeでメモアプリを作ろう
https://codezine.jp/article/detail/12271?p=1


【React Native入門】Java Scriptでアプリ作ろう【Reactやったことない人向け】１
https://qiita.com/YutamaKotaro/items/dd7846c6db15e2307daa


[Reduxの基礎を学ぼう！〜iOSエンジニアが苦しんだReduxの基礎(1)〜](https://grandbig.github.io/blog/2016/12/31/redux-base-1/)

https://grandbig.github.io/blog/2017/01/01/redux-base-2/

