# Prevent-Outbreaks-of-Infection
Call for Code Challenge 2019

## Deploy guide
### Prerequisites
Pleaase create a custom model on Watson Visual Recognition using Watson Studio.

### Frontend
This Frontend app is pwa. development and test used Nginx on IBM Cloud IaaS Virtual Server.

ex ``` https://yourserver.com ```

### Backend
This Backend uses Node-RED.You need to be able to access Node-RED from Nginx using a reverse proxy.

ex ``` https://yourserver.com/red ```

Please add the following nodes to Node-RED.
- [node-red-contrib-cloudantplus](https://flows.nodered.org/node/node-red-contrib-cloudantplus)
- [node-red-node-watson](https://flows.nodered.org/node/node-red-node-watson)

You have Node-RED ready and Please import "flows_web_form_image_recognition_stable.json" to Node-RED from backend directory.
