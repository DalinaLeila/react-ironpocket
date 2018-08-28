const express = require('express');
const router  = express.Router();
const axios = require('axios');
const Article = require("../models/Article");

/* GET home page */
router.post('/new', (req, res, next) => {
  let url = req.body.url;
  axios.get(`https://api.microlink.io?url=${url}`)
  .then(response => {
    let article = response.data.data;
    let newArticle = new Article({
      creator: req.user._id,
      title: article.title,
      image: article.image.url,
      provider: article.publisher,
      providerImg: article.logo.url,
      link: article.url
    })
    newArticle.save()
    .then(article => {
      res.status(200).json(article)

    })
  })
  .catch(error => {
    next(error)
  })
});

router.get('/all', (req, res, next) => {
  Article.find({creator: req.user._id})
  .then(articles => {
    res.status(200).json(articles)
  })
  .catch(error => {
    next(error)
  })
});

router.get('/filter', (req, res, next) => {
  const type = req.query.type;
  const filter = {};
  filter[type] = true;
  Article.find(filter)
  .then(articles => {
    res.status(200).json(articles)
  })
  .catch(error => {
    next(error)
  })
});

router.post('/update', (req, res, next) => {
  const action = req.query.action;
  const update = {}
  Article.findById(req.body.articleId)
  .then(article => {
    update[action] = !article[action];
    Article.findByIdAndUpdate(req.body.articleId, {$set: update}, {new: true})
    .then(response => {
      res.status(200).json(response)
    })
  })
  .catch(error => {
    next(error)
  })
});

router.post('/remove', (req, res, next) => {
  Article.findByIdAndRemove(req.body.articleId)
  .then(response => {
    res.status(200).json(response)
  })
  .catch(error => {
    next(error)
  })
});

module.exports = router;