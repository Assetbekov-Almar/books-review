var webPush = require('web-push');

// var pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fAbzrecesvc:APA91bE3oZVGdtShAOYdfq908NTrUGkFFJVk7K0H-wp1tKxkSWJksmTm6N9BMiJLmMukQU5n9U2Pjat0or90AN1IschuO1xaqYiJ5n2ORyqUGEBQjMAQKp_tKNBiX3EXfovpoIm4pf2b","keys":{"p256dh":"BDgH-XrWlpfJc1QinDsVb1ENbNgp-JavenDt0PAnHN0MQFK36heIRmliuCFtl21bDeOwf8VRadJZ20L0iXb0stY","auth":"0U6pvR8BPsv-K4DRMd8hig"}};
// var pu shSubscription = {"endpoint":"https://wns2-par02p.notify.windows.com/w/?token=BQYAAAAGMgFc1EoZlZmOZDaaohTfWC0gjqtjdN%2bdPtexe33mlrgBZFfNj0ivrVy3p6SLM5%2f2SJO8EHmZbm4EKgmU3F942kzCcXI3ICEbIgONx9yXCRSy%2b5QF4E60VptoLhxWXWJfI8%2bT3in8huhFabXy2u9mBAcbnfevoW4vRu2Sj19bvWHVlmkIs4izT1kS12a33XPAy59y82RLHsXrrpqQU2izY8trdyQzCgJFNMzUnf93jDTA3OcjyBYrp%2fa1BQKm2xQLFjgmFRmMFltfV0gPka6GQbip91Gvr3OqeOIf4bNFoq2DniB%2b3f9JuMBxk%2f7eGRgmW3U1yPlQUnxqTT7gbs%2b4","keys":{"p256dh":"BM3Zei7SNXm_ewvFntN5qlKj5gzDm1OKUKo9lm253kLZpDeVJrPRjNG3gRQe7oN2woBQ9M9izavFabjoXhYBMpI","auth":"xKmx2ogGLckbnAg0lno__g"}};
// var pushSubscription = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABiJ0L7kCM-bpFEc7X-dbylhWAdIH_AQcA7P49IhH1UKObebkXQGSgmtU7r6SplaPh0fFRcQbX23s9sttKpG4BUakLIJnEE-tsAMZLSGreEnKnIsJzvkI8439ts8CKLwG68FFvHSnvH8xBXshCqmEfKJNLi9x1ZO4Htf5i0I8sR1uiO4eA","keys":{"p256dh":"BCtSaHvBXU4KRdn_vsJb3eVvWl-FT6_TG5mxAOqOVmHMblg73l87RE6c-ZY1W1us7nJYTcpF79FiYXD8ZPpxTxE","auth":"3ZyvF8CIMzmmUcMmNbozXQ"}};
var pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fxR0n9BFx6Q:APA91bEeU4tAYTEwqbTsj537wk3vu-blgL2y_c9WFxogGr5gv_v2K_1FGAs-0VjZg0asadCz35i1n_wk2GeQHJExe_P4_5kvsCJiH79mSRroCIHexXAxWDeNrlcvKx2Uu6oeUKoC0tss","keys":{"p256dh":"BOe8lOE8JTlHCMPNoA1GeIra7KmncknH2mth_IoQgl_WxXmHUNCbuLgOh3x_kjg2tQMzY8VSmo9-b3YN6_CMjuo","auth":"Y3CQMklQeMKhFi4BzDss2A"}};


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