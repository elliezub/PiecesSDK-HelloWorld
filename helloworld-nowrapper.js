const Pieces = require('@pieces.app/pieces-os-client');

const configuration = new Pieces.Configuration({
  basePath: 'http://localhost:1000', 
});

const apiInstance = new Pieces.QGPTApi(configuration);

async function askQGPT(question) {
  try {
    const answer = await apiInstance.question({
      qGPTQuestionInput: {
        query: question,
        pipeline: {
          conversation: {
            generalizedCodeDialog: {},
          },
        },
        relevant: {
          iterable: [],
        }
      },
    });

    return answer.answers.iterable[0].text;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

askQGPT("What is the most common first project for software devs? (hint it starts with hello and ends with world)")
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error('Error:', error);
  });