import engineResolverFor from "ember-engines/test-support/engine-resolver-for";
import { setupTest } from "ember-qunit";
import { module, test } from "qunit";

const modulePrefix = "ember-ebau-gwr";
const resolver = engineResolverFor(modulePrefix);
module("Unit | Route | application", function (hooks) {
  setupTest(hooks, { resolver, integration: true });

  test("it exists", function (assert) {
    const route = this.owner.lookup("route:application");
    assert.ok(route);
  });
});
