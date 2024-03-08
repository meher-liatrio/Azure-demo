# Copilot in Action: Day in the Life (Feature Development)

## Add a monitor with a zoom in feature to the next slide

---
transition: zoom
---

<div align="center">

  <h1 style="margin-bottom: 0em;">Improve your GitHub Actions with Copilot</h1>
  
</div>

My workflows runs are 
<span v-mark="{ at: 0, color: '#ffffff' }">
taking too long
</span>
. I need to optimize them, but I'm not sure where to start. Let's ask Copilot!

<div class="abs-br m-6 flex gap-2">
  <span v-mark="{ at: 1, color: '#24ae1d', type: 'circle' }">
    <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
      <carbon:edit />
    </button>
  </span>
</div>

<div align="center">

![GitHub Actions](/1.png){: style="border: 3px double #ebebe8": width=72%}

</div>

<!--
#### Take a moment to discuss transition into this section and how copilot actually helps solve real problems developers are facing.

In the image shown, it shows a workflow file that is taking 2m11s to run.  This seems long for what it is doing. We can ask Copilot for some suggestions on how to optimize this workflow.

1. Press space then select the editor icon to open the file in the editor
  - chat mode ->  #file:deploy.yml Optimize the workflow file
  - modify mode -> Add actions/cache to the workflow
2. Commit the code using the commit message suggested by Copilot
3. Open a pull request and use copilot to suggest a description
4. Watch the workflow and discuss the improvements after multiple runs
-->

---
transition: fade-out
---

## Well, that doesn't seem right

<!-- insert image of a node16 deprecation error -->

I'm getting a deprecation warning for Node.js 16. I'm not sure how to fix it. I'll ask Copilot for some suggestions.

<div class="abs-br m-6 flex gap-2">
  <span v-mark="{ at: 1, color: '#24ae1d', type: 'circle' }">
    <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
      <carbon:edit />
    </button>
  </span>
</div>

<!--
#### This is a great opportunity to use Copilot to not only fix the issue, but also use Dependabot to keep the dependencies up to date.

1. Press space then select the editor icon to open the file in the editor
  - chat mode ->  #file:package.json What should I do about the Node.js 16 deprecation warning?
  - modify mode -> Update the Node.js version to 17

-->
