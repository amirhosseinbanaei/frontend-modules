class CreateRestApiService {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public GET = async (queries?: string) => {
    const response = await fetch(
      `${process.env.BASE_URL_DEV}/${this.endpoint}?${queries}`,
    );
    return this.returnResponse(response);
  };

  POST = async (body: any) => {
    const response = await fetch(
      `${process.env.BASE_URL_DEV}/${this.endpoint}`,
      {
        method: 'POST',
        body,
      },
    );
    return this.returnResponse(response);
  };

  PUT = async (body: any, paramId: string) => {
    const response = await fetch(
      `${process.env.BASE_URL_DEV}/${this.endpoint}/${paramId}`,
      {
        method: 'PUT',
        body,
      },
    );
    return this.returnResponse(response);
  };

  PATCH = async (body: any, paramId: string) => {
    const response = await fetch(
      `${process.env.BASE_URL_DEV}/${this.endpoint}/${paramId}`,
      {
        method: 'PATCH',
        body,
      },
    );
    return this.returnResponse(response);
  };

  DELETE = async (paramId: string) => {
    const response = await fetch(
      `${process.env.BASE_URL_DEV}/${this.endpoint}/${paramId}`,
      {
        method: 'DELETE',
      },
    );
    return this.returnResponse(response);
  };

  private returnResponse = (response: Response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  };
}

export default CreateRestApiService;
