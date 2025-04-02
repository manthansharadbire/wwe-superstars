import WweSuperstar from './../models/WweSuperstar.js'

const getWweSuperstar = async (req, res) => {

    const fetchWweSuperstar = await WweSuperstar.find();
    return res.status(200).json({
        success: true,
        data: fetchWweSuperstar,
        message: "WWE Superstars fetched successfully"
    });
};


const getWweSuperstarById = async (req, res) => {
    const { id } = req.params;

    try {
        const fetchWweSuperstarById = await WweSuperstar.findById(id);

        if(!fetchWweSuperstarById)
            return res.status(404).json({
                success: false,
                data: null,
                message: "WWE Superstar not found in the database"
        })
        

        return res.status(200).json({
            success: true,
            data: fetchWweSuperstarById,
            message: "WWE Superstar fetched successfully"
        })
    }
    catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message,
            data: null,
        })
    }
};


const deleteWwesuperstarById = async (req, res) => {
    const { id } = req.params;

    try{
    const deletedWwesuperstar = await WweSuperstar.findByIdAndDelete(id);

    return res.status(200).json({
        success: true,
        data: deletedWwesuperstar,
        message: "WWE Superstar deleted successfully"
    })}
    catch(e){
        return res.status(400).json({
            success: false,
            message: e.message,
            data: null,
        })

    }
};





const postWweSuperstar = async (req, res) => {

    const { wwename, height, finisher, aka, thumbnail } = req.body;

    const newWweSuperstar = new WweSuperstar({
        wwename, height, finisher, aka, thumbnail
    });

    const savedWweSuperstars = await newWweSuperstar.save();

    return res.status(201).json({
        success: true,
        data: savedWweSuperstars,
        message: "WWE Superstar created successfully"
    })
}

export { getWweSuperstar, postWweSuperstar, getWweSuperstarById, deleteWwesuperstarById };