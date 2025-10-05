import PocketBase from "https://cdn.jsdelivr.net/npm/pocketbase@0.21.1/dist/pocketbase.es.mjs";

const pb = new PocketBase("http://localhost:8080");

// Course data based on your new schema
const courses = [
  // ZIMSEC Courses
  {
    "title": "Physics",
    "color": "#9584ff",
    "icon": "⚡",
    "lessons": [],
    "level": "Form 5",
    "examination_body": "ZIMSEC"
  },
  {
    "title": "Physics",
    "color": "#9584ff",
    "icon": "⚡",
    "lessons": [],
    "level": "Form 6",
    "examination_body": "ZIMSEC"
  },
  {
    "title": "Chemistry",
    "color": "#85ffc4",
    "icon": "⚗️",
    "lessons": [],
    "level": "Form 5",
    "examination_body": "ZIMSEC"
  },
  {
    "title": "Chemistry",
    "color": "#85ffc4",
    "icon": "⚗️",
    "lessons": [],
    "level": "Form 6",
    "examination_body": "ZIMSEC"
  },
  {
    "title": "Biology",
    "color": "#B6FF85",
    "icon": "🧬",
    "lessons": [],
    "level": "Form 5",
    "examination_body": "ZIMSEC"
  },
  {
    "title": "Biology",
    "color": "#B6FF85",
    "icon": "🧬",
    "lessons": [],
    "level": "Form 6",
    "examination_body": "ZIMSEC"
  },
  {
    "title": "Mathematics",
    "color": "#85D4FF",
    "icon": "➗",
    "lessons": [],
    "level": "Form 5",
    "examination_body": "ZIMSEC"
  },
  {
    "title": "Mathematics",
    "color": "#85D4FF",
    "icon": "➗",
    "lessons": [],
    "level": "Form 6",
    "examination_body": "ZIMSEC"
  },
  {
    "title": "Physics",
    "color": "#9584ff",
    "icon": "⚡",
    "lessons": [],
    "level": "Form 3",
    "examination_body": "ZIMSEC"
  },
  {
    "title": "Physics",
    "color": "#9584ff",
    "icon": "⚡",
    "lessons": [],
    "level": "Form 4",
    "examination_body": "ZIMSEC"
  },
  {
    "title": "Chemistry",
    "color": "#85ffc4",
    "icon": "⚗️",
    "lessons": [],
    "level": "Form 3",
    "examination_body": "ZIMSEC"
  },
  {
    "title": "Chemistry",
    "color": "#85ffc4",
    "icon": "⚗️",
    "lessons": [],
    "level": "Form 4",
    "examination_body": "ZIMSEC"
  },
  {
    "title": "Biology",
    "color": "#B6FF85",
    "icon": "🧬",
    "lessons": [],
    "level": "Form 3",
    "examination_body": "ZIMSEC"
  },
  {
    "title": "Biology",
    "color": "#B6FF85",
    "icon": "🧬",
    "lessons": [],
    "level": "Form 4",
    "examination_body": "ZIMSEC"
  },
  {
    "title": "Mathematics",
    "color": "#85D4FF",
    "icon": "➗",
    "lessons": [],
    "level": "Form 3",
    "examination_body": "ZIMSEC"
  },
  {
    "title": "Mathematics",
    "color": "#85D4FF",
    "icon": "➗",
    "lessons": [],
    "level": "Form 4",
    "examination_body": "ZIMSEC"
  },

  // Cambridge Courses
  {
    "title": "Physics",
    "color": "#9584ff",
    "icon": "⚡",
    "lessons": [],
    "level": "Form 5",
    "examination_body": "Cambridge"
  },
  {
    "title": "Physics",
    "color": "#9584ff",
    "icon": "⚡",
    "lessons": [],
    "level": "Form 6",
    "examination_body": "Cambridge"
  },
  {
    "title": "Chemistry",
    "color": "#85ffc4",
    "icon": "⚗️",
    "lessons": [],
    "level": "Form 5",
    "examination_body": "Cambridge"
  },
  {
    "title": "Chemistry",
    "color": "#85ffc4",
    "icon": "⚗️",
    "lessons": [],
    "level": "Form 6",
    "examination_body": "Cambridge"
  },
  {
    "title": "Biology",
    "color": "#B6FF85",
    "icon": "🧬",
    "lessons": [],
    "level": "Form 5",
    "examination_body": "Cambridge"
  },
  {
    "title": "Biology",
    "color": "#B6FF85",
    "icon": "🧬",
    "lessons": [],
    "level": "Form 6",
    "examination_body": "Cambridge"
  },
  {
    "title": "Mathematics",
    "color": "#85D4FF",
    "icon": "➗",
    "lessons": [],
    "level": "Form 5",
    "examination_body": "Cambridge"
  },
  {
    "title": "Mathematics",
    "color": "#85D4FF",
    "icon": "➗",
    "lessons": [],
    "level": "Form 6",
    "examination_body": "Cambridge"
  },
  {
    "title": "Physics",
    "color": "#9584ff",
    "icon": "⚡",
    "lessons": [],
    "level": "Form 3",
    "examination_body": "Cambridge"
  },
  {
    "title": "Physics",
    "color": "#9584ff",
    "icon": "⚡",
    "lessons": [],
    "level": "Form 4",
    "examination_body": "Cambridge"
  },
  {
    "title": "Chemistry",
    "color": "#85ffc4",
    "icon": "⚗️",
    "lessons": [],
    "level": "Form 3",
    "examination_body": "Cambridge"
  },
  {
    "title": "Chemistry",
    "color": "#85ffc4",
    "icon": "⚗️",
    "lessons": [],
    "level": "Form 4",
    "examination_body": "Cambridge"
  },
  {
    "title": "Biology",
    "color": "#B6FF85",
    "icon": "🧬",
    "lessons": [],
    "level": "Form 3",
    "examination_body": "Cambridge"
  },
  {
    "title": "Biology",
    "color": "#B6FF85",
    "icon": "🧬",
    "lessons": [],
    "level": "Form 4",
    "examination_body": "Cambridge"
  },
  {
    "title": "Mathematics",
    "color": "#85D4FF",
    "icon": "➗",
    "lessons": [],
    "level": "Form 3",
    "examination_body": "Cambridge"
  },
  {
    "title": "Mathematics",
    "color": "#85D4FF",
    "icon": "➗",
    "lessons": [],
    "level": "Form 4",
    "examination_body": "Cambridge"
  },

  // IEB Courses
  {
    "title": "Life Science",
    "color": "#B6FF85",
    "icon": "🧬",
    "lessons": [],
    "level": "Grade 10",
    "examination_body": "IEB"
  },
  {
    "title": "Life Science",
    "color": "#B6FF85",
    "icon": "🧬",
    "lessons": [],
    "level": "Grade 11",
    "examination_body": "IEB"
  },
  {
    "title": "Life Science",
    "color": "#B6FF85",
    "icon": "🧬",
    "lessons": [],
    "level": "Grade 12",
    "examination_body": "IEB"
  },
  {
    "title": "Physical Science",
    "color": "#9584ff",
    "icon": "⚡",
    "lessons": [],
    "level": "Grade 10",
    "examination_body": "IEB"
  },
  {
    "title": "Physical Science",
    "color": "#9584ff",
    "icon": "⚡",
    "lessons": [],
    "level": "Grade 11",
    "examination_body": "IEB"
  },
  {
    "title": "Physical Science",
    "color": "#9584ff",
    "icon": "⚡",
    "lessons": [],
    "level": "Grade 12",
    "examination_body": "IEB"
  },
  {
    "title": "Mathematics",
    "color": "#85D4FF",
    "icon": "➗",
    "lessons": [],
    "level": "Grade 10",
    "examination_body": "IEB"
  },
  {
    "title": "Mathematics",
    "color": "#85D4FF",
    "icon": "➗",
    "lessons": [],
    "level": "Grade 11",
    "examination_body": "IEB"
  },
  {
    "title": "Mathematics",
    "color": "#85D4FF",
    "icon": "➗",
    "lessons": [],
    "level": "Grade 12",
    "examination_body": "IEB"
  },

  // DBE Courses
  {
    "title": "Life Science",
    "color": "#B6FF85",
    "icon": "🧬",
    "lessons": [],
    "level": "Grade 10",
    "examination_body": "DBE"
  },
  {
    "title": "Life Science",
    "color": "#B6FF85",
    "icon": "🧬",
    "lessons": [],
    "level": "Grade 11",
    "examination_body": "DBE"
  },
  {
    "title": "Life Science",
    "color": "#B6FF85",
    "icon": "🧬",
    "lessons": [],
    "level": "Grade 12",
    "examination_body": "DBE"
  },
  {
    "title": "Physical Science",
    "color": "#9584ff",
    "icon": "⚡",
    "lessons": [],
    "level": "Grade 10",
    "examination_body": "DBE"
  },
  {
    "title": "Physical Science",
    "color": "#9584ff",
    "icon": "⚡",
    "lessons": [],
    "level": "Grade 11",
    "examination_body": "DBE"
  },
  {
    "title": "Physical Science",
    "color": "#9584ff",
    "icon": "⚡",
    "lessons": [],
    "level": "Grade 12",
    "examination_body": "DBE"
  },
  {
    "title": "Mathematics",
    "color": "#85D4FF",
    "icon": "➗",
    "lessons": [],
    "level": "Grade 10",
    "examination_body": "DBE"
  },
  {
    "title": "Mathematics",
    "color": "#85D4FF",
    "icon": "➗",
    "lessons": [],
    "level": "Grade 11",
    "examination_body": "DBE"
  },
  {
    "title": "Mathematics",
    "color": "#85D4FF",
    "icon": "➗",
    "lessons": [],
    "level": "Grade 12",
    "examination_body": "DBE"
  }
];

async function seedCourses() {
  console.log("Starting to seed courses...");
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const course of courses) {
    try {
      const record = await pb.collection("course").create(course);
      console.log(`✅ Created: ${record.title} - ${record.level} (${record.examination_body})`);
      successCount++;
    } catch (err) {
      console.error(`❌ Failed to create ${course.title} - ${course.level} (${course.examination_body}):`, err);
      errorCount++;
    }
  }
  
  console.log(`\nSeeding completed!`);
  console.log(`✅ Successfully created: ${successCount} courses`);
  console.log(`❌ Failed to create: ${errorCount} courses`);
}

// Run the seeding function
seedCourses();
