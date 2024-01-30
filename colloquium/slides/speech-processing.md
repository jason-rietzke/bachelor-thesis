---
layout: intro
---

# Speech Processing

<Toc mode="onlySiblings" />

---

## Whisper

OpenAI's open-source audio transcription project

-   is a neural network that translates audio to text
-   comes with automatic language detection
-   supports multi language transcription out of the box
-   use FasterWhisper, a version with cuda support
-   use the largest model available for best results

---

## Microservice

Wrapped in a microservice for easy deployment and integration

-   node.js HTTP API to interact with the service
-   python CLI tool to interact with FasterWhisper
-   node.js app spawns multiple python CLI processes
-   each process is responsible for one transcription
-   creates a worker pool for optimal resource usage of the GPUs

---

## Challenges of near realt-time processing

Whisper is not designed for real-time transcription

-   it is designed to transcribe complete audio files
-   does not support streaming of any kind
-   developed a custom solution to overcome this limitation

<div v-click>

<hr class="my-4" style="border-color: #94a8ff" />

Solution: slice the audio stream into smaller individual audio files

-   loss of context between the slices
-   too small slices result in bad transcription results
-   too large slices result in a delay of the transcription

</div>

---

## Solution for near realt-time processing

The solution is realized in multiple steps

-   detect the start of a speech and start a new message
-   use a buffer to collect incremental audio slices related to the same message
-   transcribe the entire message buffer to keep the context
-   detect the end of a speech to clear the message buffer

<div v-click>

<hr class="my-4" style="border-color: #94a8ff" />

Choice of the transcription interval

-   too short interval results in bad transcription
-   too short interval results in overloading the transcription service
-   too large interval results in undesired delay in the transcription

</div>

---
layout: two-cols
---

## Transcription Interval

Processing times with different numbers of simultanious audio transcriptions

| sim. transcriptions | avg. processing time |
| ------------------- | -------------------- |
| 1                   | 519ms                |
| 2                   | 575ms                |
| 4                   | 983ms                |
| 8                   | 1,693ms              |

the average processing time of processing 100 iterations of 30-second audio streams

::right::

<v-img src="./img/avg-processing-times.png" width="600px" height="500px" />
