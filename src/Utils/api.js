import axios from "axios";

class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  async getMeta() {
    return axios.get(`${this.baseUrl}`)
  }

  async getContent() {
    return axios.get(`${this.baseUrl}/posts?_embed&per_page=100`);
  }

  async getCategories() {
    return axios.get(`${this.baseUrl}/categories`);
  }

  async getCategoryInfo(slug) {
    return axios.get(`${this.baseUrl}/categories?slug=${slug}`);
  }

  async getSliderPosts() {
    return axios.get(`${this.baseUrl}/posts?_embed&tags=8&per_page=100`);
  }

  async getContentFromCategory(id) {
    return axios.get(
      `${this.baseUrl}/posts?_embed&per_page=100&categories=${id}`
    );
  }

  async getProject(slug) {
    return axios.get(`${this.baseUrl}/posts?slug=${slug}&_embed`);
  }

  async getRecommendProjects(catId, id) {
    return axios.get(`${this.baseUrl}/posts?_embed&per_page=100&categories=${catId.join(',')}&exclude=${id}`);
  }
   
  async sendForm(body) {

    const formData = new FormData();
    formData.append('_wpcf7_unit_tag', '_wpcf7_unit_tag' + body.phone + body.name)
    formData.append('client-name', body.name);
    formData.append('client-email', body.email);
    formData.append('client-tel', body.phone);

    return fetch("http://api.pictdesign.ru/wp-json/contact-form-7/v1/contact-forms/5/feedback", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }
}

export const mainApi = new Api({
  baseUrl: "http://api.pictdesign.ru/wp-json/wp/v2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
