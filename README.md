express-wx
====

WeChat service based on Express.

- [Docker 镜像](https://hub.docker.com/r/linzechao/express-wx/)


### 开发
```bash
# 安装
yarn

# windows 启动调试
set DEBUG=express:* & yarn dev

# http://localhost:3000
```


### 服务器部署
Docker 命令

```bash
# 拉取
# 其中 x.y.z 请查看最新版本
docker image pull linzechao/express-wx:x.y.z

# 构建镜像（Dockerfile 文件）
# 最后一个点 [.] 表示当前目录
docker image build -t linzechao/express-wx:x.y.z .

# 生成进行并运行
docker container run -d -p 8000:3000 -it linzechao/express-wx:x.y.z
# http://www.mrsuper.top:8000

# 最后提交
docker image push linzechao/express-wx:x.y.z
```
