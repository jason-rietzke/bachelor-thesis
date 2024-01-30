---
layout: intro
---

# Audio Data Reception

<Toc mode="onlySiblings" />

---

## Audio Connection

A generic audio connection class to stream-line all audio input sources to a common interface.

-   allows versatile audio input sources
-   provides a common interface for all internal components to interact with audio data
-   extending the system with new audio input sources is easy

<div v-click>

Converts all input sources to a common waveform representation.

-   each specific input source interface returns a audio connection instance
-   the specific implementation is responsible for converting the input data
-   audio connection is responsible for broadcasting the data to all listeners

</div>

---

## Audio Connection Interface

```ts {all|3-8|1,18-21}
export type EventType = "message" | "close";
export class AudioConnection {
	get closed() {}
	readonly id: string;
	readonly sessionId: string;
	readonly userId: string;
	readonly userName: string | undefined;
	readonly rtpRegisterEntry: RTPRegisterEntry | undefined;

	constructor(
		id: string,
		sessionId: string,
		userId?: string,
		userName?: string,
		rtpRegisterEntry?: RTPRegisterEntry
	) {}

	emitMessage(message: Buffer) {}
	close() {}
	on(type: EventType, cb: (arg: Buffer | void) => void): number {}
	off(id: number) {}
}
```

---

## Web Browser Audio

Web browser audio input source works with WebSockets

-   client establishes a WebSocket connection to the server
-   client records audio data from the microphone
-   client sends the audio data to the server in 200ms chunks
-   server receives the audio data
-   server uses ffmpeg to convert the audio data to waveform data
-   server emits the waveform data using the audio connection interface

---
layout: two-cols
---

## Voice-over-IP Audio

VoIP audio input source works with RTP streams

-   VoIP provider registers RTP stream via HTTP API
-   VoIP provider sends RTP stream to the server
-   server receives the RTP stream (20ms wave data)
-   server emits the waveform data using the audio connection interface

::right::

<v-img src="./img/voip-communication-flow.png" width="600px" height="500px" />
