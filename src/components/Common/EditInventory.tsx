import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { EditInventoryProps, EditInventoryState, productType } from 'types';
import { putProducts, delProducts } from 'api/app';
import { toast } from 'react-toastify';

const EditInventory = (props: EditInventoryProps) => {
  const [product, setProduct] = useState<EditInventoryState>({
    id: 0,
    name: '',
    price: 0,
    tags: '',
    image: '',
    status: 'available'
  });

  useEffect(() => {
    const { id ,name, price, tags, image, status } = props.product;

    setProduct({
      id,
      name,
      price,
      tags,
      image,
      status
    });
  }, [props.product]);

  const handleChange = (
    e:
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;
    const name = e.target.name;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await putProducts(product.id ,product);
    props.close(response as productType);
    toast('success');
  };

  const onDelete = async () => {
    delProducts(product.id).then(() => {
      props.close(product);
      toast('Delete Success');
    })
  }

  return (
    <div className="inventory">
      <p className="title has-text-centered">Edit</p>
      <form onSubmit={submit}>
        <div className="field">
          <div className="control">
            <label className="label">Name</label>
            <textarea
              className="textarea"
              placeholder="Textarea"
              name="name"
              value={product.name}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="label">Price</label>
            <input
              type="text"
              className="input"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="label">Tags</label>
            <input
              type="text"
              className="input"
              name="tags"
              value={product.tags}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="label">Image</label>
            <input
              type="text"
              className="input"
              name="image"
              value={product.image}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="label">Status</label>
            <div className="select is-fullwidth">
              <select name="status" value={product.status} onChange={handleChange}>
                <option>available</option>
                <option>unavailable</option>
              </select>
            </div>
          </div>
        </div>
        <br />
        <div className="field is-grouped is-grouped-centered">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-danger" type="button" onClick={onDelete}>Delete</button>
          </div>
          <div className="control">
            <button className="button" type="button" onClick={() => props.close()}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditInventory;
