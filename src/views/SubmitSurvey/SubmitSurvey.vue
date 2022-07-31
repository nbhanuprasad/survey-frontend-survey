<template>
  <div class="container">
    <v-form
      class="form"
      @submit="handleSubmitSurvey"
      ref="form"
      lazy-validation
    >
      <h1 class="heading">{{ survey.title }}</h1>
      <v-text-field
        v-model="survey.email"
        label="Enter Your Email Id"
        :rules="[rules.required, rules.email]"
      ></v-text-field>
      <v-text-field
        v-model="survey.name"
        label="Enter Your User Name"
        :rules="[rules.required]"
      ></v-text-field>
      <h1 class="heading">FILL ANSWERS TO SURVEY</h1>
      <div class="survey__questions--wrapper">
        <div class="survey__question--wrapper">
          <div
            class="survey__question"
            v-for="(question, index) in survey.questions"
            :key="index"
          >
            <div class="survey__question--heading">
              <h4>Q : {{ question.title.toUpperCase() }} ?</h4>
            </div>
            <v-text-field
              v-if="question.questionType === 'text-box'"
              v-model="question.response"
              :label="question.required ? 'Your Answer *' : 'Your Answer'"
              :rules="[question.required && rules.required]"
              clearable
              clear-icon="mdi-close-circle"
            ></v-text-field>
            <v-textarea
              v-if="question.questionType === 'paragraph'"
              :rules="[question.required && rules.required]"
              outlined
              clearable
              rows="3"
              row-height="25"
              clear-icon="mdi-close-circle"
              name="input-7-4"
              :label="question.required ? 'Your Answer *' : 'Your Answer'"
              v-model="question.response"
            ></v-textarea>

            <v-radio-group
              v-model="question.response"
              :rules="[question.required && rules.required]"
              v-if="question.questionType === 'multiple-choice'"
            >
              <v-radio
                v-for="(item, index) in question.choice"
                :key="index"
                :label="item.choice"
                :value="item.choice"
                color="indigo darken-3"
              ></v-radio>
            </v-radio-group>

            <v-slider
              v-if="question.questionType === 'rating'"
              v-model="question.response"
              :rules="[
                question.required && ((v) => !!v || 'Rating Response Required'),
              ]"
              label="Rate Your Question"
              max="10"
              step="1"
              thumb-label="always"
              class="slider"
              color="orange darken-3"
            ></v-slider>
          </div>
        </div>
      </div>
      <button class="button__black">Submit Survey</button>
    </v-form>
  </div>
</template>
<script>
import SurveyService from "../../services/SurveyService";
export default {
  props: ["surveyId"],
  data() {
    return {
      survey: {
        id: this.surveyId,
        name: "",
        email: "",
        title: "",
        questions: [],
      },
      showDisclaimer: false,
      disclaimerMessage: "",
      rules: {
        required: (value) => !!value || `Field Required !`,
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    retreiveSurvey() {
      //   SurveyDataService.getSurvey(this.surveyId)
      // .then((response) => {
      const apiResponse = {
        id: 1,
        title: "updated survey title",
        description: "updated descriptin",
        isPublished: true,
        surveyLink: null,
        createdAt: "2022-07-25T07:13:12.000Z",
        updatedAt: "2022-07-25T07:54:33.000Z",
        userId: 2,
        question: [
          {
            id: 1,
            title: "email",
            required: true,
            questionType: "text-box",
            createdAt: "2022-07-25T07:13:12.000Z",
            updatedAt: "2022-07-25T07:13:12.000Z",
            surveyId: 1,
            choice: [],
            response: [],
          },
          {
            id: 2,
            title: "name",
            required: true,
            questionType: "text-box",
            createdAt: "2022-07-25T07:13:12.000Z",
            updatedAt: "2022-07-25T07:13:12.000Z",
            surveyId: 1,
            choice: [],
            response: [],
          },
          {
            id: 3,
            title: "multiple-choice",
            required: false,
            questionType: "multiple-choice",
            createdAt: "2022-07-25T07:13:12.000Z",
            updatedAt: "2022-07-25T07:13:12.000Z",
            surveyId: 1,
            choice: [
              {
                id: 1,
                choice: "option_title",
                createdAt: "2022-07-25T07:13:12.000Z",
                updatedAt: "2022-07-25T07:13:12.000Z",
                questionId: 3,
              },
              {
                id: 2,
                choice: "option_title2",
                createdAt: "2022-07-25T07:13:12.000Z",
                updatedAt: "2022-07-25T07:13:12.000Z",
                questionId: 3,
              },
              {
                id: 3,
                choice: "option_title3",
                createdAt: "2022-07-25T07:13:13.000Z",
                updatedAt: "2022-07-25T07:13:13.000Z",
                questionId: 3,
              },
            ],
            response: [
              {
                id: 1,
                response: "option_title",
                createdAt: "2022-07-25T08:03:58.000Z",
                updatedAt: "2022-07-25T08:03:58.000Z",
                enduserId: 1,
                questionId: 3,
                enduser: {
                  id: 1,
                  name: "participant2",
                  email: "participant2@gmail.com",
                  createdAt: "2022-07-25T08:03:58.000Z",
                  updatedAt: "2022-07-25T08:03:58.000Z",
                  surveyId: 1,
                },
              },
              {
                id: 3,
                response: "option_title",
                createdAt: "2022-07-25T08:04:22.000Z",
                updatedAt: "2022-07-25T08:04:22.000Z",
                enduserId: 2,
                questionId: 3,
                enduser: {
                  id: 2,
                  name: "participant",
                  email: "participant3@gmail.com",
                  createdAt: "2022-07-25T08:04:22.000Z",
                  updatedAt: "2022-07-25T08:04:22.000Z",
                  surveyId: 1,
                },
              },
              {
                id: 9,
                response: "option_title",
                createdAt: "2022-07-25T11:39:49.000Z",
                updatedAt: "2022-07-25T11:39:49.000Z",
                enduserId: 5,
                questionId: 3,
                enduser: {
                  id: 5,
                  name: "participan5",
                  email: "participant6@gmail.com",
                  createdAt: "2022-07-25T11:39:49.000Z",
                  updatedAt: "2022-07-25T11:39:49.000Z",
                  surveyId: 1,
                },
              },
            ],
          },
          {
            id: 4,
            title: "rating_type_question",
            required: false,
            questionType: "rating",
            createdAt: "2022-07-25T07:13:13.000Z",
            updatedAt: "2022-07-25T07:13:13.000Z",
            surveyId: 1,
            choice: [],
            response: [
              {
                id: 2,
                response: "8",
                createdAt: "2022-07-25T08:03:58.000Z",
                updatedAt: "2022-07-25T08:03:58.000Z",
                enduserId: 1,
                questionId: 4,
                enduser: {
                  id: 1,
                  name: "participant2",
                  email: "participant2@gmail.com",
                  createdAt: "2022-07-25T08:03:58.000Z",
                  updatedAt: "2022-07-25T08:03:58.000Z",
                  surveyId: 1,
                },
              },
              {
                id: 4,
                response: "6",
                createdAt: "2022-07-25T08:04:22.000Z",
                updatedAt: "2022-07-25T08:04:22.000Z",
                enduserId: 2,
                questionId: 4,
                enduser: {
                  id: 2,
                  name: "participant",
                  email: "participant3@gmail.com",
                  createdAt: "2022-07-25T08:04:22.000Z",
                  updatedAt: "2022-07-25T08:04:22.000Z",
                  surveyId: 1,
                },
              },
              {
                id: 5,
                response: "option_title",
                createdAt: "2022-07-25T10:37:33.000Z",
                updatedAt: "2022-07-25T10:37:33.000Z",
                enduserId: 3,
                questionId: 4,
                enduser: {
                  id: 3,
                  name: "participant",
                  email: "participant4@gmail.com",
                  createdAt: "2022-07-25T10:37:33.000Z",
                  updatedAt: "2022-07-25T10:37:33.000Z",
                  surveyId: 1,
                },
              },
              {
                id: 6,
                response: "6",
                createdAt: "2022-07-25T10:37:33.000Z",
                updatedAt: "2022-07-25T10:37:33.000Z",
                enduserId: 3,
                questionId: 4,
                enduser: {
                  id: 3,
                  name: "participant",
                  email: "participant4@gmail.com",
                  createdAt: "2022-07-25T10:37:33.000Z",
                  updatedAt: "2022-07-25T10:37:33.000Z",
                  surveyId: 1,
                },
              },
              {
                id: 7,
                response: "option_title",
                createdAt: "2022-07-25T11:37:55.000Z",
                updatedAt: "2022-07-25T11:37:55.000Z",
                enduserId: 4,
                questionId: 4,
                enduser: {
                  id: 4,
                  name: "participan5",
                  email: "participant5@gmail.com",
                  createdAt: "2022-07-25T11:37:54.000Z",
                  updatedAt: "2022-07-25T11:37:54.000Z",
                  surveyId: 1,
                },
              },
              {
                id: 10,
                response: "1",
                createdAt: "2022-07-25T11:39:49.000Z",
                updatedAt: "2022-07-25T11:39:49.000Z",
                enduserId: 5,
                questionId: 4,
                enduser: {
                  id: 5,
                  name: "participan5",
                  email: "participant6@gmail.com",
                  createdAt: "2022-07-25T11:39:49.000Z",
                  updatedAt: "2022-07-25T11:39:49.000Z",
                  surveyId: 1,
                },
              },
            ],
          },
        ],
      };
      this.survey.title = apiResponse.title;
      const formQuestions = apiResponse.question.map((ele) => ({
        ...ele,
        response: null,
      }));
      this.survey.questions = formQuestions;
      // })
      // .catch((e) => {
      //   if (e.response.status === 400 || e.response.status === 404) {
      //     this.showDisclaimer = true;
      //     this.disclaimerMessage =
      //       "Your are not authorized to access the survey !";
      //   }
      //   this.message = e.response.data.message;
      // });
    },
    async handleSubmitSurvey(e) {
      e.preventDefault();
      const formRes = await this.$refs.form.validate();
      if (formRes.valid) {
        let surveyResponses = [];
        surveyResponses = this.survey.questions.map((question) => ({
          id: question.id,
          response: question.response,
        }));
        const formApiData = {
          email: this.survey.email,
          name: this.survey.name,
          surveyId: this.surveyId,
          responses: surveyResponses,
        };
        SurveyService.submitSurveyResponse(formApiData)
          .then((response) => {
            if (response.status === 200) {
              this.showDisclaimer = true;
              this.disclaimerMessage =
                "THANK YOU! Your response has been submitted.";
            }
          })
          .catch((e) => {
            this.message = e.response.data.message;
          });
      }
    },
  },
  mounted() {
    this.retreiveSurvey();
  },
};
</script>
<style>
.container {
  padding: 15px 0px;
  background: var(--lightGreen);
  min-height: 100vh;
  max-height: auto;
}

.button__black {
  background: var(--black);
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  color: var(--white);
}

.button__black:hover {
  box-shadow: 0px 10px 30px #504e4e6c;
}

.error__msg {
  color: var(--red);
  text-align: center;
  padding: 5px 0;
  margin: 10px 0;
  background: var(--white);
  padding: 5px 0;
  border-radius: 10px;
}
.form {
  width: 90%;
  color: var(--black);
  background: var(--white);
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0px 10px 30px #504e4e6c;
  margin: 0 auto;
  text-align: center;
}

.heading {
  text-align: center;
  border-bottom: 1px solid #d3d3d3;
  padding-bottom: 5px;
  font-size: 30px;
  text-transform: uppercase;
  margin: 5px 0;
}
.slider {
  margin-top: 20px;
}
.add_question {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 10px;
}
.survey__questions--wrapper {
  padding: 10px 0;
}
.survey__question--wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.survey__question {
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(230, 221, 101);
  margin: 15px 0;
  padding: 10px 10px 5px 10px;
  box-shadow: 0px 15px 30px #3d3c3c2d;
  border-radius: 5px;
}
.survey__question--heading {
  background: #e9e6e6;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 10px;
}
.survey__question--bottom {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10px;
  border-top: 1px solid rgb(230, 221, 101);
}
.survey__question--bottom .v-input,
.survey__question--bottom .v-input--horizontal {
  display: flex !important;
  width: 25% !important;
  flex: none !important;
}
.survey__question--option {
  display: flex;
  align-items: center;
}
.survey__icon {
  height: 40px;
  width: 40px;
  border: 1px solid rgb(97, 97, 204);
  font-size: 25px;
  border-radius: 50%;
  margin: 0 10px;
}
</style>
