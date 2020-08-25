'use strict';

define("emberjs-tutorial/tests/integration/components/cart-container-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | cart-container', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <CartContainer />
      */
      {"id":"SYYMPX7O","block":"{\"symbols\":[],\"statements\":[[8,\"cart-container\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <CartContainer>
              template block text
            </CartContainer>
          
      */
      {"id":"BcIGttv+","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"cart-container\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("emberjs-tutorial/tests/integration/components/product-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Product />
      */
      {"id":"n2oHNLTK","block":"{\"symbols\":[],\"statements\":[[8,\"product\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Product>
              template block text
            </Product>
          
      */
      {"id":"pGRSrk9B","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"product\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("emberjs-tutorial/tests/integration/components/product/details-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | item/details', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Product::Details />
      */
      {"id":"IMl7fHA6","block":"{\"symbols\":[],\"statements\":[[8,\"product/details\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Product::Details>
              template block text
            </Product::Details>
          
      */
      {"id":"5HZeZmCO","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"product/details\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("emberjs-tutorial/tests/integration/components/product/image-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | item/image', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Product::Image />
      */
      {"id":"R39LXSUY","block":"{\"symbols\":[],\"statements\":[[8,\"product/image\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Product::Image>
              template block text
            </Product::Image>
          
      */
      {"id":"oV/9sANZ","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"product/image\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("emberjs-tutorial/tests/integration/helpers/currency-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | currency', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{currency inputValue}}
      */
      {"id":"Esmulpn+","block":"{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[35,0]],null]]],\"hasEval\":false,\"upvars\":[\"inputValue\",\"currency\"]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define("emberjs-tutorial/tests/test-helper", ["emberjs-tutorial/app", "emberjs-tutorial/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("emberjs-tutorial/tests/unit/controllers/cart-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | cart', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:cart');
      assert.ok(controller);
    });
  });
});
define("emberjs-tutorial/tests/unit/routes/cart-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | cart', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:cart');
      assert.ok(route);
    });
  });
});
define("emberjs-tutorial/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("emberjs-tutorial/tests/unit/routes/item-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | item', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:item');
      assert.ok(route);
    });
  });
});
define("emberjs-tutorial/tests/unit/services/cart-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | cart', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:cart');
      assert.ok(service);
    });
  });
});
define('emberjs-tutorial/config/environment', [], function() {
  var prefix = 'emberjs-tutorial';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('emberjs-tutorial/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
