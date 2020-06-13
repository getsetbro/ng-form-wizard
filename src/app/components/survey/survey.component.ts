import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../../services/survey.service';
import { Observable } from 'rxjs';
import { Survey } from '../../models/survey';
import { findIndex } from 'rxjs/operators';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  name: string;
  surveys: any;
  node: any;
  childTitle: string;
  forwardToId:'';
  nextNodeIdx = -1;
  constructor(
    private router: ActivatedRoute,
    private surveyService: SurveyService,
  ) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.name = params['name'];
    });

    this.surveyService.getSurveys().subscribe(surveys => {
      this.surveys = surveys;
      this.node = surveys[0].nodes[0];
      // this.childTitle = surveys[0].nodes[0].question;
      this.childTitle = 'hi.';
    });

  }


  save(): void {
    this.forwardToId = '';
    this.nextNodeIdx = -1;
    if(this.node.nodeType === "Form"){
      this.forwardToId = this.node.submit.forwardToNode;
    }
    if(this.node.nodeType === "MultipleChoice"){
      this.forwardToId = this.node.submit.forwardToNode;
    }
    if(this.node.nodeType === "Logic"){
      this.forwardToId = this.node.forwardToNodeDefault;
    }
    if(this.node.nodeType === "Interstitial"){
      this.forwardToId = this.node.forwardToNode;
    }
    if(this.node.nodeType === "Question"){
      this.forwardToId = this.node.answers[0].forwardToNode;
    }
    this.nextNodeIdx = this.surveys[0].nodes.findIndex(node => {
      return node.id === this.forwardToId;
    })
    let nextNode = this.surveys[0].nodes.find(node => {
      return node.id === this.forwardToId;
    })
    if(this.nextNodeIdx >= 0){
      this.node = this.surveys[0].nodes[this.nextNodeIdx];
      this.childTitle = this.surveys[0].nodes[this.nextNodeIdx].question;
    }else{
      console.log(nextNode);
    }
    console.log(this.forwardToId);

  }

}
