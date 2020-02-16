import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AddInventoryProps, AddInventoryState } from 'types';
import { postProducts } from 'api/app';

const AddInventory = (props: AddInventoryProps) => {
  const [product, setProduct] = useState<AddInventoryState>({
    name: '',
    price: 0,
    tags: '',
    image: '',
    status: 'available'
  });

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

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postProducts(product).then(({data}) => {
      props.close(data);
    })
  };

  return (
    <div className="inventory">
      <p className="title has-text-centered">inventory</p>
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
            <button className="button" type="button" onClick={() => props.close()}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddInventory;
