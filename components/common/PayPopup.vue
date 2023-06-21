<template>
  <van-popup
    :show="isShowPaypal"
    round
    closeable
    position="bottom"
    safe-area-inset-bottom
    :before-close="onBeforeClose"
    :style="{ height: '4.5rem' }"
    :lazy-render="false"
  >
    <div class="paypalBox">
      <div style="font-size: 0.3rem; text-align: center; padding-bottom: 0.2rem">支付测试</div>
      <div id="paypal-button-container"></div>
    </div>
  </van-popup>
</template>

<script lang="ts" setup>
import { loadScript } from "@paypal/paypal-js";
import { DeviceModule } from '@/store/modules/device'
import { onMounted, ref, watch } from 'vue'
import { Toast } from 'vant'

const isShowPaypal = ref(DeviceModule.isShowPaypal);

watch(() => DeviceModule.isShowPaypal, (isShow) => {
  isShowPaypal.value = isShow;
})

const onBeforeClose = () => {
  DeviceModule.SetIsShowPaypal(false);
}

onMounted(() => {
  loadPaypalSdk()
})

const loadPaypalSdk = () => {
  loadScript({
    "client-id": "sb",
    "enable-funding": "venmo",
    "currency": "USD"
  })
    .then((paypal) => {
      paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'paypal',
        },
        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{ "amount": { "currency_code": "USD", "value": 1 } }]
          });
        },
        onApprove: function(data, actions) {
          return actions.order.capture().then(function(orderData) {

            // Full available details
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

            // Show a success message within this page, e.g.
            const element = document.getElementById('paypal-button-container');
            element.innerHTML = '';
            element.innerHTML = '<h3>Thank you for your payment!</h3>';

            // Or go to another URL:  actions.redirect('thank_you.html');

          });
        },

        onError: function(err) {
          console.log(err);
        }
      }).render('#paypal-button-container')
        .catch((error) => {
          DeviceModule.SetIsShowPaypal(false);
          Toast({
            message: error,
            position: 'bottom'
          })
          console.error("failed to render the PayPal Buttons", error);
        });
    })
    .catch((error) => {
      Toast({
        message: error,
        position: 'bottom'
      })
      DeviceModule.SetIsShowPaypal(false);
      console.error("failed to load the PayPal JS SDK script", error);
    });
}
</script>

<style lang="scss" scoped>
.paypalBox {
  padding: 0.5rem 0.5rem 0;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
  width: 100%;
  #paypal-button-container {
    width: 100%;
  }
}
</style>
