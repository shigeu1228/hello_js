# hello_js  

このプロジェクトはこれからNode.jsを始めようと思ってる人向けのものです  
まずはこのプロジェクトを好き勝手にいじり倒して練習してみてください。  
***  
### Lesson 0

まだNode.jsの環境が無い人は下記のURLからNode.jsの環境を用意してください。
```sh
http://nodejs.jp/
```
  
&nbsp;  

### Lesson 1
  
まずはnodeコマンドを使ってサンプルプログラムを実行してみましょう。  
hello_jsディレクトリに移動し、``node sample.js``と打って実行してみてください。
```sh
call 'hello' function
called callback
```
と出力されれば成功です！  
※``sample.js``を確認して、どこから"call 'hello' function"が出力されてるか確認してみてください。
  
&nbsp;  

### Lesson 2

各種ライブラリをインストールしてみましょう。  
hello_jsディレクトリで``npm install``と打って実行すると、``node_modules``というディレクトリが新たに生成されていると思います。  
これは、``package.json``というファイルに必要なライブラリを列挙して、それらをまとめてインストールするコマンドです。  
※``lodash``というライブラリと、``async.js``というライブラリがどういうものか調べてみてください。  
  
&nbsp;  

### Lesson 3

簡単な関数を作ってみましょう。  
まずはhello_jsディレクトリでテストを実行してみます。  
```sh
mocha test/test.js -R spec
```
すると、下記のようなエラーが出ると思います。
```sh
  #test
    1) add test


  0 passing (2s)
  1 failing

  1) #test add test:
     Error: timeout of 2000ms exceeded
      at null.<anonymous> (/usr/local/lib/node_modules/mocha/lib/runnable.js:175:14)
      at Timer.listOnTimeout (timers.js:124:15)
```
このテストが成功するように、  
``./test/test.js``にあるテストコードを参考にしながら、  
``./services/service.js``にあるadd関数を完成させてみてください。  
&nbsp;  
再度テストを実行して下記のような結果が出力されれば成功です。  
```sh
  #test
    ✓ add test 


  1 passing (11ms)
```
これが、JavaScriptのテスト駆動開発です。  
