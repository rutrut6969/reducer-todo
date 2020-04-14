export const initialState = {
  title: 'Random Item',
  body: 'Random Body Text',
  completed: false,
  id: `${this.title}/${Date.now()}`,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_COMPLETED':
      return {
        ...state,
        completed: !state.completed,
      };
    case 'Add_TODO':
      return {
        ...state,
        title: state.title,
        body: state.body,
        completed: false,
        id: `${state.title}/${Date.now()}`,
      };

    case 'CLEAR_COMPLETED':
      if (state.completed) {
        return {
          ...state,
        };
      } else {
      }
  }
};
