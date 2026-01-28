import usersFromServer from '../../api/users';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
  user?: User;
};

type UserInfoProps = {
  todo: Todo; // ← Теперь принимает одну todo, а не массив!
};

export const UserInfo = ({ todo }: UserInfoProps) => {
  const user = usersFromServer.find(u => u.id === todo.userId);

  return (
    <article
      data-id={todo.id}
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <a className="UserInfo" href={`mailto:${user?.email}`}>
        {todo.user?.name || user?.name}
      </a>
    </article>
  );
};
