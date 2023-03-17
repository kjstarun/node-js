import productModal from "./product.modal.js";

const projectionData = { isDeleted: 0, createdAt: 0, updatedAt: 0, __v: 0 };

export const getAllProducts = async (req, res) => {
  console.log("test", req.query);
  let sort;
  req.query.sort ? (sort = req.query.sort) : (sort = 1);
  if (req.query.search) {
    let result = await productModal
      .find({ productName: new RegExp(req.query.search, "i") }, projectionData)
      .sort({ productPrice: sort });
    res.send(result);
  } else {
    let result = await productModal
      .find({}, projectionData)
      .sort({ productPrice: sort });
    res.send(result);
  }
};

export const getProducts = async (req, res) => {
  const { sort, page, limit } = req.query;
  console.log(sort, page, limit);
  if (sort && limit && page) {
    let skipValue = (page - 1) * limit;
    let result = await productModal
      .find({}, projectionData)
      .sort({ productPrice: sort })
      .limit(limit)
      .skip(skipValue);
    res.send(result);
  }
};

export const createNewProduct = async (req, res) => {
  const { productName, productDescription, productPrice } = req.body;

  const product = new productModal({
    productName,
    productDescription,
    productPrice,
  });
  const saveProduct = await product.save();
  res.send({ createdProduct: saveProduct });
};

export const updateProduct = async (req, res) => {
  console.log("update request");
  let Updateproduct = await productModal.updateMany(
    { _id: req.body.id },
    {
      $set: {
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        productPrice: req.body.productPrice,
      },
    }
  );
  res.send({ updatedProduct: Updateproduct });
};

export const deleteProduct = async (req, res) => {
  console.log("delete request", req.params.id);
  let Deleteproduct = await productModal.findByIdAndDelete({
    _id: req.params.id,
  });
  res.send({ deletedProduct: Deleteproduct });
};
