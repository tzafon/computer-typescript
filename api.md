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
- <code title="post /computers/{id}/execute">client.computers.<a href="./src/resources/computers.ts">executeAction</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/batch">client.computers.<a href="./src/resources/computers.ts">executeBatch</a>(id, { ...params }) -> ComputerExecuteBatchResponse</code>
- <code title="post /computers/{id}/keepalive">client.computers.<a href="./src/resources/computers.ts">keepAlive</a>(id) -> ComputerKeepAliveResponse</code>
- <code title="post /computers/{id}/navigate">client.computers.<a href="./src/resources/computers.ts">navigate</a>(id, { ...params }) -> ActionResult</code>
- <code title="get /computers/{id}/events">client.computers.<a href="./src/resources/computers.ts">streamEvents</a>(id) -> void</code>
- <code title="delete /computers/{id}">client.computers.<a href="./src/resources/computers.ts">terminate</a>(id) -> void</code>
