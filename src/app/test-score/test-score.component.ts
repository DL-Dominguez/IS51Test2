import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

export interface ITests {
  id: number;
  testName: string;
  pointsPossible: number;
  pointsRecieved: number;
  percentage: number;
  grade: string;

}
@Component({
  selector: 'app-test-score',
  templateUrl: './test-score.component.html',
  styleUrls: ['./test-score.component.css']
})
export class TestScoreComponent implements OnInit {

  tests: Array<ITests> = [];
  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
    this.tests = await this.loadTestsFromJson();
    Console.log ('this.tests from ngOninit...', this.tests);

  }

  async loadTestsFromJson() {
  const tests = await this.http.get('assets/tests.json').toPromise();
  return tests.json();
  }

  addTests() {
    const test = {
      id: null,
      testName: null,
      pointsPossible: null,
      pointsRecieved: null,
      percentage: null,
      grade: null
    };
    this.tests.unshift();
  }
}
