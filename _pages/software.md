---
layout: single
title: "软件 / Software"
title_zh: "软件"
title_en: "Software"
permalink: /software/
author_profile: true
---

<div class="lang-zh">

<p class="kz-note">开发与维护面向临床研究者的开源方法学工具，重点是因果推断与异质性处理效应估计。</p>

<div class="kz-software">
  <div class="kz-software__logo">mlr3<br>HTE</div>
  <div>
    <h3>mlr3HTE <span class="kz-note">· R 包（作者 / 维护者）</span></h3>
    <p>基于 <strong>mlr3</strong> 生态实现的异质性处理效应（HTE / CATE）元学习器工具箱，包含 S-Learner、T-Learner、X-Learner、R-Learner 与 DR-Learner；支持连续、二分类与生存结局，可用于随机对照试验与观察性数据。面向精准医学中「谁从哪种治疗中获益最大」的个体化治疗决策问题。</p>
    <div class="kz-software__links">
      <a href="https://github.com/zhangkaicr/mlr3HTE" target="_blank" rel="noopener noreferrer">GitHub 源码 ↗</a>
      <a href="https://zhangkaicr.github.io/mlr3HTE/" target="_blank" rel="noopener noreferrer">文档站 ↗</a>
    </div>
    <ul class="kz-feature-list">
      <li>S / T / X / R / DR Learner</li>
      <li>CATE · HTE</li>
      <li>连续 / 二分类 / 生存结局</li>
      <li>RCT 与观察性数据</li>
      <li>mlr3 原生接口</li>
      <li>R</li>
    </ul>
  </div>
</div>

<h2 class="kz-subhead">相关方法学工作</h2>

<p>包的定位与我的研究方向一致：把目标试验模拟产生的规范因果问题，交给可靠的估计工具去回答；再用因果模型评估方法（累积增益曲线、Qini 曲线、best_linear_projection 等）判断不同 CATE 估计策略的优劣。相关内容也出现在 <a href="/teaching/">实战培训课程</a>与 <a href="/talks/">学术报告</a>中。</p>

</div>

<div class="lang-en">

<p class="kz-note">Open-source methodological tools for clinical researchers, with a focus on causal inference and heterogeneous treatment effect estimation.</p>

<div class="kz-software">
  <div class="kz-software__logo">mlr3<br>HTE</div>
  <div>
    <h3>mlr3HTE <span class="kz-note">· R package (author / maintainer)</span></h3>
    <p>An <strong>mlr3</strong>-native toolbox of meta-learners for heterogeneous treatment effects (HTE / CATE): S-, T-, X-, R- and DR-Learner. Supports continuous, binary and survival outcomes in both randomized trials and observational data, targeting the precision-medicine question of <em>who benefits most from which treatment</em>.</p>
    <div class="kz-software__links">
      <a href="https://github.com/zhangkaicr/mlr3HTE" target="_blank" rel="noopener noreferrer">GitHub repository ↗</a>
      <a href="https://zhangkaicr.github.io/mlr3HTE/" target="_blank" rel="noopener noreferrer">Documentation ↗</a>
    </div>
    <ul class="kz-feature-list">
      <li>S / T / X / R / DR Learner</li>
      <li>CATE · HTE</li>
      <li>Continuous / binary / survival</li>
      <li>RCT &amp; observational data</li>
      <li>Native mlr3 API</li>
      <li>R</li>
    </ul>
  </div>
</div>

<h2 class="kz-subhead">Related methodological work</h2>

<p>The package sits directly downstream of my research: target trial emulation defines a well-posed causal question, and mlr3HTE provides the estimation machinery to answer it. Model comparison then relies on causal model evaluation tools such as cumulative gain curves, Qini curves and the best linear projection. Related material appears in my <a href="/teaching/">hands-on courses</a> and <a href="/talks/">talks</a>.</p>

</div>
