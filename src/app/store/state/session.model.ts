export interface Session {
  id: number | string;
  name: string;
}

export function createSession(params: Partial<Session>) {
  return {
    name: ''
  } as Session;
}
