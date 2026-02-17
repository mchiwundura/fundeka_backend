from django.contrib import admin
from .models import Course, Lesson, Concept, Flashcard, Question, CalendarEvent
# Register your models here.

admin.site.register([Course, Lesson, Concept, Flashcard, Question, CalendarEvent])
