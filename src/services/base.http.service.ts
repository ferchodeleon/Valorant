import axios from "axios";
import i18n from "i18next";

class BaseHttpService<T> {
  feature: string;
  character = false;
  constructor(feature: string, character: boolean) {
    this.feature = feature;
    this.character = character;
  }
  private url: string = import.meta.env.VITE_API_URL;

  private getLanguageCode(): string {
    const currentLang = i18n.language;
    return currentLang === "es" ? "es-MX" : "en-US";
  }

  async getAll() {
    const { data } = await axios.get<{ data: T[] }>(
      `${this.url}${this.feature}`,
      {
        params: {
          language: this.getLanguageCode(),
          isPlayableCharacter: this.character,
        },
      }
    );
    return data.data;
  }

  async getById(id: string) {
    const { data } = await axios.get<{ data: T }>(
      `${this.url}${this.feature}/${id}`,
      {
        params: {
          language: this.getLanguageCode(),
          isPlayableCharacter: this.character,
        },
      }
    );
    return data.data;
  }
}

export default BaseHttpService;
