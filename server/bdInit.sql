create table users
(
    id                 serial primary key,
    email              varchar(255) not null unique,
    password_hash      varchar(255) not null,
    created_at         timestamptz  not null default CURRENT_TIMESTAMP,
    is_email_confirmed boolean               default false not null,
    confirm_email_link text unique,
    first_name         varchar(255) not null,
    second_name        varchar(255),
    avatar             int
);

create table images
(
    id        serial primary key,
    url       varchar(255) not null,
    user_id   int          not null,
    crated_at timestamptz  not null default current_timestamp,

    constraint fk_user
        foreign key (user_id)
            references users (id)
            on delete cascade
);

alter table users
    add
        constraint fk_image
            foreign key (avatar)
                references images (id)
                on delete set null;


create table sessions
(
    id         serial primary key,
    token      varchar(255)                                       not null
        constraint unique_token unique,
    user_id    integer                                            not null
        constraint fk_user references users on delete cascade,
    user_agent varchar(255)                                       not null,
    ip         varchar(50)                                        not null,
    created_at timestamp with time zone default CURRENT_TIMESTAMP not null,
    constraint uniq
        unique (user_id, user_agent, ip)
);

create table posts
(
    id         serial primary key,
    user_id    int         not null,
    text       text,
    created_at timestamptz not null default CURRENT_TIMESTAMP,

    constraint fk_user
        foreign key (user_id)
            references users (id)
            on delete cascade
);


create table images_posts
(
    id       serial primary key,
    image_id int not null,
    post_id  int not null,

    constraint fk_image
        foreign key (image_id)
            references images (id)
            on delete cascade,

    constraint fk_post
        foreign key (post_id)
            references posts (id)
            on delete cascade,

    constraint images_posts_uniq
        unique (post_id, image_id)
);

create table reposts
(
    id         serial primary key,
    post_id    int         not null,
    user_id    int         not null,
    created_at timestamptz not null default CURRENT_TIMESTAMP,

    constraint fk_user
        foreign key (user_id)
            references users (id)
            on delete cascade,
    constraint fk_post
        foreign key (post_id)
            references posts (id)
            on delete cascade,
    constraint reports_user_post_uniq
        unique (post_id, user_id)
);

create table likes
(
    id         serial primary key,
    post_id    int         not null,
    user_id    int         not null,
    created_at timestamptz not null default CURRENT_TIMESTAMP,

    constraint fk_user
        foreign key (user_id)
            references users (id)
            on delete cascade,
    constraint fk_post
        foreign key (post_id)
            references posts (id)
            on delete cascade,
    constraint likes_user_post_uniq
        unique (post_id, user_id)
);

create table comments
(
    id         serial primary key,
    post_id    int         not null,
    user_id    int         not null,
    created_at timestamptz not null default CURRENT_TIMESTAMP,
    text       text,

    constraint fk_user
        foreign key (user_id)
            references users (id)
            on delete cascade,
    constraint fk_post
        foreign key (post_id)
            references posts (id)
            on delete cascade
);