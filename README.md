# Ember-cli-diff


```hbs
{{diff-text
      firstText=firstText
      secondText=secondText
     }}
```

######with properties:
```javascript
{firstText:'abc',secondText:'cba'}
```

######produces:
```html
<span class="removed">abc</span><span class="new">cba</span>
```





## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
