import Customer from "../database/models/customer";

export async function getAllCustomers(res) {
  try {
    const getAllCustomers = await Customer.find({});
    res.status(200).json(getAllCustomers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function createCustomer(req, res) {
  try {
    const newCustomer = await Customer.create(req.body);
    res.status(200).json(newCustomer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getUniqueCustomer() {
  try {
    const uniqueCustomer = await Customer.findById(id);
    return uniqueCustomer;
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function updateUniqueCustomer(req, res) {
  const { query } = req;
  const { id } = query;

  try {
    const updatedUniqueCustomer = await Customer.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUniqueCustomer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteUniqueCustomer(req, res) {
  const { query } = req;
  const { id } = query;

  try {
    const deletingUniqueCustomer = await Customer.findByIdAndDelete(id, req.body);
    res.status(200).json(deletingUniqueCustomer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}