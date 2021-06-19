create or replace type TodoItem as object(
  id int,
  summary varchar(50),
  priority int,

  constructor function TodoItem(summary varchar2) return self as result,
  member procedure UpdatePriority(newPriority int),
  member function ToString return varchar2,
  static procedure InsertTodoItem(summary varchar2)
);

create table TodoItems of TodoItem(
  primary key (id),
  check (priority >= 0 and priority <= 10)
);

create sequence TodoItemSequence;

create or replace type body TodoItem as
  constructor function TodoItem(summary varchar2) return self as result is
  begin
    self.summary := summary;
    self.id := TodoItemSequence.nextval;
    self.priority := 0;
    return;
  end;

  member procedure UpdatePriority(newPriority in int) is
  begin
    self.priority := newPriority;
    update TodoItems set priority = self.priority where id = self.id;
  end;

  member function ToString return varchar2 is
  begin
    return self.id || ' ' || self.summary || ' ' || self.priority;
  end;

  static procedure InsertTodoItem(summary varchar2) is
  begin
    insert into TodoItems values(TodoItem(summary));
  end;
end;
