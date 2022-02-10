import Component from '@glimmer/component';
import rdflib from 'rdflib';
export default class RdfDisplay extends Component {
  constructor() {
    super(...arguments);
    this.store = rdflib.graph();
    const VCARD = new rdflib.Namespace('http://www.w3.org/2006/vcard/ns#');
    const me = this.store.sym('https://example.com/alice/card#me');
    const profile = me.doc();       //i.e. store.sym(''https://example.com/alice/card#me')
    this.store.add(me, VCARD('fn'), 'John Bloggs', profile);
    console.log(this.store);
  }

  get triples() {
    return this.store.toNT();
  }
}
