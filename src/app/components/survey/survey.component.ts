import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  // name: string;
  surveys: any;
  node: any;
  forwardToId:'';
  loaded = false;
  pastIds = [];
  constructor(
    // private router: ActivatedRoute,
    private surveyService: SurveyService,
  ) { }

  ngOnInit(): void {
    // this.router.queryParams.subscribe(params => {this.name = params['name'];});

    this.surveyService.getSurveys().subscribe(surveys => {
      this.surveys = surveys;
      this.node = surveys[0].nodes[0];
      this.loaded = true;
    });

  }

  nodeNext(ev): void {
    this.forwardToId = '';

    if(this.node.nodeType === "Form"){
      this.forwardToId = this.node.submit.forwardToNode;
      this.pastIds.push(this.node.id);

    }
    if(this.node.nodeType === "Interstitial"){
      this.forwardToId = this.node.forwardToNode;
    }
    if(this.node.nodeType === "Question"){
      this.forwardToId = this.node.answers[0].forwardToNode;
      this.pastIds.push(this.node.id);

    }
    if(this.node.nodeType === "MultipleChoice"){
      this.forwardToId = this.node.submit.forwardToNode;
      this.pastIds.push(this.node.id);

    }
    if(this.node.nodeType === "Logic"){
      this.forwardToId = this.node.forwardToNodeDefault;
    }

    let nextNode = this.surveys[0].nodes.find(node => {
      return node.id === this.forwardToId;
    })

    if(nextNode && nextNode.nodeType){
      this.node = nextNode;
      console.log(this.pastIds);
    }else{
      console.log(nextNode);
    }

  }
  
  nodePrev(): void {
    const pastId = this.pastIds[this.pastIds.length-1];
    let prevNode = this.surveys[0].nodes.find(node => {
      return node.id === pastId;
    })

    if(prevNode && prevNode.nodeType){
      this.node = prevNode;
      this.pastIds.pop();
    }else{
      console.log(prevNode);
    }

  }

}
