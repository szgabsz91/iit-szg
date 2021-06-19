declare
  ti TodoItem;
begin
  select value(ti) into ti from TodoItems ti where ti.summary = 'Todo 2';
  ti.UpdatePriority(5);
  -- ERROR: The check constaint fails for the following 2 commands:
  -- ti.UpdatePriority(-1);
  -- ti.UpdatePriority(11);
end;

select ti.* from TodoItems ti;
