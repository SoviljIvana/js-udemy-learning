import str from './models/Search'

import {add as a, multiply as m, ID} from './views/searchView';//first type od import
//import * as searchView from './views/searchView'; //second type of import

console.log(`Using imported functions! ${a(ID, 2)} and ${m(3,5)}. ${str}`);