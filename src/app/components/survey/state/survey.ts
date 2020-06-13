import { ID } from '@datorama/akita';

export class Survey {
    id: ID;
    name: string;
    description: string;
    nodeRootId: string;
    templateId: string;
    templateVars: {};
    cssPath: string;
    version: number;
    locale: string;
    nodes:[]
}