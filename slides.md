---
theme: ./liatrio-theme
background: https://source.unsplash.com/collection/94734566/1920x1080
class: flex
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
defaults:
  foo: true
transition: slide-left
title: Githb Copilot Lunch & Learn
mdc: true
monaco: true
monacoTypesSource: local # or cdn or none
monacoTypesAdditionalPackages:
  - '@slidev/types'
---

# Github Copilot Lunch & Learn

Hosted by Liatrio

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/liatrio/copilot-lunch-and-learn" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
src: ./pages/1-intro.md
---

<!-- this page will be loaded from './pages/1-intro.md' -->
Inline content will be ignored.

---
src: ./pages/2-basic.md
transition: fade-out
---

<!-- this page will be loaded from './pages/3-basic.md' -->
Inline content will be ignored.

---
src: ./pages/3-feature-dev.md
transition: fade-left
---

<!-- this page will be loaded from './pages/4-feature-dev.md' -->
Inline content will be ignored.

---
src: ./pages/4-optimization-experience.md
transition: fade-out
---

<!-- this page will be loaded from './pages/5-optimization-experience.md' -->
Inline content will be ignored.

---
src: ./pages/5-enterprise.md
layout: default
---

<!-- this page will be loaded from './pages/6-enterprise.md' -->
Inline content will be ignored.
