import assert from "assert";
import app from "../../src/app";

describe("'cart' service", () => {
  it("registered the service", () => {
    const service = app.service("cart");

    assert.ok(service, "Registered the service");
  });
});
