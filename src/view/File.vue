<template>
	<div id="content" class="app-mdpreview">
		<MdPreview v-model="content" />
	</div>
</template>

<script>
import { loadState } from '@nextcloud/initial-state';
import MdPreview from '../component/md-preview.vue';
import { getFile } from '../api/files.js';

const fileID = loadState('mdpreview', 'fileID');

export default {
  name: 'File',
  components: {
    MdPreview,
  },
  data() {
    return {
      content: '',
    };
  },
  computed: {
  },
  async mounted() {
    getFile(fileID).then(res => {
      this.content = res.content;
    });
  },
  methods: {
  },
};
</script>
<style scoped>
</style>
