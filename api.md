# Auth

Types:

- <code><a href="./src/resources/auth.ts">AuthHandleCallbackResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthLogoutResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthRetrieveCurrentUserResponse</a></code>

Methods:

- <code title="get /auth/callback">client.auth.<a href="./src/resources/auth.ts">handleCallback</a>({ ...params }) -> AuthHandleCallbackResponse</code>
- <code title="get /auth/login">client.auth.<a href="./src/resources/auth.ts">initiateLogin</a>() -> void</code>
- <code title="post /auth/logout">client.auth.<a href="./src/resources/auth.ts">logout</a>() -> AuthLogoutResponse</code>
- <code title="get /auth/me">client.auth.<a href="./src/resources/auth.ts">retrieveCurrentUser</a>() -> AuthRetrieveCurrentUserResponse</code>

# Computers

Types:

- <code><a href="./src/resources/computers.ts">ActionResult</a></code>
- <code><a href="./src/resources/computers.ts">ComputerResponse</a></code>
- <code><a href="./src/resources/computers.ts">ComputerExecuteBatchResponse</a></code>
- <code><a href="./src/resources/computers.ts">ComputerKeepAliveResponse</a></code>

Methods:

- <code title="post /computers">client.computers.<a href="./src/resources/computers.ts">create</a>({ ...params }) -> ComputerResponse</code>
- <code title="get /computers/{id}">client.computers.<a href="./src/resources/computers.ts">retrieve</a>(id) -> ComputerResponse</code>
- <code title="post /computers/{id}/click">client.computers.<a href="./src/resources/computers.ts">click</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/execute">client.computers.<a href="./src/resources/computers.ts">executeAction</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /computers/{id}/batch">client.computers.<a href="./src/resources/computers.ts">executeBatch</a>(id, { ...params }) -> ComputerExecuteBatchResponse</code>
- <code title="post /computers/{id}/keepalive">client.computers.<a href="./src/resources/computers.ts">keepAlive</a>(id) -> ComputerKeepAliveResponse</code>
- <code title="post /computers/{id}/navigate">client.computers.<a href="./src/resources/computers.ts">navigate</a>(id, { ...params }) -> ActionResult</code>
- <code title="get /computers/{id}/events">client.computers.<a href="./src/resources/computers.ts">streamEvents</a>(id) -> void</code>
- <code title="post /computers/{id}/screenshot">client.computers.<a href="./src/resources/computers.ts">takeScreenshot</a>(id) -> ActionResult</code>
- <code title="delete /computers/{id}">client.computers.<a href="./src/resources/computers.ts">terminate</a>(id) -> void</code>
- <code title="post /computers/{id}/type">client.computers.<a href="./src/resources/computers.ts">typeText</a>(id, { ...params }) -> ActionResult</code>
