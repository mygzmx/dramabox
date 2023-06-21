import { loadScript } from "@paypal/paypal-js";
// https://www.npmjs.com/package/@paypal/paypal-js
loadScript({ "client-id": "test" })
  .then((paypal) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    paypal.Buttons()
      .render("#your-container-element")
      .catch((error) => {
        console.error("failed to render the PayPal Buttons", error);
      });
  })
  .catch((error) => {
    console.error("failed to load the PayPal JS SDK script", error);
  });
