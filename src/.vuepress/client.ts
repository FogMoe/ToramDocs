import { defineClientConfig } from "vuepress/client";
import { defineGiscusConfig } from "vuepress-plugin-comment2/client";

import Layout from "./layouts/Layout.vue";

defineGiscusConfig({
    repo: "scarletkc/ToramDocs",
    repoId:"R_kgDOLNRfNw",
    category:"Announcements",
    categoryId:"DIC_kwDOLNRfN84Cc8TE",
});

export default defineClientConfig({
  layouts: {
    // We override the default layout to provide comment service
    Layout,
  },
});
