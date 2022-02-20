
# 

yarn global add @react-native-community/cli

brew install watchman


# 確認

node -v
npm -v
yarn -v


## 最初の構築時に使った

npx react-native init TsSampleApp --template react-native-template-typescript

cd TsSampleApp
npx react-native run-ios


package.jsonの編集
　nameを変更。　^がついてるとマイナーバージョンのみが固定されてる状態なので、環境差異のトラブルを避けるために^を削除。

```:package.json
"name": "ts-sample-app",
```

Prettierの設定
yarn add --dev --exact prettier

.prettierrc.yamlファイルを作成。
Prettierを追加すると、常にコードフォーマットされるようになる。

```:.prettierrc.yaml
endOfLine: lf
tabWidth: 2
semi: true
singleQuote: true
trailingComma: all

overrides:
  - files: '*.json'
    options:
      parser: json
  - files:
    - '*.md'
    - '*.markdown'
    options:
      parser: markdown
  - files:
    - '*.ts'
    - '*.tsx'
    options:
      parser: typescript
  - files:
    - '*.yml'
    - '*.yaml'
    options:
      parser: yaml
```

## redux

npx create-react-app 005redux-vanilla --template redux



## 雛形作成

アプリに必要なパッケージを入れる。package.jsonの^を消す。

```
yarn add @react-navigation/native
yarn add @react-navigation/stack react-native-safe-area-context react-native-gesture-handler react-native-screens @react-native-community/masked-view
yarn add @react-navigation/material-bottom-tabs react-native-paper
yarn add react-native-vector-icons
yarn add @types/react-native-vector-icons
```

アイフォン用のフォントをビルド成果物に含める。
ios/TsSampleApp/info.plistに定義を追加。

```
<key>UIAppFonts</key>
<array>
    <string>AntDesign.ttf</string>
    <string>Entypo.ttf</string>
    <string>EvilIcons.ttf</string>
    <string>Feather.ttf</string>
    <string>FontAwesome.ttf</string>
    <string>FontAwesome5_Brands.ttf</string>
    <string>FontAwesome5_Regular.ttf</string>
    <string>FontAwesome5_Solid.ttf</string>
    <string>Foundation.ttf</string>
    <string>Ionicons.ttf</string>
    <string>MaterialIcons.ttf</string>
    <string>MaterialCommunityIcons.ttf</string>
    <string>SimpleLineIcons.ttf</string>
    <string>Octicons.ttf</string>
    <string>Zocial.ttf</string>
</array>
```

・CocoaPodsのリポジトリを更新

rm -rf ios/build
cd ios
pod install --repo-update
cd ..




react-native init <プロジェクト名>

react-native init TsReactNative　--version 0.63.4
react-native init TsReactNative

react-native init ts-react-native

yarn add --dev typescript
yarn add --dev react-native-typescript-transformer
yarn add --dev @types/react @types/react-native
yarn tsc --init --pretty --jsx react

yarn add react-native-gesture-handler

tsconfig.jsonのallowSyntheticDefaultImportsのコメントを外す。有効へ




