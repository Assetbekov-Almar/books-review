var webPush = require('web-push');

var pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/c0NI73v1E0Y:APA91bEN7z2weTCpJmcS-MFyfbgjtmlAWuV5YaaNw625_Rq2-f0ZrVLdRPXKGm7B3uwfygicoCeEoWQxCKIxlL3RWG2xkHs6C8-H_cxq-4Z-isAiZ3ixo84-2HeXB9eUvkfNO_t1jd5s","keys":{"p256dh":"BHxSHtYS0q3i0Tb3Ni6chC132ZDPd5uI4r-exy1KsevRqHJvOM5hNX-M83zgYjp-1kdirHv0Elhjw6Hivw1Be5M=","auth":"4a3vf9MjR9CtPSHLHcsLzQ=="}};

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