create table tasks(
    -- not null: no puede ser nulo
    id int(11) not null auto_increment,
    title varchar(50) not null,
    description varchar(300) not null,
    done BOOLEAN not null default false,
    -- timestamp: guarda la fecha y hora de creacion
    -- current_timestamp: guarda la fecha y hora actual
    created_at timestamp default current_timestamp,
    primary key(id)
);