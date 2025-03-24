DROP SCHEMA public db CASCADE;
create schema public db;
SET search_path TO publicdb;

create table users
(
    id            serial primary key,
    email         varchar(255) not null unique,
    first_name    varchar(255) not null,
    second_name   varchar(255),
    password_hash text         not null,
	banner        int,
    created_at    timestamptz  not null default current_timestamp,
    avatar        int,
	status        text         
);

create table photos
(
    id        serial primary key,
    url       varchar(255) not null,
    userId    int          not null,
    crated_at timestamptz  not null default current_timestamp,

    constraint fk_user
        foreign key (userId)
            references users (id)
            on delete cascade
);

alter table users
    add
        constraint fk_avatar
            foreign key (avatar)
                references photos (id)
                on delete set null;
				
alter table users
    add
        constraint fk_banner
            foreign key (banner)
                references photos (id)
                on delete set null;

				


select * from users;
select * from photos;

insert into users (email, first_name, second_name, password_hash)
values ('test@test.test', 'Test', 'Test', 'test'),
       ('a@a.a', 'Mr. A', '', 'a'),
       ('zxc@zxc.zxc', 'ZXC', 'Ghoul', 'zxczxczxczxcxzcxzcxzc');

insert into photos (url, userId)
values ('https://sun9-17.userapi.com/impg/_BF8QlqlVGmgLtoTfsNsu3PwcNgMXp6XTMCQEg/oXnuxqnBt2Y.jpg?size=1280x720&quality=95&sign=ec9a92eb8ece3c5854550de03bf31351&type=album', 1),
('https://sun9-17.userapi.com/impg/_BF8QlqlVGmgLtoTfsNsu3PwcNgMXp6XTMCQEg/oXnuxqnBt2Y.jpg?size=1280x720&quality=95&sign=ec9a92eb8ece3c5854550de03bf31351&type=album', 2),
('https://sun9-17.userapi.com/impg/_BF8QlqlVGmgLtoTfsNsu3PwcNgMXp6XTMCQEg/oXnuxqnBt2Y.jpg?size=1280x720&quality=95&sign=ec9a92eb8ece3c5854550de03bf31351&type=album', 3),
('https://sun9-41.userapi.com/impg/ddeZDO-D9Zru2P7i_QCwe0XXpg_iZty8xyBpvA/1vc1BlWCCv0.jpg?size=960x384&quality=95&crop=0,152,2560,1024&sign=e6c9a662854e115dcbe7625e4eef3c0c&c_uniq_tag=pAtg5b3iIhazKCjrUXS3SxICA3C4udSt6hbmTUXuhaM&type=helpers&quot', 1),
('https://sun9-41.userapi.com/impg/ddeZDO-D9Zru2P7i_QCwe0XXpg_iZty8xyBpvA/1vc1BlWCCv0.jpg?size=960x384&quality=95&crop=0,152,2560,1024&sign=e6c9a662854e115dcbe7625e4eef3c0c&c_uniq_tag=pAtg5b3iIhazKCjrUXS3SxICA3C4udSt6hbmTUXuhaM&type=helpers&quot', 2),
('https://sun9-41.userapi.com/impg/ddeZDO-D9Zru2P7i_QCwe0XXpg_iZty8xyBpvA/1vc1BlWCCv0.jpg?size=960x384&quality=95&crop=0,152,2560,1024&sign=e6c9a662854e115dcbe7625e4eef3c0c&c_uniq_tag=pAtg5b3iIhazKCjrUXS3SxICA3C4udSt6hbmTUXuhaM&type=helpers&quot', 3);

update users
set banner = 4, avatar = 1, status = 'test'
where id = 1;
update users
set banner = 5, avatar = 2, status = 'AAAAA'
where id = 2;
update users
set banner = 6, avatar = 3, status = 'zxc'
where id = 3;