
# TODO list API with Drizzle and vercel storage

1. fist of all install

	npm i drizzle-orm pg
	npm i -D @types/pg
	npm i -D drizzle-kit
	npm install @vercel/postgres

2.0 Create Postgres Database from Storage tab on vercel dashboard
2.1 once DB created then create table from query tab
	
	CREATE TABLE tasks(
	id serial PRIMARY KEY,
	taskName varchar(255),
	isDone BOOLEAN,
	createdAT TIMESTAMP
	);

	
3.0 Connect your project with vercel DB you can connect it through two ways

3.1.1 - First deploy you project on vercel by running below command

	vercel

- Open project on dahboard click on storage tab and connect DB

3.1.2 - Secondly you can link your project with vercel

	vercel link 

3.2 Now establish connection your project with DB by adding below parameters in your local enviroment

```
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=```

simply run below command

	vercel env pull .env.development.local

which will create ".env.development.local" file in your local porject along with above mentioned parameters

Now your project is connected with DB you can run it localy


Here are the already deployed project link

###Api Link
  https://class-work-usmanashrf.vercel.app/api/todo
  
#### GET 
  you'll get all tasks list
  
 
### POST 
create new task

	request Body: {
    "taskName":"taskname",
    "isDone":true
	} 

#### PUT
It'll update the task isDone value

  request Body: {
   "id":3,
    "isDone":true
	} 

  
