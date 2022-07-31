import http from "../http-common";
class SurveyService {
  getSurvey(id) {
    return http.get(`/complete/survey?surveyId=${id}`);
  }
  submitSurveyResponse(surveyData) {
    return http.post(`/response/`, surveyData);
  }
}
export default new SurveyService();