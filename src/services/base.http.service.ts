import axios from "axios";

export class BaseHttpService<T> {
  feature: string;
  constructor(feature: string) {
    this.feature = feature;
  }
  private url: string = import.meta.env.VITE_API_URL;

  async getAll() {
    const { data } = await axios.get<{ data: T[] }>(
      `${this.url}${this.feature}`
    );
    return data.data;
  }
}
