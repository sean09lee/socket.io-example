# Socket.IO Example

This repository contains a socket.io server and react web app client separately. It is designed to test namespaces and rooms with multiple clients running.

## How to run

Inside `/client` run

* npm install & npm start
* navigate to http://localhost:3000
* open a second tab at http://localhost:3000

Inside `/server`

* npm install & npm start

Testing steps:

* Inside the web client, click the `Create Order` button
* Observe an order card populate in both tabs. If this does not happen, something is wrong.
* Observe the order id show up in your console for the socket.io server
