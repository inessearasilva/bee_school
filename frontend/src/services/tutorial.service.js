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

  getAllformAvini() {
    return http.get("/forms/aviniforms/all");
  }

  getAllformAvombro() {
    return http.get("/forms/avombroforms/all");
  }

  getvaluesAvini(num_sequencial) {
    return http.get(`/forms/valuesAvini/${num_sequencial}`);
  }

  getvaluesAvombro(num_sequencial) {
    return http.get(`/forms/valuesAvombro/${num_sequencial}`);
  }

  getidAvini(num_sequencial) {
    return http.get(`/forms/initialAvini/${num_sequencial}`);
  }

  getidAvombro(num_sequencial) {
    return http.get(`/forms/initialAvombro/${num_sequencial}`);
  }

  getsubAvini(idcomposition,num_sequencial) {
    return http.get(`/forms/subAvini/${idcomposition}/${num_sequencial}`);
  }

  getsubAvombro(idcomposition,num_sequencial) {
    return http.get(`/forms/subAvombro/${idcomposition}/${num_sequencial}`);
  }

  getvizAvini(idcomposition,num_sequencial) {
    return http.get(`/forms/vizAvini/${idcomposition}/${num_sequencial}`);
  }

  getvizAvombro(idcomposition,num_sequencial) {
    return http.get(`/forms/vizAvombro/${idcomposition}/${num_sequencial}`);
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