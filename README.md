express-wx
====

WeChat service based on Express.

- [Docker 镜像](https://hub.docker.com/r/linzechao/express-wx/)

### 本地开发
```bash
# 安装
yarn

# windows 启动调试
yarn dev

# http://localhost:3000
```

### 使用 Docker 部署服务器
```bash
# 1. 拉取拉取最新版本
# 其中 x.y.z 请查看历史版本
# docker image pull linzechao/express-wx:x.y.z
docker image pull linzechao/express-wx

# 或者拉取源代码，自己构建镜像（Dockerfile 文件）
git clone https://github.com/linzechao/express-wx.git
cd express-wx
# 构建（最后一个点 [.] 表示当前目录）
docker image build -t linzechao/express-wx:x.y.z .

# 2. 生成进行并运行容器（瞬间级别启动）
# docker container run -d -p 8000:3000 -it linzechao/express-wx:x.y.z
docker container run -d -p 8000:3000 -it linzechao/express-wx
# 查看 http://www.mrsuper.top:8000

# 最后提交
# docker image push linzechao/express-wx:x.y.z
docker image push linzechao/express-wx
```

### 注意的坑
- 跨域中间件处理**必须**放在所有路由**前面**
- 400/500 中间件处理**必须**放在所有路由**后面**
