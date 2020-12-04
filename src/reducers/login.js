export default (
  state = {
    status: false,
  },
  action
) => {
  console.log(action.status + "redux");
  switch (action.type) {
    case "LOGIN": {
      return Object.assign(
        {},
        {
          status: action.status,
        }
      );
    }

    default: {
      return state;
    }
  }
};
