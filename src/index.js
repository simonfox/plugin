import { Bootstrap } from './bootstrap';
import Aurelia from 'aurelia-framework';

var host = document.getElementById(applicationHost || 'applicationHost');
host.aurelia.container.getInstance(Bootstrap);
