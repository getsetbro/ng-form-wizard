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
  nodes: [
    {
      id: string;
      name: string;
      description: string;
      nodeRootId: string;
      templateId: string;
      templateVars: {};
      cssPath: string;
      version: number;
      locale: string;
      nodes: [{
        question: string;
        submit: {
          forwardToNode: string;
        }
      }]
    }
  ];
}
export function createSurvey(params: Partial<Survey>) {
  return {} as Survey;
}
