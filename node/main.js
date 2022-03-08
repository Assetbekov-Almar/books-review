var webPush = require('web-push');

var pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fAbzrecesvc:APA91bE3oZVGdtShAOYdfq908NTrUGkFFJVk7K0H-wp1tKxkSWJksmTm6N9BMiJLmMukQU5n9U2Pjat0or90AN1IschuO1xaqYiJ5n2ORyqUGEBQjMAQKp_tKNBiX3EXfovpoIm4pf2b",
  "keys":{"p256dh":"BLc4xRzKlKORKWlbdgFaBrrPK3ydWAHo4M0gs0i1oEKgPpWC5cW8OCzVrOQRv-1npXRWk8udnW3oYhIO4475rds=", "auth":"5I2Bu2oKdyy9CwL8QVF0NQ=="}};

var payload = 'Here is a payload!';

var options = {
  gcmAPIKey: 'AIzaSyD1JcZ8WM1vTtH6Y0tXq_Pnuw4jgj_92yg',
  TTL: 60
};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);

// ewogICJ0eXAiOiAiSldUIiwKICAiYWxnIjogIkVTMjU2Igp9.