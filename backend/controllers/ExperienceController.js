const Experience = require('../models/Experience');

exports.findAll = (req, res) => {
  Experience.find()
    .then((experiences) => {
      res.status(200).json(experiences);
    })
    .catch((err) => {
      res.status(400).json({message: err});
    });
};

exports.createOne = (req, res) => {
  const experience = new Experience({
    title: req.body.title,
    subtitle: req.body.subtitle,
    thumbnail: req.body.thumbnail,
    date: req.body.date,
  });

  experience.save()
    .then((exp) => {
      res.status(200).json(exp);
    })
    .catch((err) => {
      res.status(400).json({message: err});
    });
};

exports.updateOne = (req, res) => {
  const experience = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    thumbnail: req.body.thumbnail,
    date: req.body.date,
  };

  Experience.findByIdAndUpdate(req.params.experienceId, experience)
    .then(() => res.status(200).json('Updated !'))
    .catch((err) => res.status(400).json({message: err}));
};

exports.deleteOne = (req, res) => {
  Experience.findByIdAndDelete(req.params.experienceId)
    .then(() => res.status(200).json('Deleted !'))
    .catch((err) => res.status(400).json({message: err}));
};