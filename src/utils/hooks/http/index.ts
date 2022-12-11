import { makeRequest } from "./make-request";

type RequestHeaders = Readonly<Record<string, string>>;
type MultipartBody = Readonly<Record<string, string | Blob>>;

export const defaultHeaders = Object.freeze({
  Accept: "application/json",
  "Content-Type": "application/json",
});

export const get = async (url: string): Promise<unknown> => {
  const { data } = await makeRequest(url, {
    headers: {
      Accept: "application/json",
    },
  });

  return data;
};

export const getWithResponseHeaders = async (
  url: string
): Promise<{ data: unknown; headers: Headers }> => {
  const { data, headers } = await makeRequest(url, {
    headers: {
      Accept: "application/json",
    },
  });

  return {
    data,
    headers,
  };
};

export const post = async (
  url: string,
  body: unknown,
  headers?: RequestHeaders
): Promise<unknown> => {
  const { data } = await makeRequest(url, {
    body: JSON.stringify(body),
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    method: "POST",
  });
  return data;
};
