import {marked} from "marked";

const worker: Worker = self as any;

worker.addEventListener("message", (event) => {
  const text = event.data;
  const html = marked(text);
  console.log(html)
  worker.postMessage({ html });
});
