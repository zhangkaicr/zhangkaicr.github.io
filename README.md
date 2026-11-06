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
| 新增论文 | 在 `_publications/` 新建一个 `.md`，参考现有文件的 front matter（`title/year/venue/doi/pmid/tag_zh/tag_en/summary_zh/summary_en`），列表页自动收录 |
| 新增报告 / 课程 | `_talks/` 或 `_teaching/` 新建 `.md`（课程可带 `period_*` / `meta_*` / `text_*` / `notice`） |
| 软件 / 开源包 | `_pages/software.md` |
| 头像与二维码 | `images/kz-avatar.jpg`、`images/wechat-qr.jpg` |
| 界面文案、组件样式 | `_data/i18n.yml` / `assets/css/bilingual.css` |
| 讲义等附件 | `files/` 目录，通过 `/files/<文件名>` 访问 |

## 内容来源

- **15 篇论文**：ORCID 公开记录 `0000-0002-2292-3696`（含 DOI / PubMed）。ORCID 私有链接 `/my-orcid?orcid=...` 已统一换成公开地址 `https://orcid.org/0000-0002-2292-3696`。
- **单位**：中国医学科学院肿瘤医院 · 肝胆外科（本人提供）。
- **教育 / 工作经历 / 技能**：来自 `简历.docx`。**手机号、年龄、婚姻状况等隐私信息未发布在公网上**。
- **CCI 2025 受邀报告**：来自年会邀请函与会议沟通记录，2025.11.22 南京、15 分钟；29 页讲义放在 `files/KaiZhang-TTE-CCI2025.pptx`。
- **公众号**：「灵活胖子的科研进步之路」「灵活胖子的柳叶刀进步之路」，微信内搜索名称关注（公众号没有公开直链）。
- **B站**：`https://space.bilibili.com/627812104`；**小红书**：小红书号 `94148178085`，当前链接指向站内搜索结果页，拿到 `/user/profile/...` 形式的个人主页后替换即可。
- `teaching` 三条均来自正式培训通知，含学时、形式、主办单位、课程目标与原文链接。
- 头像 `images/kz-avatar.jpg` 来自本人提供的插画；`favicon.svg` / `favicon-*.png` / `apple-touch-icon-*.png` 也都由同一张图生成。换照片后覆盖 `images/kz-avatar.jpg` 并重新运行头像生成脚本即可。
- **研究方向**按名片图设置：因果推断 / 医学人工智能 / 生物信息学（方法学），精准肝脏外科 / 精准医学（临床）；角色为「数据科学家」。
- **Software 页**：介绍本人开发维护的 R 包 [`mlr3HTE`](https://github.com/zhangkaicr/mlr3HTE)（mlr3 原生 HTE 元学习器），文档站 `https://zhangkaicr.github.io/mlr3HTE/`。
- **实战培训课程**来自三篇公众号通知：TTE 实战班（2026.9.12–13，19 学时）、机器学习因果推断 / 个体化治疗决策班（2026.10.24–25，16 学时）、AI Agent 生存分析与动态预测模型班（2026.12.26–27，20 学时）；每条含课程目标与原文链接。
- **公众号二维码** `images/wechat-qr.jpg` 展示在 Outreach 与 Contact 页。
- **每篇论文 / 报告均有中英简要介绍**：论文写在 `_publications/*.md` 的 `summary_zh` / `summary_en` 字段，列表页与详情页都会渲染；报告写在 `_talks/*.md` 的 `summary_zh` / `summary_en`。

## 关于更短的 github.io 网址

GitHub Pages 的用户/组织页网址固定为 `<账号名或组织名>.github.io`，**前缀不能自定义**，也不能用 CNAME 指向别人的 `github.io` 子域。

- 当前 `https://zhangkaicr.github.io/` 来自 GitHub 用户名 `zhangkaicr`。
- `zhangkai` 这个名字已被另一个 GitHub 用户占用（`GET /users/zhangkai` 返回 200），所以 `zhangkai.github.io` 无法取得。
- 想要更短、更贴合姓名的网址，只有两条路：
  1. 在 GitHub 网页新建一个**组织**，用未被占用的名字（已核实可用：`zhangkai-md`、`zhangkai-cams`、`zhangkai-cr`、`zhangkai-lab`、`kai-zhang-cams`），再把本仓库转移到该组织并改名为 `<组织名>.github.io`。转移后 Pages 网址即 `https://<组织名>.github.io/`。创建组织没有公开 API，需要在网页端点一次。
  2. 购买自定义域名（如 `zhangkai.cn`），在仓库加 `CNAME` 文件并在域名商处配置 DNS。

站内链接全部使用根相对路径（`/publications/`、`/software/` 等），迁移到任何域名只需改 `_config.yml` 的 `url` / `repository`，无需改内容。

## 回滚

`static-version` 分支保留了改版前的零构建静态站版本。如需回退，同时把 GitHub Pages 的 Source 改回 "Deploy from a branch"（main / 根目录）。
