# Computers

Types:

- <code><a href="./src/resources/computers.ts">ActionResult</a></code>
- <code><a href="./src/resources/computers.ts">ComputerResponse</a></code>
- <code><a href="./src/resources/computers.ts">ComputerListResponse</a></code>
- <code><a href="./src/resources/computers.ts">ComputerExecuteBatchResponse</a></code>
- <code><a href="./src/resources/computers.ts">ComputerKeepAliveResponse</a></code>

Methods:

- <code title="post /computers">client.computers.<a href="./src/resources/computers.ts">create</a>({ ...params }) -> ComputerResponse</code>
- <code title="get /computers/{id}">client.computers.<a href="./src/resources/computers.ts">retrieve</a>(id) -> ComputerResponse</code>
- <code title="get /computers">client.computers.<a href="./src/resources/computers.ts">list</a>() -> ComputerListResponse</code>
- <code title="post /computers/{id}/screenshot">client.computers.<a href="./src/resources/computers.ts">captureScreenshot</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/click">client.computers.<a href="./src/resources/computers.ts">click</a>(id, { ...params }) -> ActionResult</code>
- <code title="get /computers/{id}/ws">client.computers.<a href="./src/resources/computers.ts">connectWebsocket</a>(id) -> void</code>
- <code title="post /computers/{id}/debug">client.computers.<a href="./src/resources/computers.ts">debug</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/double-click">client.computers.<a href="./src/resources/computers.ts">doubleClick</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/drag">client.computers.<a href="./src/resources/computers.ts">drag</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/execute">client.computers.<a href="./src/resources/computers.ts">executeAction</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/batch">client.computers.<a href="./src/resources/computers.ts">executeBatch</a>(id, { ...params }) -> ComputerExecuteBatchResponse</code>
- <code title="post /computers/{id}/html">client.computers.<a href="./src/resources/computers.ts">getHTML</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/keepalive">client.computers.<a href="./src/resources/computers.ts">keepAlive</a>(id) -> ComputerKeepAliveResponse</code>
- <code title="post /computers/{id}/navigate">client.computers.<a href="./src/resources/computers.ts">navigate</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/hotkey">client.computers.<a href="./src/resources/computers.ts">pressHotkey</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/right-click">client.computers.<a href="./src/resources/computers.ts">rightClick</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/scroll">client.computers.<a href="./src/resources/computers.ts">scrollViewport</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/viewport">client.computers.<a href="./src/resources/computers.ts">setViewport</a>(id, { ...params }) -> ActionResult</code>
- <code title="get /computers/{id}/events">client.computers.<a href="./src/resources/computers.ts">streamEvents</a>(id) -> void</code>
- <code title="get /computers/{id}/screencast">client.computers.<a href="./src/resources/computers.ts">streamScreencast</a>(id) -> void</code>
- <code title="delete /computers/{id}">client.computers.<a href="./src/resources/computers.ts">terminate</a>(id) -> void</code>
- <code title="post /computers/{id}/type">client.computers.<a href="./src/resources/computers.ts">typeText</a>(id, { ...params }) -> ActionResult</code>
