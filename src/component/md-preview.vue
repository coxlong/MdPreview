<template>
	<div style="width: 100%;">
		<VMdEditor height="90%"
			:model-value="modelValue"
			:include-level="[1,2,3]"
			:default-show-toc="true" />
	</div>
</template>

<script>

import VMdEditor from '@kangc/v-md-editor';

import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import createTipPlugin from '@kangc/v-md-editor/lib/plugins/tip/index.js';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index.js';

import '@kangc/v-md-editor/lib/style/base-editor.css';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import '@kangc/v-md-editor/lib/plugins/tip/tip.css';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';

import hljs from 'highlight.js';

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

VMdEditor.use(createTipPlugin());
VMdEditor.use(createCopyCodePlugin());

export default {
  name: 'MdPreview',
  components: {
    VMdEditor,
  },
  props: {
    modelValue: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
<style lang="scss">
.v-md-editor__left-area-title {
  height: 41px !important;
  line-height: 41px !important;
}
.v-md-editor__toolbar {
  display: none;
}
.v-md-editor__editor-wrapper {
  display: none;
}
</style>
