webpackJsonp([28],{40:function(n,e){n.exports="## CSS\n\nThis is the css of props, not `static css`, which provides the ability to modify scoped style within shadow dom. \n\n## Example\n\n```jsx\ndefine('my-element', class extends WeElement {\n  static css = `h1{\n    color: red;\n  }`\n\n  render() {\n    return (\n      <div>\n        <h1>Look at my color!<h1>\n      </div>\n    )\n  }\n})\n```\n\nThe h1 of `my-element' above is red. Is there any way to modify it?\n\n```jsx\ndefine('my-app', class extends WeElement {\n\n  myCSS = `\n  h1{\n    color: green;\n  }`\n\n  onClick = () => {\n    //Dynamic modification\n    this.myCSS = `\n    h1{\n      color: blue;\n    }`\n    this.update()\n  }\n\n  render() {\n    return (\n      <div onClick={this.onClick}>\n        <my-element css={this.myCSS} />\n      </div>\n    )\n  }\n})\n```\n\nIt can also be guaranteed that it can be modified in the following ways:\n\n```css\ncolor: blue!important;\n```\n"}});
//# sourceMappingURL=28.3ca205f6.chunk.js.map