import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../component/Loading.js";
import Error from "../component/Error.js";
import { getAllFood } from "../actions/FoodActions.js";

const FoodList = () => {
  const dispatch = useDispatch();
  const { food, loading, error } = useSelector((state) => state.foodReducer);

  useEffect(() => {
    dispatch(getAllFood());
  }, [dispatch]);
  return (
    <div>
      <h1>Food list</h1>
      {error && <Error error={"Something went wrong"} />}
      {loading && <Loading />}

      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {food &&
            food.map((foods) => {
              return (
                <tr>
                  <td>{foods.name} </td>
                  <td>
                 Small : {foods.prices[0]['small']} <br/>
                  Medium : {foods.prices[0]['medium']}<br/>
                  Large : {foods.prices[0]['large']}
                  </td>
                  <td>
                    {foods.category}
                  </td>
                  <td>
                    <span className="m-1">edit <i className="fa fa-edit"></i> </span>
                    <span>edit <i className="fa fa-trash"></i> </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default FoodList;
