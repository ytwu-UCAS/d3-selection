var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../");

tape("d3.select can select by string", function(test) {
  var document = global.document = jsdom.jsdom(),
      s = d3.select("body");
  test.ok(s instanceof d3.selection);
  test.equal(s._depth, 1);
  test.ok(Array.isArray(s._root));
  test.equal(s._root.length, 1);
  test.equal(s._root[0], document.body);
  test.equal(s._root._parent, undefined);
  test.equal(s._enter, null);
  test.equal(s._exit, null);
  test.end();
  delete global.document;
});

tape("d3.select can select an element", function(test) {
  var document = jsdom.jsdom("<h1>hello</h1>"),
      s = d3.select(document.body);
  test.ok(s instanceof d3.selection);
  test.equal(s._depth, 1);
  test.ok(Array.isArray(s._root));
  test.equal(s._root.length, 1);
  test.equal(s._root[0], document.body);
  test.equal(s._root._parent, undefined);
  test.equal(s._enter, null);
  test.equal(s._exit, null);
  test.end();
});

tape("d3.select can select a window", function(test) {
  var document = jsdom.jsdom("<h1>hello</h1>"),
      s = d3.select(document.defaultView);
  test.ok(s instanceof d3.selection);
  test.equal(s._depth, 1);
  test.ok(Array.isArray(s._root));
  test.equal(s._root.length, 1);
  test.equal(s._root[0], document.defaultView);
  test.equal(s._root._parent, undefined);
  test.equal(s._enter, null);
  test.equal(s._exit, null);
  test.end();
});

tape("d3.select can select a document", function(test) {
  var document = jsdom.jsdom("<h1>hello</h1>"),
      s = d3.select(document);
  test.ok(s instanceof d3.selection);
  test.equal(s._depth, 1);
  test.ok(Array.isArray(s._root));
  test.equal(s._root.length, 1);
  test.equal(s._root[0], document);
  test.equal(s._root._parent, undefined);
  test.equal(s._enter, null);
  test.equal(s._exit, null);
  test.end();
});

tape("d3.select can select a document element", function(test) {
  var document = jsdom.jsdom("<h1>hello</h1>"),
      s = d3.select(document.body);
  test.ok(s instanceof d3.selection);
  test.equal(s._depth, 1);
  test.ok(Array.isArray(s._root));
  test.equal(s._root.length, 1);
  test.equal(s._root[0], document.body);
  test.equal(s._root._parent, undefined);
  test.equal(s._enter, null);
  test.equal(s._exit, null);
  test.end();
});

tape("d3.select can select null", function(test) {
  var document = jsdom.jsdom("<h1>hello</h1>"),
      s = d3.select(null);
  test.ok(s instanceof d3.selection);
  test.equal(s._depth, 1);
  test.ok(Array.isArray(s._root));
  test.equal(s._root.length, 1);
  test.equal(s._root[0], null);
  test.equal(s._root._parent, undefined);
  test.equal(s._enter, null);
  test.equal(s._exit, null);
  test.end();
});

tape("d3.select can select an arbitrary object", function(test) {
  var object = {},
      s = d3.select(object);
  test.ok(s instanceof d3.selection);
  test.equal(s._depth, 1);
  test.ok(Array.isArray(s._root));
  test.equal(s._root.length, 1);
  test.equal(s._root[0], object);
  test.equal(s._root._parent, undefined);
  test.equal(s._enter, null);
  test.equal(s._exit, null);
  test.end();
});
