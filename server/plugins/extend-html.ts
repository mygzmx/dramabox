import { IncomingMessage } from "unenv/runtime/node/http/_request";
import { ServerResponse } from "unenv/runtime/node/http/_response";

export default defineNitroPlugin((nitroApp) => {
  // nitroApp.localCall((req: IncomingMessage, res: ServerResponse) => {
  //   console.log('localCall========>', req)
  // })
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    // This will be an object representation of the html template.
    console.log('html========>============================================>')
    html.style = { fontSize: "53px" }
    html.head.push(`<meta name="description" content="My custom description" />`)
  })
  // You can also intercept the response here.
  // nitroApp.hooks.hook('render:response', (response, { event }) => { console.log(response) })

  nitroApp.hooks.hook('render:island', (islandResponse, { event, islandContext }) => {
    console.log('islandResponse========>', islandResponse)
    console.log('islandContext========>', islandContext)
  })
})
