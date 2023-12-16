export abstract class ApiService {
  protected abstract get apiBaseUri(): string;

  constructor() { }

  get = <T>(path: string, headers?: Headers): Promise<T> => {
    return fetch(`${this.apiBaseUri}${path}`, { headers: headers })
      .then(response => response.json())
      .then(data => {
        return <T>data;
      });
  }

  post = (path: string, body: any, headers?: Headers): Promise<number> => {
    return fetch(`${this.apiBaseUri}${path}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    }).then(response => response.status);
  }
}