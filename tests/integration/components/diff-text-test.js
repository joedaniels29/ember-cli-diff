import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('diff-text', 'Integration | Component | diff text', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +
  
  this.render(hbs`{{diff-text}}`);
  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{diff-text
      firstText=firstText
      secondText=secondText
     }}
  `);
  this.setProperties({firstText:'x',secondText:'xx'});
  assert.equal(this.$().find('pre').prop("innerHTML").trim(), 'x<span class="new">x</span>');

  this.setProperties({firstText:'abc',secondText:'cba'});
  assert.equal(this.$().find('pre').prop("innerHTML").trim(), '<span class="removed">abc</span><span class="new">cba</span>');

  this.setProperties({firstText:'a\na\na',secondText:'a\nb\nc'});
  assert.equal(this.$().find('pre').prop("innerHTML").trim(), 'a\n<span class="removed">a\na</span><span class="new">b\nc</span>');
});
