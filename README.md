# express-wx
WeChat service based on Express.
- [Docker 镜像](https://hub.docker.com/r/linzechao/express-wx/)

### 命令
```bash
# 构建镜像（Dockerfile 文件）
# 最后一个点 [.] 表示当前目录
docker image build -t linzechao/express-wx:x.y.z .

# 生成进行并运行
docker container run -d -p 8000:3000 -it linzechao/express-wx:x.y.z

# 最后提交
docker image push linzechao/express-wx:x.y.z
```
