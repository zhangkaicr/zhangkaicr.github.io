# 张凯 · 学术主页（中英双语）

以 [academicpages / Minimal Mistakes](https://github.com/academicpages/academicpages.github.io) 的「左侧作者侧栏 + 右侧内容」版式为参考重做的**零构建静态站**，部署于 GitHub Pages：`https://zhangkaicr.github.io/`。

不使用 Jekyll，不需要 Ruby／bundle，仓库里的 `.nojekyll` 保证 GitHub 直接按静态文件发布。

## 文件结构

```
.
├── index.html            页面骨架（一般不用改）
├── 404.html              404 自动跳回首页
├── .nojekyll             禁止 GitHub 跑 Jekyll 构建
├── assets/
│   ├── content.js        ★ 全部文案与数据，日常只改这个文件
│   ├── app.js            渲染 + 中英切换逻辑
│   ├── style.css         样式
│   └── favicon.svg
└── README.md
```

## 一键切换怎么工作

- 侧栏（桌面）和顶部条（手机）各有 `中文 / EN` 按钮，点一下**即时切换**，不刷新页面。
- 优先级：`?lang=zh` / `?lang=en` > 浏览器本地记忆（localStorage）> 浏览器语言（中文环境默认中文，其他默认英文）。
- 切换时同步更新：全部文案、`<html lang>`、`<title>`、meta description、URL 中的 `?lang=`。
- 可分享固定语言链接：`https://zhangkaicr.github.io/?lang=en`、`https://zhangkaicr.github.io/?lang=zh`。

## 怎么改内容

只编辑 `assets/content.js`：

| 想改什么 | 改哪里 |
| --- | --- |
| 姓名 / 头衔 / 单位 / 地点 | `profile.zh` 与 `profile.en` |
| 界面文案、各段中英文正文 | `i18n.zh` / `i18n.en` / `about.zh` / `about.en` |
| 新增论文 | 往 `publications` 追加 `{ year, title, journal, doi, pmid, tag:{zh,en} }`，标题保留英文原文，两边自动同步 |
| 教育 / 工作 / 学术任务 | `experience.education` / `experience.appointments` / `experience.service` |
| 教学条目 | `teaching` |
| 公众号 / B站 / 小红书 | `outreach`，`href` 为空时只显示名称与提示文字 |
| 侧栏图标链接 | `links` |
| Google Scholar / CV | 在 `meta.scholar` 或 `meta.cv` 填入链接，首页按钮自动出现 |

改完 `git add . && git commit -m "update content" && git push`，GitHub Pages 约 1–2 分钟后更新。

## 本地预览

```bash
cd academic-site
python -m http.server 8000
# 浏览器打开 http://localhost:8000/
```

## 内容来源与待确认项

- **论文**：15 项来自 ORCID 公开记录 `0000-0002-2292-3696`，含 DOI / PubMed 链接。注意 ORCID 里填的是 `/my-orcid?orcid=...` 私有地址，站点统一使用公开地址 `https://orcid.org/0000-0002-2292-3696`。
- **单位**：`中国医学科学院肿瘤医院 · 肝胆外科`（本人提供）。
- **教育 / 工作经历、技能**：来自 `简历.docx`。**手机号、年龄、婚姻状况等隐私信息未发布在公网上**。
- **CCI 2025 学术任务**：来自 2025 中国医师协会介入医师年会邀请函。
- **公众号**：「灵活胖子的科研进步之路」「灵活胖子的柳叶刀进步之路」，微信内搜索名称关注；如要放二维码，把图片放进 `assets/` 并在 `outreach` 里加图片项。
- **B站**：`https://space.bilibili.com/627812104`（UID 由昵称检索确认）。
- **小红书**：小红书号 `94148178085`；目前链接指向站内搜索结果页，如果拿到个人主页 URL（形如 `https://www.xiaohongshu.com/user/profile/xxxx`），直接替换 `meta.xiaohongshu`、`links`、`outreach` 中的地址即可。
- `teaching` 三条为按现有课程/视频方向整理的描述，如需精确课程名与时间可自行调整。
- 头像目前是 KZ 字母组合图形，替换为真实照片：把图片放到 `assets/`，再改 `index.html` 里的 `<a class="avatar">…</a>`。

## 参考与致谢

版式参考 academicpages（forked from Minimal Mistakes，MIT License）。本静态实现为独立重写，无 Jekyll 依赖。
