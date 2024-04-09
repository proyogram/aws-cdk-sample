# 前提

node_modulesをインストールする。
※pushする際node_modulesはignoreされるため、node_modulesが必要な場合インストールする。

`$ npm install cdk`

各アカウントの新規リージョンにて（一回限り）

`$ cdk bootstrap`


# cdk始め方

## 方法① - sampleをコピペ

```
$ cp -r sample <new_project>
$ cd <new_project>
```

## 方法② - ゼロから作成

```
$ mkdir myapp
$ cd myapp
$ cdk init app --language typescript
```
# Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
