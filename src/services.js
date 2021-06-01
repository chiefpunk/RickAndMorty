import http from './http-common';
import http1 from './http-pure'

class service {
  getCharacterAll() {
    return http.get('/character');
  }

  getSingleCharacter(id) {
    return http.get(`/character/?page=` + id);
  }

  getCharacterByID(id) {
    return http.get(`/character/` + id);
  }

  getFilteredCharacter(name, status, gender) {
    return http.get(
      '/character/?name=' + name + '&status=' + status + '&type=' + gender
    );
  }

  getFilteredCharacterByName(name){
    return http.get(
      '/character/?name=' + name
    );
  }

  getFilteredCharacterByGender(gender){
    return http.get(
      '/character/?gender=' + gender
    );
  }

  getFilteredCharacterByStatus(status){
    return http.get(
      '/character/?status=' + status
    );
  }

  getLocationAll() {
    return http.get('/location');
  }

  getSingleLocation(id) {
    return http.get('/location/' + id);
  }

  getFilteredLocation(name, type, dimention) {
    return http.get(
      '/location/?name=' + name + '&type=' + type + '&dimention=' + dimention
    );
  }

  getEpisodeAll() {
    return http.get('/episode');
  }

  getSingleEpisode(id) {
    return http.get('/episode/' + id);
  }

  getEpisodeByUrl( url) {
    return http1.get(url);
  }
}

export default new service();
