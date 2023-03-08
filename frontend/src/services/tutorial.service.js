import http from "../http-common";

class UtenteDataService {
  getAll() {
    return http.get("/utente");
  }

  get(num_sequencial) {
    return http.get(`/utente/${num_sequencial}`);
  }

  create(data) {
    return http.post("/utente", data);
  }

  update(num_sequencial, data) {
    return http.put(`/utente/${num_sequencial}`, data);
  }

  delete(num_sequencial) {
    return http.delete(`/utente/${num_sequencial}`);
  }

  deleteAll() {
    return http.delete(`/utente`);
  }

  findBynome_utente(nome_utente) {
    return http.get(`/utente?nome_utente=${nome_utente}`);
  }
}

export default new UtenteDataService();