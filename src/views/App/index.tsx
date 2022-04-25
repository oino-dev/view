import React, { useEffect } from "react";
import style from "./index.module.scss";
import { useToDoStore } from "../../data/stores/useToDoStore";
import { InputPlus } from "../components/InputPlus";
import { InputTask } from "../components/InputTask";

export const App: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);

  console.log(tasks.length);

  return (
    <article className={style.article}>
      <h1 className={style.articleTitle}>To Do App</h1>
      <section className={style.articleSection}>
        <InputPlus
          onAdd={(title: string) => {
            if (title) {
              createTask(title);
            }
          }}
        />
      </section>
      <section className={style.articleSection}>
        {!tasks.length && <p className={style.articleText}>No tasks</p>}
        {tasks.map((task) => (
          <InputTask
            key={task.id}
            id={task.id}
            title={task.title}
            onDone={removeTask}
            onEdited={updateTask}
            onRemoved={removeTask}
          />
        ))}
      </section>
    </article>
  );
};
