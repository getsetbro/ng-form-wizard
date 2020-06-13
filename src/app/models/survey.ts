
export class Survey {
    id: string;
    name: string;
    description: string;
    nodeRootId: string;
    templateId: string;
    templateVars: {};
    cssPath: string;
    version: number;
    locale: string;
    nodes:[{
        question:string;
        submit:{
            forwardToNode:string;
        }
    }]
}