import WweSuperstar from "./../models/WweSuperstar.js";

const getWweSuperstar = async (req, res) => {
  const fetchWweSuperstar = await WweSuperstar.find();
  return res.status(200).json({
    success: true,
    data: fetchWweSuperstar,
    message: "WWE Superstars fetched successfully",
  });
};

const getWweSuperstarById = async (req, res) => {
  const { id } = req.params;

  try {
    const fetchWweSuperstarById = await WweSuperstar.findById(id);

    if (!fetchWweSuperstarById)
      return res.status(404).json({
        success: false,
        data: null,
        message: "Oops! WWE Superstar not found",
      });

    return res.status(200).json({
      success: true,
      data: fetchWweSuperstarById,
      message: "WWE Superstar fetched successfully",
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
      data: null,
    });
  }
};

const deleteWwesuperstarById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedWwesuperstar = await WweSuperstar.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      data: deletedWwesuperstar,
      message: "WWE Superstar deleted successfully",
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
      data: null,
    });
  }
};

const postWweSuperstar = async (req, res) => {
  const { wwename, height, finisher, aka, thumbnail } = req.body;

  if(!wwename){
    return res.status(400).json({
      success:false,
      message:"Superstar name is required",
      data :"null"
    })
  }

  if(!aka){
    return res.status(400).json({
      success:false,
      message:"Superstar's nick-name is required",
      data :"null"
    })
  }

  if(!finisher){
    return res.status(400).json({
      success:false,
      message:"Superstar's finisher is required",
      data :"null"
    })
  }

  if(!thumbnail){
    return res.status(400).json({
      success:false,
      message:"WWE Superstar's image is required",
      data :"null"
    })
  }
 

  const newWweSuperstar = new WweSuperstar({
    wwename,
    height,
    finisher,
    aka,
    thumbnail,
  });

  const savedWweSuperstars = await newWweSuperstar.save();

  return res.status(201).json({
    success: true,
    data: savedWweSuperstars,
    message: "WWE Superstar created successfully",
  });
};

export {
  getWweSuperstar,
  postWweSuperstar,
  getWweSuperstarById,
  deleteWwesuperstarById,
};
