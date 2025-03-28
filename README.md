Области хранения данных:

-база данных на json-SERVER
-BFF
-redux-store

сущности:
- пользователь: БД (список пользователе), BFF(сессия текущего), стор (отображение в браузере)

- роль пользователя: БД (список ролей), BFF(сессия пользователя с ролью), стор (использование на клиенте)


- статья: БД(список статей), стор (отображение данных)

- комментарий: БД(список комментариев ), стор (отображение данных)

таблицы БД:

пользователь: users: id / login / passord / registed_at / role_id
роли: role: id / name
статьи: posts: id / title / image_url / content / published_at 
комментарии: comments: id / autor_id / post_id /content

схема состояния на BFF:

сессия текущего пользователя: login / password /role

схема для стора на клиенте:

- user: id / login / roleId / session
- posts: array post:  id / title / imageUrl / publishedAt / commentsCount
- post: id / title / image_url / content / publishedAt array comments: id / autor /  content/ publishedAt
- users: array user: id / login  / registedAt / role





