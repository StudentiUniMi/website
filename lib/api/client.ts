export const apiEndpoint = process.env.NEXT_PUBLIC_API_URL || "https://api.studentiunimi.it/api"

export class Result<T> {
  constructor(
    public status: number,
    public value?: T,
    public message: string = ""
  ) {}

  get error() {
    return this.status !== 200
  }
}

export async function getAsync<T>(path: string): Promise<Result<T>> {
  try {
    const response = await fetch(path)

    if (!response.ok) {
      return new Result<T>(response.status, undefined, response.statusText)
    }

    const res = (await response.json()) as T
    return new Result<T>(200, res)
  } catch (err) {
    console.error(err)
    return new Result<T>(500, undefined, "Internal fetch error")
  }
}
