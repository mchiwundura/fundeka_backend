import PocketBase from 'https://cdn.jsdelivr.net/gh/pocketbase/js-sdk@latest/dist/pocketbase.es.js';
import { readFileSync } from 'node:fs';

const pb = new PocketBase('http://127.0.0.1:8080');

setTimeout(async () => {
  try {
    // authenticate as admin
    const adminData = await pb.admins.authWithPassword('mchiwundura@protonmail.com', 'dJango+263');

    // delete course collection if it exists
    try {
      await pb.collections.delete('pbc_562893559');
      console.log('Course collection deleted successfully!');
    } catch (error) {
      console.log('Course collection not found or deletion failed:', error);
    }

    // delete lesson collection if it exists
    try {
      await pb.collections.delete('lessons');
      console.log('Lesson collection deleted successfully!');
    } catch (error) {
      console.log('Lesson collection not found or deletion failed:', error);
    }

    // delete question collection if it exists
    try {
      await pb.collections.delete('questions');
      console.log('Question collection deleted successfully!');
    } catch (error) {
      console.log('Question collection not found or deletion failed:', error);
    }

    // create course collection
    const courseCollection = {
      "id": "pbc_562893559",
      "name": "course",
      "type": "base",
      "system": false,
      "schema": [
        {
          "name": "title",
          "type": "text",
          "required": true,
          "presentable": true,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "name": "icon",
          "type": "text",
          "required": false,
          "presentable": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "name": "color",
          "type": "text",
          "required": false,
          "presentable": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "name": "level",
          "type": "text",
          "required": false,
          "presentable": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "name": "examination_body",
          "type": "text",
          "required": false,
          "presentable": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "name": "lessons",
          "type": "relation",
          "required": false,
          "presentable": false,
          "options": {
            "collectionId": "pbc_new_lesson_id",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 999,
            "displayFields": null
          }
        }
      ],
      "indexes": [],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null
    };
    await pb.collections.create(courseCollection);
    console.log('Course collection created successfully!');

    // create lesson collection
    const lessonCollection = {
      "id": "pbc_new_lesson_id", // New ID
      "name": "lessons",
      "type": "base",
      "system": false,
      "schema": [
        {
          "name": "title",
          "type": "text",
          "required": true,
          "presentable": true,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "name": "content",
          "type": "editor",
          "required": false,
          "presentable": false,
          "options": {
            "convertUrls": false
          }
        },
        {
          "name": "course",
          "type": "relation",
          "required": true,
          "presentable": false,
          "options": {
            "collectionId": "pbc_562893559",
            "cascadeDelete": true,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        }
      ],
      "indexes": [],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null
    };
    await pb.collections.create(lessonCollection);
    console.log('Lesson collection created successfully!');

    // create question collection
    const questionCollection = {
      "id": "pbc_new_question_id", // New ID
      "name": "questions",
      "type": "base",
      "system": false,
      "schema": [
        {
          "name": "question",
          "type": "text",
          "required": true,
          "presentable": true,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "name": "options",
          "type": "json",
          "required": true,
          "presentable": false,
          "options": {}
        },
        {
          "name": "answer",
          "type": "text",
          "required": true,
          "presentable": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "name": "lesson",
          "type": "relation",
          "required": true,
          "presentable": false,
          "options": {
            "collectionId": "pbc_new_lesson_id", // Use new lesson ID
            "cascadeDelete": true,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        }
      ],
      "indexes": [],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null
    };
    await pb.collections.create(questionCollection);
    console.log('Question collection created successfully!');

    // populate questions
    const questionFiles = [
      '/mnt/c/Users/Admin/Development/Projects/fundeka/sylubi/questions/Cambridge_Advanced_Physics_questions.json',
      '/mnt/c/Users/Admin/Development/Projects/fundeka/sylubi/questions/IEB_Metric_Physical_Science_questions.json',
      '/mnt/c/Users/Admin/Development/Projects/fundeka/sylubi/questions/ZIMSEC_Advanced_Physics_questions.json',
    ];

    for (const file of questionFiles) {
      const fileContent = JSON.parse(readFileSync(file, 'utf8'));
      const questions = fileContent.questions;
      for (const question of questions) {
        await pb.collection('questions').create(question);
      }
    }
    console.log('Questions populated successfully!');

  } catch (error) {
    console.error(error);
  }
}, 15000);