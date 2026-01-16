# Computers

Types:

- <code><a href="./src/resources/computers/computers.ts">ComputerCreateResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerRetrieveResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerListResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerCaptureScreenshotResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerClickResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerDebugResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerDoubleClickResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerDragResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerExecuteActionResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerExecuteBatchResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerGetHTMLResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerKeepAliveResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerKeyDownResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerKeyUpResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerMouseDownResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerMouseUpResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerNavigateResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerPressHotkeyResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerRightClickResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerScrollViewportResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerSetViewportResponse</a></code>
- <code><a href="./src/resources/computers/computers.ts">ComputerTypeTextResponse</a></code>

Methods:

- <code title="post /computers">client.computers.<a href="./src/resources/computers/computers.ts">create</a>({ ...params }) -> ComputerCreateResponse</code>
- <code title="get /computers/{id}">client.computers.<a href="./src/resources/computers/computers.ts">retrieve</a>(id) -> ComputerRetrieveResponse</code>
- <code title="get /computers">client.computers.<a href="./src/resources/computers/computers.ts">list</a>() -> ComputerListResponse</code>
- <code title="post /computers/{id}/screenshot">client.computers.<a href="./src/resources/computers/computers.ts">captureScreenshot</a>(id, { ...params }) -> ComputerCaptureScreenshotResponse</code>
- <code title="post /computers/{id}/click">client.computers.<a href="./src/resources/computers/computers.ts">click</a>(id, { ...params }) -> ComputerClickResponse</code>
- <code title="get /computers/{id}/ws">client.computers.<a href="./src/resources/computers/computers.ts">connectWebsocket</a>(id) -> void</code>
- <code title="post /computers/{id}/debug">client.computers.<a href="./src/resources/computers/computers.ts">debug</a>(id, { ...params }) -> ComputerDebugResponse</code>
- <code title="post /computers/{id}/double-click">client.computers.<a href="./src/resources/computers/computers.ts">doubleClick</a>(id, { ...params }) -> ComputerDoubleClickResponse</code>
- <code title="post /computers/{id}/drag">client.computers.<a href="./src/resources/computers/computers.ts">drag</a>(id, { ...params }) -> ComputerDragResponse</code>
- <code title="post /computers/{id}/execute">client.computers.<a href="./src/resources/computers/computers.ts">executeAction</a>(id, { ...params }) -> ComputerExecuteActionResponse</code>
- <code title="post /computers/{id}/batch">client.computers.<a href="./src/resources/computers/computers.ts">executeBatch</a>(id, { ...params }) -> ComputerExecuteBatchResponse</code>
- <code title="post /computers/{id}/html">client.computers.<a href="./src/resources/computers/computers.ts">getHTML</a>(id, { ...params }) -> ComputerGetHTMLResponse</code>
- <code title="post /computers/{id}/keepalive">client.computers.<a href="./src/resources/computers/computers.ts">keepAlive</a>(id) -> ComputerKeepAliveResponse</code>
- <code title="post /computers/{id}/key-down">client.computers.<a href="./src/resources/computers/computers.ts">keyDown</a>(id, { ...params }) -> ComputerKeyDownResponse</code>
- <code title="post /computers/{id}/key-up">client.computers.<a href="./src/resources/computers/computers.ts">keyUp</a>(id, { ...params }) -> ComputerKeyUpResponse</code>
- <code title="post /computers/{id}/mouse-down">client.computers.<a href="./src/resources/computers/computers.ts">mouseDown</a>(id, { ...params }) -> ComputerMouseDownResponse</code>
- <code title="post /computers/{id}/mouse-up">client.computers.<a href="./src/resources/computers/computers.ts">mouseUp</a>(id, { ...params }) -> ComputerMouseUpResponse</code>
- <code title="post /computers/{id}/navigate">client.computers.<a href="./src/resources/computers/computers.ts">navigate</a>(id, { ...params }) -> ComputerNavigateResponse</code>
- <code title="post /computers/{id}/hotkey">client.computers.<a href="./src/resources/computers/computers.ts">pressHotkey</a>(id, { ...params }) -> ComputerPressHotkeyResponse</code>
- <code title="post /computers/{id}/right-click">client.computers.<a href="./src/resources/computers/computers.ts">rightClick</a>(id, { ...params }) -> ComputerRightClickResponse</code>
- <code title="post /computers/{id}/scroll">client.computers.<a href="./src/resources/computers/computers.ts">scrollViewport</a>(id, { ...params }) -> ComputerScrollViewportResponse</code>
- <code title="post /computers/{id}/viewport">client.computers.<a href="./src/resources/computers/computers.ts">setViewport</a>(id, { ...params }) -> ComputerSetViewportResponse</code>
- <code title="get /computers/{id}/events">client.computers.<a href="./src/resources/computers/computers.ts">streamEvents</a>(id) -> void</code>
- <code title="get /computers/{id}/screencast">client.computers.<a href="./src/resources/computers/computers.ts">streamScreencast</a>(id) -> void</code>
- <code title="delete /computers/{id}">client.computers.<a href="./src/resources/computers/computers.ts">terminate</a>(id) -> void</code>
- <code title="post /computers/{id}/type">client.computers.<a href="./src/resources/computers/computers.ts">typeText</a>(id, { ...params }) -> ComputerTypeTextResponse</code>

## Tabs

Types:

- <code><a href="./src/resources/computers/tabs.ts">TabCreateResponse</a></code>
- <code><a href="./src/resources/computers/tabs.ts">TabListResponse</a></code>
- <code><a href="./src/resources/computers/tabs.ts">TabDeleteResponse</a></code>
- <code><a href="./src/resources/computers/tabs.ts">TabSwitchResponse</a></code>

Methods:

- <code title="post /computers/{id}/tabs">client.computers.tabs.<a href="./src/resources/computers/tabs.ts">create</a>(id, { ...params }) -> TabCreateResponse</code>
- <code title="get /computers/{id}/tabs">client.computers.tabs.<a href="./src/resources/computers/tabs.ts">list</a>(id) -> TabListResponse</code>
- <code title="delete /computers/{id}/tabs/{tab_id}">client.computers.tabs.<a href="./src/resources/computers/tabs.ts">delete</a>(tabID, { ...params }) -> TabDeleteResponse</code>
- <code title="post /computers/{id}/tabs/{tab_id}/switch">client.computers.tabs.<a href="./src/resources/computers/tabs.ts">switch</a>(tabID, { ...params }) -> TabSwitchResponse</code>
