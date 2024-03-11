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
layout: image
image: /liatrio-bg.png
backgroundSize: contain
---

<div class="text-center" style="display: flex; align-items: center;">
  <span v-mark="{ at: 1, color: '#89df00'}">
    <h1 style="margin: auto;">Github Copilot Lunch & Learn</h1>
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
src: ./pages/0-presenters.md
layout: image
image: /liatrio-bg.png
backgroundSize: contain
---

---
src: ./pages/1-intro.md
layout: image
image: /liatrio-bg.png
backgroundSize: contain
---

---
src: ./pages/2-platform-dev.md
layout: image
image: /liatrio-bg.png
backgroundSize: contain
---

---
src: ./pages/3-feature-dev.md
layout: image
image: /liatrio-bg.png
backgroundSize: contain
---

---
src: ./pages/4-optimization-experience.md
layout: image
image: /liatrio-bg.png
backgroundSize: contain
---

---
src: ./pages/5-enterprise.md
layout: image
image: /liatrio-bg.png
backgroundSize: contain
---
