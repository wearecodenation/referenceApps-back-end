const Actor = require("./actorTable");

exports.addActor = async (actorObj) => {
  try {
    return await Actor.create(actorObj);
  } catch (error) {
    console.log(error);
  }
};

exports.listActors = async (filterObj) => {
  try {
    if (filterObj) {
      return await Actor.findOne({ where: filterObj });
    } else {
      return await Actor.findAll();
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateActor = async (filterObj, updateObj) => {
  try {
    console.log(updateObj);
    await Actor.update(updateObj, { where: filterObj });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteActor = async (deleteObj) => {
  try {
    await Actor.destroy({ where: deleteObj });
  } catch (error) {
    console.log(error);
  }
};
