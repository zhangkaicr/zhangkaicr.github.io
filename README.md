# 张凯 · 学术主页（中英双语）

基于官方 [Academic Pages](https://academicpages.github.io/) / Minimal Mistakes **Jekyll 模板**构建，部署在 GitHub Pages：<https://zhangkaicr.github.io/>。

模板源码：<https://github.com/academicpages/academicpages.github.io>（MIT License）。本站保留其目录结构（`_config.yml` / `_pages` / `_publications` / `_talks` / `_teaching` / `_data` / `_includes` / `_layouts` / `_sass`），并叠加了一层中英双语支持。

## 部署方式

- **不使用**「Deploy from a branch」的 legacy Jekyll 构建，而是走官方模板自带的 `.github/workflows/jekyll.yml`（GitHub Actions，Jekyll 4.4 + Ruby 3.1）。
- GitHub Pages 设置里 Source 必须是 **GitHub Actions**（不是 "Deploy from a branch"）。
- 默认分支 `main`；每次 push 自动构建、部署到 `https://zhangkaicr.github.io/`。
- 本地预览需要 Ruby 3.1 + Bundler：`bundle install` → `npm run build` → `bundle exec jekyll serve -l -H localhost`。

## 中英双语是怎么做的

不用 Jekyll 多语言插件（GitHub Pages 不支持任意插件），全部由模板自带的 Liquid + 一个原生 JS 完成：

| 文件 | 作用 |
| --- | --- |
| `_data/i18n.yml` | 侧栏、顶栏、页脚等界面文案的中英字段 |
| `_data/navigation.yml` | 导航项 `title`（英）/ `title_zh`（中） |
| `_includes/head/custom.html` | 加载 `bilingual.css`；**在 `<head>` 里尽早**根据 `?lang=` / localStorage / 浏览器语言设置 `<html data-lang>`，避免闪烁 |
| `_includes/footer/custom.html` | 加载 `lang-switch.js` + 双语页脚说明 |
| `assets/css/bilingual.css` | `html[data-lang="zh"] .lang-en { display:none }`（反之亦然）+ 所有 `kz-` 前缀内容组件 |
| `assets/js/lang-switch.js` | 点击切换、同步按钮状态、`<html lang>`、标题、meta description、URL `?lang=`、localStorage；顺带做论文筛选 |
| `_includes/masthead.html` / `author-profile.html` | 顶栏与作者侧栏渲染 `.lang-zh` / `.lang-en` 两套文本和语言按钮 |
| `_layouts/single.html` / `archive.html` | 页面标题支持 `title_zh` / `title_en` 双语 |

- **一键切换**：顶栏和侧栏各有 `中文 / EN` 按钮，点击即时切换、不刷新页面。
- 优先级：`?lang=zh|en` > 浏览器本地记忆 > 浏览器语言（中文环境默认中文）。
- 可分享固定语言链接： `https://zhangkaicr.github.io/?lang=en`、`https://zhangkaicr.github.io/?lang=zh`。
- 所有正文用 `<div class="lang-zh">…</div><div class="lang-en">…</div>` 成对书写；论文标题、期刊名按学术惯例保留英文原文，不做翻译。

## 内容在哪改

| 想改什么 | 改哪里 |
| --- | --- |
| 姓名 / 单位 / 侧栏链接 / ORCID | `_config.yml` 的 `author` 段 + `_data/i18n.yml` |
| 导航项 | `_data/navigation.yml` |
| 首页、简历、教学、报告、科普、联系页 | `_pages/about.md`、`cv.md`、`talks.html`、`teaching.html`、`outreach.md`、`contact.md` |
| 新增论文 | 在 `_publications/` 新建一个 `.md`，参考现有文件的 front matter（`title/year/venue/doi/pmid/tag_zh/tag_en`），列表页自动收录 |
| 新增报告 / 课程 | `_talks/` 或 `_teaching/` 新建 `.md` |
| 界面文案、组件样式 | `_data/i18n.yml` / `assets/css/bilingual.css` |
| 讲义等附件 | `files/` 目录，通过 `/files/<文件名>` 访问 |

## 内容来源

- **15 篇论文**：ORCID 公开记录 `0000-0002-2292-3696`（含 DOI / PubMed）。ORCID 私有链接 `/my-orcid?orcid=...` 已统一换成公开地址 `https://orcid.org/0000-0002-2292-3696`。
- **单位**：中国医学科学院肿瘤医院 · 肝胆外科（本人提供）。
- **教育 / 工作经历 / 技能**：来自 `简历.docx`。**手机号、年龄、婚姻状况等隐私信息未发布在公网上**。
- **CCI 2025 受邀报告**：来自年会邀请函与会议沟通记录，2025.11.22 南京、15 分钟；29 页讲义放在 `files/KaiZhang-TTE-CCI2025.pptx`。
- **公众号**：「灵活胖子的科研进步之路」「灵活胖子的柳叶刀进步之路」，微信内搜索名称关注（公众号没有公开直链）。
- **B站**：`https://space.bilibili.com/627812104`；**小红书**：小红书号 `94148178085`，当前链接指向站内搜索结果页，拿到 `/user/profile/...` 形式的个人主页后替换即可。
- `teaching` 三条为按现有课程/视频方向整理的描述，可按实际开课情况调整。
- 头像 `images/kz-avatar.svg` 目前是 KZ 字母组合，换成真实照片后改 `_config.yml` 的 `author.avatar`。

## 回滚

`static-version` 分支保留了改版前的零构建静态站版本。如需回退，同时把 GitHub Pages 的 Source 改回 "Deploy from a branch"（main / 根目录）。
