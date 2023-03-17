import productModal from "./product.modal.js";

export const getProducts = async (req, res) => {
  const { sort, page, limit } = req.query;
  console.log(sort, page, limit);
  if (sort && limit && page) {
    let skipValue = (page - 1) * limit;
    console.log(skipValue);
    let result = await productModal
      .find({}, { isDeleted: 0, createdAt: 0, updatedAt: 0, __v: 0 })
      .sort({ productPrice: sort })
      .limit(5)
      .skip(skipValue);
    res.send(result);
  }
  // let result = await productModal.find(
  //   {},
  //   { isDeleted: 0, createdAt: 0, updatedAt: 0, __v: 0 }
  // );
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
  req.send({ updatedProduct: Updateproduct });
};

export const deleteProduct = async (req, res) => {
  console.log("delete request");
  let Deleteproduct = await productModal.findByIdAndDelete({
    _id: req.query.id,
  });
  res.send({ deletedProduct: Deleteproduct });
};
