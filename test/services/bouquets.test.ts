import assert from "assert";
import app from "../../src/app";

describe("'bouquets' service", () => {
  it("registered the service", () => {
    const service = app.service("bouquets");

    assert.ok(service, "Registered the service");
  });
});
