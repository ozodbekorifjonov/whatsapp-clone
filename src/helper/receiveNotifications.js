import React from 'react';
import whatsAppClient from '@green-api/whatsapp-api-client';

const idInstance = process.env.REACT_APP_ID_INSTANCE;
const apiTokenInstance = process.env.REACT_APP_API_TOKEN_INSTANCE;

function ReceiveNotifications() {
  return (async () => {
    let restAPI = whatsAppClient.restAPI({
      idInstance,
      apiTokenInstance,
    });

    try {
      console.log('Waiting incoming notifications...');
      await restAPI.webhookService.startReceivingNotifications();
      restAPI.webhookService.onReceivingMessageText((body) => {
        console.log(body);
        restAPI.webhookService.stopReceivingNotifications();
      });
      restAPI.webhookService.onReceivingDeviceStatus((body) => {
        console.log(body);
      });
      restAPI.webhookService.onReceivingAccountStatus((body) => {
        console.log(body);
      });
    } catch (ex) {
      console.error(ex.toString());
    }

    console.log('End');
  })();
}

export default ReceiveNotifications;
