import { pgTable, serial, text, timestamp, varchar, boolean} from 'drizzle-orm/pg-core';
import { NodePgDatabase, drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { InferModel } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres'

   const db = drizzle(sql)

 const tasks = pgTable('tasks', {
    ID: serial('ID').primaryKey(),
    TASKNAME: text('TASKNAME'),
    CREATEDAT: timestamp('CREATEDAT').defaultNow().notNull(),
    ISDONE: boolean('false').notNull()
  });

   type Task = InferModel<typeof tasks>;
   type NewTask = InferModel<typeof tasks, 'insert'>;

export async function GET(){
    console.log(db);
    const allTasks = await db.select().from(tasks);
    return NextResponse.json(allTasks);
}

export async function POST(request : NextRequest){
    
    const req = await request.json();
    const newTask: NewTask = {
        TASKNAME: req.taskName,
        ISDONE: req.isDone,
      };

    console.log(db);
    const insertedUsers = await db.insert(tasks).values(newTask).returning();

    return NextResponse.json(insertedUsers);
}