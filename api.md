# Computers

Types:

- <code><a href="./src/resources/computers/computers.ts">ActionResult</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerListResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerExecuteBatchResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerKeepAliveResponse</a></code>

Methods:

- <code title="post /computers">client.computers.<a href="./src/resources/computers/computers.ts">create</a>({ ...params }) -> ComputerResponse</code>
- <code title="get /computers/{id}">client.computers.<a href="./src/resources/computers/computers.ts">retrieve</a>(id) -> ComputerResponse</code>
- <code title="get /computers">client.computers.<a href="./src/resources/computers/computers.ts">list</a>() -> ComputerListResponse</code>
- <code title="post /computers/{id}/screenshot">client.computers.<a href="./src/resources/computers/computers.ts">captureScreenshot</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/click">client.computers.<a href="./src/resources/computers/computers.ts">click</a>(id, { ...params }) -> ActionResult</code>
- <code title="get /computers/{id}/ws">client.computers.<a href="./src/resources/computers/computers.ts">connectWebsocket</a>(id) -> void</code>
- <code title="post /computers/{id}/debug">client.computers.<a href="./src/resources/computers/computers.ts">debug</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/double-click">client.computers.<a href="./src/resources/computers/computers.ts">doubleClick</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/drag">client.computers.<a href="./src/resources/computers/computers.ts">drag</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/execute">client.computers.<a href="./src/resources/computers/computers.ts">executeAction</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/batch">client.computers.<a href="./src/resources/computers/computers.ts">executeBatch</a>(id, { ...params }) -> ComputerExecuteBatchResponse</code>
- <code title="post /computers/{id}/html">client.computers.<a href="./src/resources/computers/computers.ts">getHTML</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/keepalive">client.computers.<a href="./src/resources/computers/computers.ts">keepAlive</a>(id) -> ComputerKeepAliveResponse</code>
- <code title="post /computers/{id}/key-down">client.computers.<a href="./src/resources/computers/computers.ts">keyDown</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/key-up">client.computers.<a href="./src/resources/computers/computers.ts">keyUp</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/mouse-down">client.computers.<a href="./src/resources/computers/computers.ts">mouseDown</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/mouse-up">client.computers.<a href="./src/resources/computers/computers.ts">mouseUp</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/navigate">client.computers.<a href="./src/resources/computers/computers.ts">navigate</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/hotkey">client.computers.<a href="./src/resources/computers/computers.ts">pressHotkey</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/right-click">client.computers.<a href="./src/resources/computers/computers.ts">rightClick</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/scroll">client.computers.<a href="./src/resources/computers/computers.ts">scrollViewport</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/viewport">client.computers.<a href="./src/resources/computers/computers.ts">setViewport</a>(id, { ...params }) -> ActionResult</code>
- <code title="get /computers/{id}/events">client.computers.<a href="./src/resources/computers/computers.ts">streamEvents</a>(id) -> void</code>
- <code title="get /computers/{id}/screencast">client.computers.<a href="./src/resources/computers/computers.ts">streamScreencast</a>(id) -> void</code>
- <code title="delete /computers/{id}">client.computers.<a href="./src/resources/computers/computers.ts">terminate</a>(id) -> void</code>
- <code title="post /computers/{id}/type">client.computers.<a href="./src/resources/computers/computers.ts">typeText</a>(id, { ...params }) -> ActionResult</code>

## Tabs

Methods:

- <code title="post /computers/{id}/tabs">client.computers.tabs.<a href="./src/resources/computers/tabs.ts">create</a>(id, { ...params }) -> ActionResult</code>
- <code title="get /computers/{id}/tabs">client.computers.tabs.<a href="./src/resources/computers/tabs.ts">list</a>(id) -> ActionResult</code>
- <code title="delete /computers/{id}/tabs/{tab_id}">client.computers.tabs.<a href="./src/resources/computers/tabs.ts">delete</a>(tabID, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/tabs/{tab_id}/switch">client.computers.tabs.<a href="./src/resources/computers/tabs.ts">switch</a>(tabID, { ...params }) -> ActionResult</code>

# Agent

## Tasks

Types:

- <code><a href="./src/resources/agent/tasks.ts">TaskListResponse</a></code>
- <code><a href="./src/resources/agent/tasks.ts">TaskGetStatusResponse</a></code>
- <code><a href="./src/resources/agent/tasks.ts">TaskSendMessageResponse</a></code>
- <code><a href="./src/resources/agent/tasks.ts">TaskStartResponse</a></code>
- <code><a href="./src/resources/agent/tasks.ts">TaskStartByIDResponse</a></code>
- <code><a href="./src/resources/agent/tasks.ts">TaskStreamUpdatesResponse</a></code>

Methods:

- <code title="get /agent/tasks">client.agent.tasks.<a href="./src/resources/agent/tasks.ts">list</a>() -> TaskListResponse</code>
- <code title="get /agent/tasks/{task_id}/status">client.agent.tasks.<a href="./src/resources/agent/tasks.ts">getStatus</a>(taskID) -> TaskGetStatusResponse</code>
- <code title="post /agent/tasks/{task_id}/messages">client.agent.tasks.<a href="./src/resources/agent/tasks.ts">sendMessage</a>(taskID, { ...params }) -> TaskSendMessageResponse</code>
- <code title="post /agent/tasks">client.agent.tasks.<a href="./src/resources/agent/tasks.ts">start</a>({ ...params }) -> TaskStartResponse</code>
- <code title="post /agent/tasks/{task_id}">client.agent.tasks.<a href="./src/resources/agent/tasks.ts">startByID</a>(taskID, { ...params }) -> TaskStartByIDResponse</code>
- <code title="get /agent/tasks/{task_id}/stream">client.agent.tasks.<a href="./src/resources/agent/tasks.ts">streamUpdates</a>(taskID) -> string</code>
