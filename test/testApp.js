const assert = require("chai").assert;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const app = require("../app");

const helloApp = app.helloApp;
const stringConverter = app.stringConverter;
const toggleButton = app.toggleButton;

describe("helloApp", () => {
  it("app should return hello world", () => {
    assert.equal(helloApp(), "Hello World");
  });
});

describe("toggle aria-expanded test", () => {
  beforeEach(() => {
    const dom = new JSDOM(
      `<html>
            <body>
                <button class="button" aria-expanded="true">Call to Action</button>
            </body>
        </html>`,
      {
        url: "http://localhost",
      }
    );

    global.window = dom.window;
    global.document = dom.window.document;
  });

  it("toggle aria-expanded value", () => {
    const callToAction = document.querySelector(".button");
    toggleButton(callToAction);
    const actual = callToAction.getAttribute("aria-expanded");
    assert.equal(actual, "false");
  });
});
