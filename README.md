ember-rdflib
==============================================================================

This is a very crude import of rdflib.js it still creates a global $rdf however you can now import rdflib from 'ember-rdflib', this is good for source controll and maintaining a good ember code base.
ORIGINAL AT https://github.com/linkeddata/rdflib.js/


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.8 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
$ ember install ember-rdflib
```


Usage
------------------------------------------------------------------------------

if you want to get the latest version of rdflibjs imported.

```
$ git clone https://github.com/redpencilio/ember-rdflib.git

$ cd ember-rdflib

$ update/update.sh

$ npm link
```
move to your ember app folder

add to your package.json ```"ember-rdflib":"*"```

run ```$npm link ember-rdflib```


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
