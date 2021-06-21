import { createMachine, assign } from 'xstate';
export interface ITodo {
  id: string;
  text: string;
  cleared: boolean;
  editing?: boolean;
}

interface ITodoContext {
  todos: ITodo[];
  text: string;
  todRef: any;
}

interface ITodosSchema {
  value: 'idle' | 'edit';
  context: ITodoContext;
}

type ITodoEvent =
  | { type: 'ADD_TODO' }
  | { type: 'ADDING'; text: string }
  | { type: 'MARK_DONE'; id: string }
  | { type: 'CLEAR_TODOS' }
  | { type: 'EDIT'; id: string }
  | { type: 'EDITING' };

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
          },
        },
      },
      edit: {
        entry: () => console.log('We are on Edit state man'),
        on: {
          EDITING: {
            target: 'edit',
          },
        },
      },
    },
  });
