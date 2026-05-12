# 张紫彤个人简历与作品集网站

这是一个静态网站，可以直接本地预览，也可以部署到任意静态托管服务。

## 更新作品集

作品集数据集中在 `data.js` 的 `portfolioItems` 数组中。新增作品时复制一条对象并修改字段即可，不需要改页面结构。

支持字段：

- `title`：标题
- `category`：分类，可选 `tweet`、`event`、`media`、`ai`
- `description`：描述
- `role`：我的角色
- `coreIdea`：核心思路
- `result`：成果，可留空
- `imageType`：图片类型，可选 `landscape` 或 `vertical`
- `images`：多张图片
- `links`：外部链接
- `excerpt`：媒体内容节选
- `source`：媒体来源

## 替换简历

将你的简历 PDF 命名为 `resume.pdf`，放入 `assets` 文件夹。首页和联系方式里的“下载简历”按钮会自动下载该文件。

## 替换图片

将图片放入 `assets` 文件夹，然后在 `data.js` 的 `images` 中填写路径，例如：

```js
images: [
  { src: "assets/project-01.jpg", alt: "项目截图" },
  { src: "assets/project-02.jpg", alt: "项目现场图" }
]
```
