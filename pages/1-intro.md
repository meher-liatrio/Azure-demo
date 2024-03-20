# Agenda
<div v-click style="border: 2px double #24ae1d; border-radius: 10px; padding: 10px;">
    <span v-mark="{ at: 1, color: '#89df00'}">
    Deploy a simple web app to a custom Azure VM instance created using Packer and stored on Azure Image Gallery
    </span>
</div>

<div v-click style="border: 2px double #24ae1d; border-radius: 10px; padding: 10px;">
    <span v-mark="{ at: 2, color: '#89df00'}">
            Compare to AWS
    </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/meher-liatrio/Azure-demo" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>
<!-- 
Today I will be showing you how to deploy a simple web app to a custom Azure VM instance that was built using the Packer and
deployed to the Azure Image Gallery.
-->

---
transition: fade-out
---
# Steps
<br>

<div grid="~ cols-3 gap-6">

<div v-click style="border: 2px double #24ae1d; border-radius: 10px; padding: 10px;">
    <div style="display: flex; align-items: center;">
        <img src="https://code.benco.io/icon-collection/azure-icons/Resource-Groups.svg" alt="Resource Group" width="20" height="20">
        <p style="margin-left: 10px;">Resource Group</p>
    </div>
</div>

<div v-click style="border: 2px double #24ae1d; border-radius: 10px; padding: 10px;">
    <div style="display: flex; align-items: center;">
        <img src="https://code.benco.io/icon-collection/azure-icons/Shared-Image-Galleries.svg" alt="Shared Image Gallery" width="20" height="20">
        <p style="margin-left: 10px;">Shared Image Gallery</p>
    </div>
</div>

<div v-click style="border: 2px double #24ae1d; border-radius: 10px; padding: 10px;">
    <div style="display: flex; align-items: center;">
        <img src="https://code.benco.io/icon-collection/azure-icons/Image-Definitions.svg" alt="Image Definition" width="20" height="20">
        <p style="margin-left: 10px;">Image Definition</p>
    </div>
</div>

<div v-click style="border: 2px double #24ae1d; border-radius: 10px; padding: 10px;">
    <div style="display: flex; align-items: center;">
        <img src="https://code.benco.io/icon-collection/azure-icons/Image-Versions.svg" alt="Image Verion" width="20" height="20">
        <p style="margin-left: 10px;">Image Version</p>
    </div>
</div>

<div v-click style="border: 2px double #24ae1d; border-radius: 10px; padding: 10px;">
    <div style="display: flex; align-items: center;">
        <img src="https://code.benco.io/icon-collection/azure-icons/Azure-AD-Roles-and-Administrators.svg" alt="ad sp contributor role" width="20" height="20">
        <p style="margin-left: 10px;">Create a service principal and configure its access to Azure resources.</p>
    </div>
</div>

<div v-click style="border: 2px double #24ae1d; border-radius: 10px; padding: 10px;">
    <div style="display: flex; align-items: center;">
        <img src="https://www.datocms-assets.com/2885/1620155106-brandhcpackerverticalcolor.svg" alt="ad sp contributor role" width="20" height="20">
        <p style="margin-left: 10px;">Build a Golden Image with Packer</p>
    </div>
</div>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/meher-liatrio/Azure-demo" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>
<!--
Talk briefly to each of these sections but also don't overrotate on any one.  The presenter will go over these sections in more detail later on in lunch and learn.
-->

