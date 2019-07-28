# Prevent-Outbreaks-of-Infection
Call for Code Challenge 2019

## Deploy guide
### Prerequisites
Pleaase create a custom model on Watson Visual Recognition using Watson Studio.

If you don't use Watson Studio, I recomend that you get [IBM Cloud Lite Account](https://www.ibm.com/jp-ja/cloud/lite-account). And you can try custom model useing following contents.

https://www.ibm.com/support/knowledgecenter/DSXDOC/analyze-data/visual-recognition-create-model.html

### Frontend
This Frontend app is pwa. development and test used Nginx on IBM Cloud IaaS Virtual Server.

ex ``` https://yourserver.com ```

Deploy the contents of the "frontend directory".

### Backend
This Backend uses Node-RED.You need to be able to access Node-RED from Nginx using a reverse proxy.

ex ``` https://yourserver.com/red ```

Please add the following nodes to Node-RED.
- [node-red-contrib-cloudantplus](https://flows.nodered.org/node/node-red-contrib-cloudantplus)
- [node-red-node-watson](https://flows.nodered.org/node/node-red-node-watson)

You have Node-RED ready and Please import "flows_web_form_image_recognition_stable.json" to Node-RED from backend directory.

### Recognition data download

If you want to download recognition data as a CSV file, Please import "notebook_datalistview.ipynb" to Jupyter Notebook. You can use Jupyter Notebook on Watson Studio.
