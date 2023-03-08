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

  findBydata_nascimento(data_nascimento) {
    return http.get(`/utente?data_nascimento=${data_nascimento}`);
  }

  findBynum_sequencial(num_sequencial) {
    return http.get(`/utente?num_sequencial=${num_sequencial}`);
  }
  
  createform(data) {
    return http.post("/forms", data);
  }

  getAllform() {
    return http.get("/forms");
  }

  getAllAvini() {
    return http.get("/forms/avinilist/all");
  }

  getAllAvombro() {
    return http.get("/forms/avombrolist/all");
  }

  getformcomp(num_sequencial) {
    return http.get(`/forms/values/${num_sequencial}`);
  }

  getid(num_sequencial) {
    return http.get(`/forms/initial/${num_sequencial}`);
  }

  getsub(idcomposition,num_sequencial) {
    return http.get(`/forms/submitted/${idcomposition}/${num_sequencial}`);
  }

  getviz(idcomposition,num_sequencial) {
    return http.get(`/forms/viz/${idcomposition}/${num_sequencial}`);
  }

  updateform(num_sequencial, data) {
    return http.put(`/forms/${num_sequencial}`, data);
  }

  deleteform(num_sequencial) {
    return http.delete(`/forms/${num_sequencial}`);
  }

  deleteAllform() {
    return http.delete(`/forms`);
  }

}

export default new UtenteDataService();