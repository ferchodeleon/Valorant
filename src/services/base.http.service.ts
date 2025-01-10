import axios from "axios";

class BaseHttpService<T> {
  feature: string;
  character = false;
  constructor(feature: string, character: boolean) {
    this.feature = feature;
    this.character = character;
  }
  private url: string = import.meta.env.VITE_API_URL;

  async getAll() {
    const { data } = await axios.get<{ data: T[] }>(
      `${this.url}${this.feature}`,
      { params: { language: "es-MX", isPlayableCharacter: this.character } }
    );
    return data.data;
  }
}

export default BaseHttpService;
