---
layout: cover
hideInToc: true
---

<h3 style="font-weight: 600; width: 40%">
Speech-Processing-Pipeline to overcome langauge barriers in real-time communication
</h3>

<hr class="my-4" style="width: 55%; border-color: #94a8ff" />

Colloquium B.Sc. Computer Science

<p style="font-size: smaller;">
Environmental Informatics and Business Information Systems
<br/>
Trier University of Applied Sciences, Environmental Campus Birkenfeld
<br/>
by Jason Rietzke
</p>

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
