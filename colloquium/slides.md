---
theme: default
aspectRatio: "16/9"
lineNumbers: false
download: true
drawings:
    persist: false
title: Speech-Processing-Pipeline to overcome language barriers in real-time communication
src: ./slides/cover.md
---

---
src: ./slides/overview.md
---

---
src: ./slides/background.md
---

---
src: ./slides/audio-data.md
---

---
src: ./slides/speech-processing.md
---

---
layout: intro
---

# Live Demo

visit [Notitia Alternis](https://alternis.notitia.world)

<div style="position: absolute; top: 33%; right: 10%;">
	<nta-audio-indicator width="250px" height="150px" indicatorWidth="10px" color="#94a8ff" :playing="playing" />
</div>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { NtaAudioIndicator } from '@lr-notitia/notitia-ui/components';

const playing = ref(false);

onMounted(() => {
	setTimeout(() => {
		playing.value = true;
	}, 1000);
})
</script>
