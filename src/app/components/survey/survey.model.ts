import { Node } from './state/node.model';

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
