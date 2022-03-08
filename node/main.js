var webPush = require('web-push');

var pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fAbzrecesvc:APA91bE3oZVGdtShAOYdfq908NTrUGkFFJVk7K0H-wp1tKxkSWJksmTm6N9BMiJLmMukQU5n9U2Pjat0or90AN1IschuO1xaqYiJ5n2ORyqUGEBQjMAQKp_tKNBiX3EXfovpoIm4pf2b","keys":{"p256dh":"BDgH-XrWlpfJc1QinDsVb1ENbNgp-JavenDt0PAnHN0MQFK36heIRmliuCFtl21bDeOwf8VRadJZ20L0iXb0stY","auth":"MFU2cHZSOEJQc3YtSzREUk1kOGhpZw=="}};

var vapidPublicKey = 'BC8VJ_aFVj86_Jftr7EzJSRNwiJvexEeCJyzl-a_A0qBoGgXyxPeTIuQaTOGf5Bf9DOj-WWDVZzmpgDvAjUC0t8'

var vapidPrivateKey = 'el9T2y7Kb0Cu_IUnjacQGjdrD8ZIGDoGdZlclMxQusA'

var payload = 'Here is a payload!'

var options = {
  vapidDetails: {
    subject: 'mailto:almar.asetbekov@gmail.com',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  },
  TTL: 60
};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
)