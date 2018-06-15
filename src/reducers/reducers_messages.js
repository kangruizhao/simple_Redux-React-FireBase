

export default function(state = [], action) {
  switch (action.type) {
    case "ALL_MESSAGES":
      console.log(action.payload);
      return action.payload
  }
  return state;
}
