export abstract class ApiService {
  protected abstract get apiBaseUri(): string;

  constructor() { }

  get = <T>(path: string, headers?: Headers): Promise<any> => {
    return fetch(`${this.apiBaseUri}${path}`, { headers: headers })
      .then(response => response.json())
      .then(data => (data.data));
  }
}