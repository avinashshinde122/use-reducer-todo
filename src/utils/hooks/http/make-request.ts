type ReturnValue = {
  data: unknown;
  headers: Response["headers"];
};

export const makeRequest = async (
  url: string,
  init: RequestInit
): Promise<ReturnValue> => {
  const requestOptions: RequestInit = {
    ...init,
    credentials: "same-origin",
  };
  const response = await fetch(url, requestOptions);
  if (response.ok) {
    try {
      const data: unknown = await response.json();
      return {
        data,
        headers: response.headers,
      };
    } catch {
      // We end up here when the response has no body
      return { data: undefined, headers: response.headers };
    }
  }

  const responseBody = await response.text();
  try {
    const data = JSON.parse(responseBody);
    return { data, headers: response.headers };
  } catch (error: unknown) {
    throw new Error("Body is not a valid JSON");
  }
};
