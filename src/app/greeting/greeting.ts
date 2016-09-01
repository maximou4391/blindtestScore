import {Component} from 'angular2/core';
import TeamChart from './team-chart/team-chart';

@Component({
  selector: 'greeting',
  templateUrl: 'app/greeting/greeting.html',
  styleUrls: ['app/greeting/greeting.css'],
  directives: [
      TeamChart
  ]
})
export default class Greeting {
  greeting = 'Hello World';
}
