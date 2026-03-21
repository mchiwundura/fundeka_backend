from rest_framework import viewsets
from .models import (
    Course,
    Lesson,
    Concept,
    Flashcard,
    Question,
    CalendarEvent,
)
from .serializers import (
    CourseSerializer,
    LessonSerializer,
    ConceptSerializer,
    FlashcardSerializer,
    QuestionSerializer,
    CalendarEventSerializer,
)
from rest_framework.permissions import IsAdminUser


# Create your views here.

class CourseViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAdminUser]
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

class ConceptViewSet(viewsets.ModelViewSet):
    queryset = Concept.objects.all()
    serializer_class = ConceptSerializer

class FlashcardViewSet(viewsets.ModelViewSet):
    queryset = Flashcard.objects.all()
    serializer_class = FlashcardSerializer

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class CalendarEventViewSet(viewsets.ModelViewSet):
    queryset = CalendarEvent.objects.all()
    serializer_class = CalendarEventSerializer

