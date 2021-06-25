import { createMachine, assign } from 'xstate';
export interface ITodo {
  id: string;
  text: string;
  cleared: boolean;
  editing?: boolean;
}

export interface ITodoContext {
  todos: ITodo[];
  text: string;
  todRef: any;
  editItem?: any;
}

export interface ITodosSchema {
  value: 'idle' | 'edit';
  context: ITodoContext;
}

export type ITodoEvent =
  | { type: 'ADD_TODO' }
  | { type: 'ADDING'; text: string }
  | { type: 'MARK_DONE'; id: string }
  | { type: 'CLEAR_TODOS' }
  | { type: 'EDIT'; editItem: ITodo }
  | { type: 'EDITING'; text: string }
  | { type: 'SUBMIT' }
  | {
      type: 'DELETE';
      id: string;
    };

export const TodosMachine = () =>
  createMachine<ITodoContext, ITodoEvent, ITodosSchema>({
    id: 'TodosMachine',
    initial: 'idle',
    context: {
      todos: [],
      todRef: null,
      text: '',
    },

    states: {
      idle: {
        on: {
          ADD_TODO: {
            target: 'idle',
            actions: assign((context, event) => {
              return {
                ...context,
                todos: context?.todos?.concat({
                  id: new Date().toISOString(),
                  cleared: false,
                  text: context?.text,
                }),
                text: '',
              };
            }),
            cond: (context, event) => !!context?.text,
          },

          ADDING: {
            target: 'idle',
            actions: assign((context, event) => {
              return {
                text: event?.text,
              };
            }),
          },
          MARK_DONE: {
            target: 'idle',
            actions: assign((context, event) => {
              return {
                todos: context?.todos.map((todo) =>
                  todo?.id === event?.id
                    ? {
                        ...todo,
                        cleared: !todo?.cleared,
                      }
                    : todo
                ),
              };
            }),
          },

          CLEAR_TODOS: {
            target: 'idle',
            actions: assign((context, event) => ({
              todos: [],
              text: '',
            })),
          },

          EDIT: {
            target: 'edit',
            actions: assign((context, event) => ({
              editItem: event.editItem,
            })),
          },
          DELETE: {
            target: 'idle',
            actions: assign((context, event) => {
              console.log(event);
              return {
                ...context,
                todos: context?.todos?.filter((todo) => todo?.id !== event.id),
              };
            }),
          },
        },
      },
      edit: {
        on: {
          EDITING: {
            target: 'edit',
            actions: assign((context, event) => {
              return {
                ...context,
                editItem: {
                  ...context.editItem,
                  text: event?.text,
                },
              };
            }),
          },
          SUBMIT: {
            target: 'idle',
            actions: assign((context, event) => {
              return {
                todos: context.todos?.map((todo) => {
                  return todo.id === context?.editItem.id
                    ? {
                        ...context?.editItem,
                        cleared: false,
                      }
                    : todo;
                }),
              };
            }),
          },
        },
      },
    },
  });
