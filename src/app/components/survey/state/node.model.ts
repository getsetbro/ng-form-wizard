export interface Node {
  id: number | string;
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

export function createNode(params: Partial<Node>) {
  return {
  } as Node;
}
