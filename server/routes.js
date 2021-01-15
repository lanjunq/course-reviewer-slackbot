/* ------ imports ------ */
const mongoose = require('mongoose')
const Review = require('./MongoDB/review.js')
const mongoDB = require('./MongoDB/mongodb_connection.js')


/* ------ Hard-coded course numbers ------ */
FALL_CIS_COURSE_NUM = []
SPRING_CIS_COURSES_NUM = ['511', '515', '519', '520', '522', '530', '535', '545', '548', '550', '553', '555', '557', '559', '560', '561', '568', '571', '580', '581'];
CIT_COURSE_NUM = ['591', '592', '593', '594', '595', '596']

/* ------ GET Handlers ------ */
function getAllCourses(req, res) {
  var springCISCourses = SPRING_CIS_COURSES_NUM;
  springCISCourses.forEach( (element, index, arr) => {
    arr[index] = 'cis' + element;
  });
  res.json({ courses: springCISCourses } );
}

function getReviews(req, res) {
  let course = req.params.course;

  // Todo: add choose by course number here

  Review.find({
    'course': `${req.course}`
  })
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      console.log(error);
      res.json(error);
    })
}

function getWordCloud(req, res) {

  // Todo: implement the logic here

  res.end()
}

/* ------ POST Handlers ------ */
function postReview(req, res) {
  console.log('postReview() running');
  const review = new Review({
    _id: new mongoose.Types.ObjectId(),
    content: req.body.content
  });

  review.save().then((data) => {
    res.json({
      message: 'Data successfully saved to MongoDB!',
      data: data
    })
  }).catch(error => {
    console.log(error);
    res.status(500).json(error);
  })
}

/* ------ Helper Functions ----- */



/* ------ exports to index.js ----- */
module.exports = {
  getAllCourses: getAllCourses,
  getReviews: getReviews,
  getWordCloud: getWordCloud,
  postReview: postReview,
}
