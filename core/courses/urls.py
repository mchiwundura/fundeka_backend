from rest_framework.routers import DefaultRouter
from .views import (
    CourseViewSet,
    LessonViewSet,
    ConceptViewSet,
    FlashcardViewSet,
    QuestionViewSet,
    CalendarEventViewSet,
)

router = DefaultRouter()

router.register(r"courses", CourseViewSet)
router.register(r"lessons", LessonViewSet)
router.register(r"concepts", ConceptViewSet)
router.register(r"flashcards", FlashcardViewSet)
router.register(r"questions", QuestionViewSet)
router.register(r"calendar-events", CalendarEventViewSet)

urlpatterns = router.urls

