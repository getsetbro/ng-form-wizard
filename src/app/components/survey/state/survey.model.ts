export interface Survey {
  id: string;
  name: string;
  description: string;
  nodeRootId: string;
  templateId: string;
  templateVars: {};
  cssPath: string;
  version: number;
  locale: string;
  nodes: Node[];
}
export interface Node {
  id: string;
  name: string;
  description: string;
  nodeRootId: string;
  templateId: string;
  templateVars: {};
  cssPath: string;
  version: number;
  locale: string;
  nodeType:string;
  forwardToNode?:string;
  forwardToNodeDefault?:string;
  submit?:{
    text:string;
    forwardToNode:string;
  };
  answers?:[{forwardToNode:string}]
  rules?:[]
}
export function createSurvey(params: Partial<Survey>) {
  return {} as Survey;
}
